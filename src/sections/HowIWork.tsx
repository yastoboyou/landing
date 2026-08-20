import { Accordion } from 'radix-ui'
import { ChevronDown, Feather, HeartHandshake } from 'lucide-react'
import step1Media from '../assets/1.jpg'
import step2Media from '../assets/2.jpg'
import step3Media from '../assets/3.jpg'
import { translations, type Lang } from '../i18n/content'

interface HowIWorkProps {
  lang: Lang
}

export function HowIWork({ lang }: HowIWorkProps) {
  const t = translations[lang]
  const steps = [
    { title: t.step1Title, body: t.step1Body, media: step1Media },
    { title: t.step2Title, body: t.step2Body, media: step2Media },
    { title: t.step3Title, body: t.step3Body, media: step3Media },
  ]

  return (
    <section id="how-i-work" className="how">
      <div className="how__inner">
        <div className="section-head">
          <span className="badge">{t.howBadge}</span>
          <h2 className="section-title">{t.howTitle}</h2>
          <p className="section-lead">{t.howLead}</p>
          <div className="how__badges" aria-hidden="true">
            <span className="how__badge how__badge--lavender">
              <HeartHandshake size={18} strokeWidth={1.75} />
            </span>
            <span className="how__badge how__badge--mint">
              <Feather size={16} strokeWidth={1.75} />
            </span>
          </div>
        </div>
        <Accordion.Root type="single" collapsible defaultValue="0" className="how__accordion">
          {steps.map((step, i) => (
            <Accordion.Item value={String(i)} className="how__row" key={step.title}>
              <Accordion.Header>
                <Accordion.Trigger className="how__row-head">
                  <span className="how__row-number">0{i + 1}</span>
                  <span className="how__row-title">{step.title}</span>
                  <span className="how__row-chevron" aria-hidden="true">
                    <ChevronDown size={18} strokeWidth={1.75} />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="how__row-content">
                <div className="how__row-body">
                  <p className="how__row-text">{step.body}</p>
                  <div className="how__row-media">
                    <img src={step.media} alt="" />
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
