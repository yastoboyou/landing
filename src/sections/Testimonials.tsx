import { useState } from 'react'
import { Play, Quote } from 'lucide-react'
import { testimonialOrder, testimonials, translations, type Lang } from '../i18n/content'

const subtitleLabel: Record<Lang, string> = { ru: 'Русский', ua: 'Українська', de: 'Deutsch' }

interface TestimonialsProps {
  lang: Lang
}

export function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang]
  const testi = testimonials[lang]
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoName = t.heroName.split(' ')[0]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="section-head">
          <span className="badge">{t.testiBadge}</span>
          <h2 className="section-title">{t.testiTitle}</h2>
          <p className="section-lead">{t.testiLead}</p>
        </div>
        <div className="testimonials__grid">
          {testimonialOrder.map((key) => (
            <div className="testimonial-card" key={key}>
              <Quote
                className="testimonial-card__quote"
                size={28}
                strokeWidth={1.75}
                color="var(--text-h)"
                aria-hidden="true"
              />
              <p className="testimonial-card__text">{testi[key].text}</p>
              <p className="testimonial-card__author">{testi[key].author}</p>
            </div>
          ))}
          <div className="testimonial-video">
            <video
              className="testimonial-video__media"
              src="/video/ramina-testimonial.mp4"
              poster="/video/ramina-testimonial-poster.jpg"
              controls={videoPlaying}
              playsInline
              preload="metadata"
              onPause={() => setVideoPlaying(false)}
              onEnded={() => setVideoPlaying(false)}
            >
              <track
                key={lang}
                kind="subtitles"
                src={`/video/ramina-testimonial-${lang}.vtt`}
                srcLang={lang}
                label={subtitleLabel[lang]}
                default
              />
            </video>
            {!videoPlaying && (
              <button
                type="button"
                className="testimonial-video__overlay"
                onClick={(e) => {
                  setVideoPlaying(true)
                  const video = e.currentTarget.previousElementSibling as HTMLVideoElement
                  video.play()
                }}
                aria-label={`${t.testiPlayLabel} — ${videoName}, ${t.heroTitle}`}
              >
                <div className="testimonial-video__caption">
                  <p>{videoName}</p>
                  <p>{t.heroTitle}</p>
                </div>
                <div className="testimonial-video__play" aria-hidden="true">
                  <Play size={18} color="#fff" fill="#fff" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
