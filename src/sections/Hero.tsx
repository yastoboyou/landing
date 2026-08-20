import { ArrowRight, Heart, Smile, Star } from 'lucide-react'
import heroPortrait from '../assets/ramina-portrait.jpg'
import { translations, whatsappUrl, type Lang } from '../i18n/content'

interface HeroProps {
  lang: Lang
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang]

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            {t.heroTag}
          </div>
          <h1 className="hero__title">
            {t.heroTitle} <span className="hero__title-name">{t.heroName}</span>
          </h1>
          <p className="hero__lead">{t.heroLead}</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hero__cta">
            {t.heroCta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
        <div className="hero__media">
          <div className="hero__photo">
            <div className="hero__photo-frame">
              <img src={heroPortrait} alt="Рамина Колбая" />
            </div>
            <span className="hero__sticker hero__sticker--heart" aria-hidden="true">
              <Heart size={22} strokeWidth={1.75} color="#fff" fill="#fff" />
            </span>
            <span className="hero__sticker hero__sticker--smile" aria-hidden="true">
              <Smile size={22} strokeWidth={1.75} color="#fff" />
            </span>
            <span className="hero__sticker hero__sticker--star" aria-hidden="true">
              <Star size={20} strokeWidth={1.75} color="#fff" fill="#fff" />
            </span>
          </div>
          <p className="hero__caption">{t.heroCaption}</p>
        </div>
      </div>
    </section>
  )
}
