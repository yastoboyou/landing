import { Heart, Languages, MapPin, MessageCircleHeart, Phone, Send, ShieldCheck } from 'lucide-react'
import { address, instagramUrl, phone, telegramUrl, threadsUrl, translations, whatsappUrl, type Lang } from '../i18n/content'

/* Instagram has no lucide icon (removed from the package); this mirrors lucide's own
   stroke style (24x24, round caps) so it blends in next to real lucide icons. */
function InstagramIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--text-h)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

/* Threads has no lucide icon either — path from assets/meteor-icons_threads.svg, inlined so it
   can be themed with var(--text-h) like the other icons instead of a fixed black fill */
function ThreadsIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--text-h)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.99997 8C11 6 16 7 16 12M16 12C16 17 11 18 8.99997 16C6.99997 14 9.99997 9.6 16 12ZM16 12C22 14.4 18.5 22 12 22C5.49997 22 1.99997 16 3.99997 8C5.99997 0 18 0 20 8" />
    </svg>
  )
}

interface ContactProps {
  lang: Lang
}

export function Contact({ lang }: ContactProps) {
  const t = translations[lang]

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__card">
          <div className="contact__stickers" aria-hidden="true">
            <span className="contact__sticker contact__sticker--pink">
              <Heart size={22} strokeWidth={1.75} color="#fff" fill="#fff" />
            </span>
            <span className="contact__sticker contact__sticker--blue">
              <MessageCircleHeart size={22} strokeWidth={1.75} color="#fff" />
            </span>
          </div>
          <div className="contact__top">
            <span className="badge">{t.contactBadge}</span>
            <h2 className="contact__title">{t.contactTitle}</h2>
            <p className="section-lead">{t.contactLead}</p>
            <div className="contact__actions">
              <a href={whatsappUrl} className="contact__cta-primary" target="_blank" rel="noreferrer">
                {t.ctaNow}
              </a>
            </div>
            <div className="contact__social">
              <a
                href={telegramUrl}
                className="contact__social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <Send size={18} strokeWidth={1.75} color="var(--text-h)" aria-hidden="true" />
              </a>
              <a
                href={instagramUrl}
                className="contact__social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={threadsUrl}
                className="contact__social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label="Threads"
              >
                <ThreadsIcon />
              </a>
              <a href={`tel:${phone}`} className="contact__social-icon" aria-label={t.callBtn}>
                <Phone size={18} strokeWidth={1.75} color="var(--text-h)" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--purple">
                <ShieldCheck size={16} strokeWidth={2.25} color="#fff" aria-hidden="true" />
              </div>
              <div>
                <h4>{t.infoEthicsTitle}</h4>
                <p>{t.infoEthicsText}</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--teal">
                <Languages size={16} strokeWidth={2.25} color="#fff" aria-hidden="true" />
              </div>
              <div>
                <h4>{t.infoLangTitle}</h4>
                <p>{t.infoLangText}</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--orange">
                <MapPin size={16} strokeWidth={2.25} color="#fff" aria-hidden="true" />
              </div>
              <div>
                <h4>{t.infoAddrTitle}</h4>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
