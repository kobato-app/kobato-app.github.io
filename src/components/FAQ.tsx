import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { type Translations } from '../i18n'

type Props = { t: Translations['en']['faq'] }

export function FAQ({ t }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useReveal()
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }} ref={ref}>
          <div className="section-tag">{t.tag}</div>
          <h2 className="section-heading">{t.heading}</h2>
        </div>
        <div className="faq-list">
          {t.items.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span className={`faq-icon${open === i ? ' open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer${open === i ? ' open' : ''}`}>
                <div className="faq-answer-text">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
