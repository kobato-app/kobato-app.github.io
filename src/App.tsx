import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { T, type Lang, type Theme } from './i18n'
import { Layout } from './components/Layout'
import { LandingPage } from './pages/LandingPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
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
    <Routes>
      <Route element={<Layout lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />}>
        <Route path="/" element={<LandingPage t={t} />} />
      </Route>
      <Route path="/privacy" element={<PrivacyPage lang={lang} />} />
      <Route path="/terms" element={<TermsPage lang={lang} />} />
    </Routes>
  )
}
