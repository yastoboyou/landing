import { useEffect, useState } from 'react'
import { ToggleGroup } from 'radix-ui'
import { services, translations, type Lang } from '../i18n/content'

interface ServicesProps {
  lang: Lang
}

type Currency = 'UAH' | 'EUR'

// Approximate EUR→UAH rate used only until the live rate below finishes loading.
const FALLBACK_EUR_TO_UAH = 48

const ctaPrefixes: Record<Lang, string> = {
  ru: 'Записаться на ',
  ua: 'Записатися на ',
  de: 'Termin buchen: ',
}

function formatPrice(priceEUR: number | null, currency: Currency, rate: number, freeLabel: string) {
  if (priceEUR === null) return freeLabel
  if (currency === 'EUR') return `${priceEUR} €`
  return `${Math.round(priceEUR * rate).toLocaleString('uk-UA')} ₴`
}

export function Services({ lang }: ServicesProps) {
  const t = translations[lang]
  const list = services[lang]
  const [serviceIndex, setServiceIndex] = useState(0)
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [rate, setRate] = useState<number>(FALLBACK_EUR_TO_UAH)
  const active = list[serviceIndex]
  const ctaLabel = `${ctaPrefixes[lang]}${active.name.toLowerCase()}`

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
              <button
                type="button"
                className={
                  i === serviceIndex
                    ? 'services__row services__row--active'
                    : 'services__row'
                }
                key={s.name}
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
            ))}
          </div>
          <div className="services__detail" key={serviceIndex}>
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
              <a href="#contact" className="services__detail-cta">
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
