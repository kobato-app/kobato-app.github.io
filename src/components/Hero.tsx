import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

function PhoneKana() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-topbar">
          <span className="phone-topbar-title">Kobato</span>
          <div className="phone-progress-wrap">
            <div className="phone-progress" />
          </div>
          <span style={{ fontSize: 10, color: 'var(--text-body)', fontWeight: 700 }}>4/10</span>
        </div>
        <div className="phone-card-big">
          <div className="phone-char">か</div>
          <div className="phone-char-badge">ひらがな</div>
          <div className="phone-label">발음은? / What sound?</div>
        </div>
        <div className="phone-choices">
          <div className="phone-choice correct">ka ✓</div>
          <div className="phone-choice">ki</div>
          <div className="phone-choice wrong">sa ✗</div>
          <div className="phone-choice">ko</div>
        </div>
      </div>
    </div>
  )
}

type Props = { t: Translations['en']['hero'] }

export function Hero({ t }: Props) {
  const ref = useReveal()
  return (
    <section className="hero dot-bg">
      <div className="container">
        <div className="hero-inner" ref={ref}>
          <div>
            <div className="hero-badge">{t.badge}</div>
            <h1 className="hero-title">{t.title}</h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="hero-buttons">
              <a href="#" className="btn-primary">{t.appStore}</a>
              <a href="#" className="btn-secondary">{t.googlePlay}</a>
            </div>
          </div>
          <div className="phone-wrap">
            <span className="phone-deco tl">🌸</span>
            <span className="phone-deco tr">⭐</span>
            <span className="phone-deco bl">✨</span>
            <PhoneKana />
          </div>
        </div>
      </div>
    </section>
  )
}
