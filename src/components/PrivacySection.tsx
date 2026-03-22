import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

type Props = { t: Translations['en']['privacy'] }

export function PrivacySection({ t }: Props) {
  const ref = useReveal()
  return (
    <section className="privacy-section" id="privacy">
      <div className="container" ref={ref}>
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-heading">{t.heading}</h2>
        <div className="privacy-grid">
          {t.cards.map((card, i) => (
            <div key={i} className="privacy-card">
              <div className="privacy-card-icon">{card.icon}</div>
              <div className="privacy-card-title">{card.title}</div>
              {card.desc && <div className="privacy-card-desc">{card.desc}</div>}
              {card.items && (
                <ul className="privacy-list">
                  {card.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {card.quote && <div className="sync-quote">"{card.quote}"</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
