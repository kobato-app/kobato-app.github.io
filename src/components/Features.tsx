import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

function PhoneKana() {
  return (
    <div className="feature-phone">
      <div className="feature-phone-notch" />
      <div className="feature-phone-screen">
        <div className="feat-topbar">
          <span className="feat-topbar-title">Kobato</span>
          <div className="feat-prog-wrap">
            <div className="feat-prog" style={{ width: '45%' }} />
          </div>
          <span style={{ fontSize: 9, color: 'var(--text-body)', fontWeight: 700 }}>4/10</span>
        </div>
        <div className="phone-card-big" style={{ borderRadius: 12, border: '2px solid var(--border)', padding: '16px 12px', textAlign: 'center', background: 'var(--surface)' }}>
          <div style={{ fontSize: 44, fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, lineHeight: 1, color: 'var(--text)' }}>か</div>
          <div style={{ fontSize: 10, color: 'var(--text-body)', marginTop: 6, fontWeight: 600 }}>ひらがな</div>
        </div>
        <div className="kanji-choices">
          <div className="kanji-choice k-sel">ka ✓</div>
          <div className="kanji-choice">ki</div>
          <div className="kanji-choice" style={{ background: '#FFE8E8', borderColor: '#F08080', color: '#C03030' }}>sa ✗</div>
          <div className="kanji-choice">ko</div>
        </div>
      </div>
    </div>
  )
}

function PhoneVocab() {
  return (
    <div className="feature-phone">
      <div className="feature-phone-notch" />
      <div className="feature-phone-screen">
        <div className="feat-topbar">
          <span className="feat-topbar-title">Kobato</span>
          <div className="feat-prog-wrap">
            <div className="feat-prog" style={{ width: '60%' }} />
          </div>
          <span style={{ fontSize: 9, color: 'var(--text-body)', fontWeight: 700 }}>6/10</span>
        </div>
        <div className="vocab-sentence">
          <span style={{ fontWeight: 700, color: 'var(--text)', fontSize: 10 }}>I eat breakfast every morning.</span>
          <br />
          <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 11 }}>
            毎朝<span className="vocab-blank-line" />を食べます。
          </span>
        </div>
        <div className="vocab-options">
          {[
            { text: '朝ごはん', sel: true },
            { text: '昼ごはん', sel: false },
            { text: '夜ごはん', sel: false },
          ].map((o, i) => (
            <div key={i} className={`vocab-option${o.sel ? ' sel' : ''}`}>
              <div className="vocab-bullet">{o.sel ? '✓' : ''}</div>
              {o.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PhoneKanji() {
  return (
    <div className="feature-phone">
      <div className="feature-phone-notch" />
      <div className="feature-phone-screen">
        <div className="feat-topbar">
          <span className="feat-topbar-title">Kobato</span>
          <div className="feat-prog-wrap">
            <div className="feat-prog" style={{ width: '30%' }} />
          </div>
          <span style={{ fontSize: 9, color: 'var(--text-body)', fontWeight: 700 }}>3/10</span>
        </div>
        <div className="kanji-display">
          <div className="kanji-char">木</div>
          <div className="kanji-meaning">tree / wood</div>
        </div>
        <div className="kanji-choices">
          <div className="kanji-choice">みず</div>
          <div className="kanji-choice k-sel">き ✓</div>
          <div className="kanji-choice">ひ</div>
          <div className="kanji-choice">つち</div>
        </div>
      </div>
    </div>
  )
}

const PHONES = [PhoneKana, PhoneVocab, PhoneKanji]

function FeatureItem({
  item, index,
}: {
  item: { badge: string; title: string; desc: string }
  index: number
}) {
  const ref = useReveal()
  const Phone = PHONES[index]
  return (
    <div className={`feature-item${index % 2 === 1 ? ' reverse' : ''}`} ref={ref}>
      <div>
        <div className="feature-badge">{item.badge}</div>
        <h3 className="feature-title">{item.title}</h3>
        <p className="feature-desc">{item.desc}</p>
      </div>
      <div className="feature-phone-wrap">
        <Phone />
      </div>
    </div>
  )
}

type Props = { t: Translations['en']['features'] }

export function Features({ t }: Props) {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-heading">{t.heading}</h2>
        <div className="features-list">
          {t.items.map((item, i) => (
            <FeatureItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
