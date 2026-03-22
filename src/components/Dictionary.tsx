import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

type Props = { t: Translations['en']['dictionary'] }

export function Dictionary({ t }: Props) {
  const ref = useReveal()
  return (
    <section className="dictionary" id="dictionary">
      <div className="container" ref={ref}>
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-heading" style={{ whiteSpace: 'pre-line' }}>{t.heading}</h2>
        <p className="section-sub" style={{ marginBottom: 32 }}>{t.sub}</p>
        <div className="dict-grid">
          {t.items.map((item, i) => (
            <div key={i} className="dict-card">
              <span className="dict-icon">{item.icon}</span>
              <div className="dict-title">{item.title}</div>
              <div className="dict-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
