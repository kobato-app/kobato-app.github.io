import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { type Lang, type Theme, type Translations } from '../i18n'

type Props = {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  setTheme: (t: Theme) => void
  t: Translations['en']
}

export function Layout({ lang, setLang, theme, setTheme, t }: Props) {
  return (
    <>
      <Nav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t.nav} />
      <Outlet />
      <Footer t={t.footer} />
    </>
  )
}
