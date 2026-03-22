import { useState, useEffect } from 'react'
import { T, type Lang, type Theme } from './i18n'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Characters } from './components/Characters'
import { Dictionary } from './components/Dictionary'
import { PrivacySection } from './components/PrivacySection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  const [lang, setLang] = useState<Lang>('ko')
  const [theme, setTheme] = useState<Theme>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  const t = T[lang]

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <>
      <Nav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t.nav} />
      <Hero t={t.hero} />
      <Features t={t.features} />
      <Characters t={t.characters} />
      <Dictionary t={t.dictionary} />
      <PrivacySection t={t.privacy} />
      <FAQ t={t.faq} />
      <Footer t={t.footer} />
    </>
  )
}
