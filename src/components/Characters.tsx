import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

type Props = { t: Translations['en']['characters'] }

export function Characters({ t }: Props) {
  const ref = useReveal()
  return (
    <section className="characters" id="characters">
      <div className="container" ref={ref}>
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-heading">{t.heading}</h2>
        <p className="section-sub" style={{ marginBottom: 0 }}>{t.sub}</p>
        <div className="characters-grid" style={{ marginTop: 32 }}>
          {t.chars.map((char, i) => (
            <div key={i} className="char-card">
              <div className="char-avatar">{char.avatar}</div>
              <div>
                <div className="char-name">{char.name}</div>
                <span className={`char-tag ${char.tagClass}`}>{char.tagText}</span>
                <div className="char-desc">{char.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="voicevox-card">
          <div className="voicevox-icon">🎙️</div>
          <div>
            <div className="voicevox-title">{t.voicevox.title}</div>
            <div className="voicevox-desc">{t.voicevox.desc}</div>
            <div className="nemo-note">
              {t.nemo}<strong>{t.nemoLink}</strong>{t.nemoEnd}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
