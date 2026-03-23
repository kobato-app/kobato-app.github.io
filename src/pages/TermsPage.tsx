import { Link } from 'react-router-dom'
import { type Translations } from '../i18n'

type Props = { t: Translations['en']['termsPage'] }

export function TermsPage({ t }: Props) {
  return (
    <main className="privacy-page">
      <div className="privacy-page-inner">
        <Link to="/" className="privacy-back-link">{t.backToHome}</Link>

        <div className="privacy-page-header">
          <div className="section-tag">📄 Legal</div>
          <h1 className="privacy-page-title">{t.title}</h1>
          <p className="privacy-page-updated">{t.lastUpdated}</p>
        </div>

        <div className="privacy-page-body">
          {t.sections.map((section, i) => (
            <section key={i} className="privacy-page-section">
              <h2 className="privacy-page-section-title">
                <span className="privacy-section-num">{String(i + 1).padStart(2, '0')}</span>
                {section.heading}
              </h2>
              <p className="privacy-page-section-body">{section.body}</p>
              {'list' in section && section.list && (
                <ul className="privacy-page-list">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
