import { useState } from 'react'
import { Collapsible } from 'radix-ui'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { timeline, translations, type Lang } from '../i18n/content'

const COLLAPSED_COUNT = 3

interface ExperienceProps {
  lang: Lang
}

export function Experience({ lang }: ExperienceProps) {
  const t = translations[lang]
  const items = timeline[lang]
  const reveal = useScrollReveal()
  const [expanded, setExpanded] = useState(false)
  const alwaysVisible = items.slice(0, COLLAPSED_COUNT)
  const rest = items.slice(COLLAPSED_COUNT)

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <div className="section-head">
          <span className="badge">{t.expBadge}</span>
          <h2 className="section-title">{t.expTitle}</h2>
          <p className="section-lead">{t.expLead}</p>
        </div>
        <Collapsible.Root open={expanded} onOpenChange={setExpanded}>
          <ol className="experience__list">
            {alwaysVisible.map((item, i) => (
              <li className="experience__item reveal" ref={reveal} key={i}>
                <div className="experience__badge">{item.yr}</div>
                <div className="experience__item-body">
                  <h3 className="experience__item-title">{item.title}</h3>
                  {item.desc && <p className="experience__item-desc">{item.desc}</p>}
                </div>
              </li>
            ))}
          </ol>
          {rest.length > 0 && (
            <Collapsible.Content className="experience__collapsible">
              <ol className="experience__list">
                {rest.map((item, i) => (
                  <li className="experience__item reveal" ref={reveal} key={i}>
                    <div className="experience__badge">{item.yr}</div>
                    <div className="experience__item-body">
                      <h3 className="experience__item-title">{item.title}</h3>
                      {item.desc && <p className="experience__item-desc">{item.desc}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </Collapsible.Content>
          )}
        </Collapsible.Root>
        {items.length > COLLAPSED_COUNT && (
          <button type="button" className="experience__more" onClick={() => setExpanded((v) => !v)}>
            {expanded ? t.expShowLess : t.expShowMore}
            <ChevronDown
              size={16}
              strokeWidth={1.75}
              className={expanded ? 'experience__more-icon experience__more-icon--up' : 'experience__more-icon'}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </section>
  )
}
