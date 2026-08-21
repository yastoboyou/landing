import { useState } from 'react'
import './App.css'
import { languages, type Lang } from './i18n/content'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { HowIWork } from './sections/HowIWork'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Services } from './sections/Services'
import { Process } from './sections/Process'
import { Testimonials } from './sections/Testimonials'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { FloatingCallButton } from './sections/FloatingCallButton'

/** Lets a shared link force a starting language via ?lang=de, e.g. for portfolio links —
 *  falls back to the default (ru) when the param is missing or not one of ru/ua/de. */
function getInitialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang')
  return (languages as string[]).includes(param ?? '') ? (param as Lang) : 'ru'
}

function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  return (
    <>
      {/* Header and Hero sit outside this clip: Header because position: sticky breaks in
          WebKit if any ancestor up to the root clips overflow, and Hero because its gradient
          ::before deliberately bleeds upward past its own box to show through the sticky
          header's translucent pill — clipping it here would cut that off. Hero's own horizontal
          overflow (the stickers) is clipped locally instead, see .hero__inner. */}
      <Header lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <div className="page-clip">
        <About lang={lang} />
        <HowIWork lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Testimonials lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
      <FloatingCallButton />
    </>
  )
}

export default App
