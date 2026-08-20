import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { languages, phone, translations, type Lang } from '../i18n/content'

interface HeaderProps {
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export function Header({ lang, onLangChange }: HeaderProps) {
  const t = translations[lang]
  const [open, setOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function onPointerDown(e: PointerEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  return (
    <div className="site-header">
      <div className="site-header__bar" ref={barRef}>
        <img src={logo} alt="Рамина Колбая" className="site-header__logo" />
        <div className="site-header__menu" data-state={open ? 'open' : 'closed'}>
          <div className="site-header__menu-inner">
            <nav className="site-header__nav">
              <a href="#about" onClick={() => setOpen(false)}>
                {t.navAbout}
              </a>
              <a href="#services" onClick={() => setOpen(false)}>
                {t.navServices}
              </a>
              <a href="#experience" onClick={() => setOpen(false)}>
                {t.navExperience}
              </a>
              <a href="#faq" onClick={() => setOpen(false)}>
                {t.navFaq}
              </a>
            </nav>
            <div className="site-header__actions">
              <div className="lang-switch">
                {languages.map((code, i) => (
                  <span className="lang-switch__item" key={code}>
                    {i > 0 && <span className="lang-switch__sep">/</span>}
                    <button
                      type="button"
                      className={
                        code === lang
                          ? 'lang-switch__btn lang-switch__btn--active'
                          : 'lang-switch__btn'
                      }
                      onClick={() => onLangChange(code)}
                    >
                      {code.toUpperCase()}
                    </button>
                  </span>
                ))}
              </div>
              <a
                href={`tel:${phone}`}
                className="call-btn"
                aria-label={`${t.callBtn}: ${phone}`}
                onClick={() => setOpen(false)}
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="site-header__burger"
          aria-label={t.menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={22} strokeWidth={1.75} color="var(--text-h)" aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={1.75} color="var(--text-h)" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}
