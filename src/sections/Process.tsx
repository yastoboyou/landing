import { useEffect, useState } from 'react'
import { Accordion } from 'radix-ui'
import { ChevronDown } from 'lucide-react'
import officePhoto from '../assets/ramina-office.jpg'
import sessionPhoto from '../assets/ramina-session.jpg'
import videoCallPhoto from '../assets/ramina-video-call.png'
import { translations, whatsappUrl, type Lang } from '../i18n/content'

interface ProcessProps {
  lang: Lang
}

const photos = [officePhoto, sessionPhoto, videoCallPhoto]

export function Process({ lang }: ProcessProps) {
  const t = translations[lang]
  const steps = [
    { n: '01', title: t.p1Title, body: t.p1Body },
    { n: '02', title: t.p2Title, body: t.p2Body },
    { n: '03', title: t.p3Title, body: t.p3Body },
    { n: '04', title: t.p4Title, body: t.p4Body },
  ]
  const [frontPhoto, setFrontPhoto] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setFrontPhoto((i) => (i + 1) % photos.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="process" className="process">
      <div className="process__inner">
        <div className="section-head">
          <span className="badge">{t.processBadge}</span>
          <h2 className="section-title">{t.processTitle}</h2>
          <p className="section-lead">{t.processLead}</p>
        </div>
        <div className="process__layout">
          <button
            type="button"
            className="process__photos"
            onClick={() => setFrontPhoto((i) => (i + 1) % photos.length)}
            aria-label="Показать следующее фото"
          >
            {photos.map((src, i) => {
              const offset = (i - frontPhoto + photos.length) % photos.length
              const rotate = offset === 0 ? 0 : offset % 2 === 1 ? 6 : -6
              return (
                <img
                  src={src}
                  alt=""
                  key={src}
                  className="process__photo-card"
                  style={{
                    zIndex: photos.length - offset,
                    transform: `translateY(${offset * 10}px) rotate(${rotate}deg) scale(${1 - offset * 0.05})`,
                  }}
                />
              )
            })}
          </button>
          <Accordion.Root type="single" collapsible defaultValue="0" className="process__accordion">
            {steps.map((step, i) => (
              <Accordion.Item value={String(i)} className="process__row" key={step.n}>
                <Accordion.Header>
                  <Accordion.Trigger className="process__row-head">
                    <span className="process__row-n">{step.n}</span>
                    <span className="process__row-title">{step.title}</span>
                    <span className="process__row-chevron" aria-hidden="true">
                      <ChevronDown size={18} strokeWidth={1.75} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="process__row-content">
                  <div className="process__row-body">
                    <p>{step.body}</p>
                    {i === 0 && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="process__row-cta"
                      >
                        {t.p1Cta}
                      </a>
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
