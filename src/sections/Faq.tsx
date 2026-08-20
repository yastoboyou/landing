import { Accordion } from 'radix-ui'
import { Plus } from 'lucide-react'
import { faqList, translations, type Lang } from '../i18n/content'

interface FaqProps {
  lang: Lang
}

export function Faq({ lang }: FaqProps) {
  const t = translations[lang]
  const items = faqList[lang]

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <div className="section-head">
          <span className="badge">{t.faqBadge}</span>
          <h2 className="section-title">{t.faqTitle}</h2>
          <p className="section-lead">{t.faqLead}</p>
        </div>
        <Accordion.Root type="single" collapsible defaultValue="0" className="faq__list">
          {items.map((item, i) => (
            <Accordion.Item value={String(i)} className="faq__item" key={item.q}>
              <Accordion.Header>
                <Accordion.Trigger className="faq__item-head">
                  <h3>{item.q}</h3>
                  <span className="faq__toggle" aria-hidden="true">
                    <Plus size={18} strokeWidth={1.75} color="#fff" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq__item-answer">
                <div className="faq__item-answer-inner">{item.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
