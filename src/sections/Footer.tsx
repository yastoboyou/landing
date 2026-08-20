import { translations, type Lang } from '../i18n/content'

interface FooterProps {
  lang: Lang
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__nav">
          <a href="#about">{t.navAbout}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#experience">{t.navExperience}</a>
          <a href="#faq">{t.navFaq}</a>
          <a href="#contact">{t.contactBadge}</a>
        </div>
        <div className="site-footer__bottom">
          <p>{t.footerNote1}</p>
          <p>{t.footerNote2}</p>
        </div>
      </div>
    </footer>
  )
}
