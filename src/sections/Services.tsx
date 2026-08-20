import { useEffect, useState } from 'react'
import { ToggleGroup } from 'radix-ui'
import { services, translations, whatsappUrl, type Lang, type ServiceEntry, type TranslationStrings } from '../i18n/content'
import { useIsMobile } from '../hooks/useIsMobile'

interface ServicesProps {
  lang: Lang
}

type Currency = 'UAH' | 'EUR'

// Approximate EUR→UAH rate used only until the live rate below finishes loading.
const FALLBACK_EUR_TO_UAH = 48

function formatPrice(priceEUR: number | null, currency: Currency, rate: number, freeLabel: string) {
  if (priceEUR === null) return freeLabel
  if (currency === 'EUR') return `${priceEUR} €`
  return `${Math.round(priceEUR * rate).toLocaleString('uk-UA')} ₴`
}

interface ServiceDetailProps {
  active: ServiceEntry
  currency: Currency
  rate: number
  t: TranslationStrings
}

function ServiceDetail({ active, currency, rate, t }: ServiceDetailProps) {
  const ctaHref = active.whatsappMessage
    ? `${whatsappUrl}?text=${encodeURIComponent(active.whatsappMessage)}`
    : '#contact'

  return (
    <div className="services__detail" key={active.name}>
      <div>
        <h3>{active.name}</h3>
        <p className="services__detail-desc">{active.desc}</p>
      </div>
      <div className="services__detail-card">
        <div className="services__detail-price">
          {formatPrice(active.priceEUR, currency, rate, t.free)}
        </div>
        <ul className="services__detail-bullets">
          {active.bullets.map((b) => (
            <li key={b}>
              <span className="services__detail-dot" />
              {b}
            </li>
          ))}
        </ul>
        <a
          href={ctaHref}
          className="services__detail-cta"
          {...(active.whatsappMessage ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {active.whatsappMessage ? t.servicesCtaMore : t.servicesCta}
        </a>
      </div>
    </div>
  )
}

export function Services({ lang }: ServicesProps) {
  const t = translations[lang]
  const list = services[lang]
  const [serviceIndex, setServiceIndex] = useState(0)
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [rate, setRate] = useState<number>(FALLBACK_EUR_TO_UAH)
  const isMobile = useIsMobile()
  const active = list[serviceIndex]

  useEffect(() => {
    let cancelled = false
    fetch('https://open.er-api.com/v6/latest/EUR')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data?.rates?.UAH === 'number') {
          setRate(data.rates.UAH)
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__header">
          <div>
            <span className="badge">{t.servicesBadge}</span>
            <h2 className="section-title">{t.servicesTitle}</h2>
            <p className="section-lead">{t.servicesLead}</p>
          </div>
          <ToggleGroup.Root
            type="single"
            value={currency}
            onValueChange={(value) => {
              if (value) setCurrency(value as Currency)
            }}
            className="currency-switch"
          >
            <ToggleGroup.Item value="UAH" className="currency-switch__btn">
              UAH
            </ToggleGroup.Item>
            <ToggleGroup.Item value="EUR" className="currency-switch__btn">
              EUR
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <div className="services__layout">
          <div className="services__list">
            {list.map((s, i) => (
              <div className="services__row-wrap" key={s.name}>
                <button
                  type="button"
                  className={
                    i === serviceIndex
                      ? 'services__row services__row--active'
                      : 'services__row'
                  }
                  onClick={() => setServiceIndex(i)}
                >
                  <span className="services__row-info">
                    <span className="services__row-name">{s.name}</span>
                    <span className="services__row-dur">{s.dur}</span>
                  </span>
                  <span className="services__row-price">
                    <span className="services__row-price-value">
                      {formatPrice(s.priceEUR, currency, rate, t.free)}
                    </span>{' '}
                    <span className="services__row-price-unit">{s.unit}</span>
                  </span>
                </button>
                {/* mobile: the detail card slots in right under the selected row instead of
                    trailing after the whole list — see the desktop copy below for md+ */}
                {isMobile && i === serviceIndex && (
                  <ServiceDetail active={active} currency={currency} rate={rate} t={t} />
                )}
              </div>
            ))}
          </div>
          {!isMobile && (
            <ServiceDetail active={active} currency={currency} rate={rate} t={t} />
          )}
        </div>
      </div>
    </section>
  )
}
