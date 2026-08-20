import { useEffect, useRef } from 'react'
import { aboutItems, translations, type Lang } from '../i18n/content'

interface AboutProps {
  lang: Lang
}

export function About({ lang }: AboutProps) {
  const t = translations[lang]
  const items = aboutItems[lang]
  const loopItems = [...items, ...items]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    const step = () => {
      const el = scrollRef.current
      if (el) {
        el.scrollTop += 0.35
        if (el.scrollTop >= el.scrollHeight - el.clientHeight - 1) {
          el.scrollTop = 0
        }
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [lang])

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="badge">{t.aboutBadge}</span>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="section-lead">{t.aboutLead}</p>
          <div className="about__note">
            <div className="about__note-icon" aria-hidden="true">
              !
            </div>
            <div>
              <h4 className="about__note-title">{t.aboutNoteTitle}</h4>
              <p className="about__note-text">{t.aboutNoteText}</p>
            </div>
          </div>
        </div>
        <div className="about__list-wrap">
          <div className="about__list" ref={scrollRef}>
            {loopItems.map((txt, i) => (
              <div className="about__item" key={i}>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
