import { type Lang, type Theme, type Translations } from '../i18n'

type Props = {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  setTheme: (t: Theme) => void
  t: Translations['en']['nav']
}

export function Nav({ lang, setLang, theme, setTheme, t }: Props) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">🫛</span>
          Kobato
        </a>
        <div className="nav-links">
          {(['features', 'characters', 'dictionary', 'privacy'] as const).map((id) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => scrollTo(id)}
              style={{ cursor: 'pointer', border: 'none', background: 'none' }}
            >
              {t[id]}
            </button>
          ))}
        </div>
        <div className="nav-controls">
          <div className="lang-btn">
            <button
              className={`lang-option${lang === 'ko' ? ' active' : ''}`}
              onClick={() => setLang('ko')}
            >KO</button>
            <button
              className={`lang-option${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
          <button
            className="nav-icon-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}
