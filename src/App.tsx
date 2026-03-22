import { useState, useEffect, useRef } from 'react'
import './App.css'

type Lang = 'en' | 'ko'
type Theme = 'light' | 'dark'

/* ─── i18n ─── */
const T = {
  en: {
    nav: {
      features: 'Learning',
      characters: 'Characters',
      dictionary: 'Dictionary',
      privacy: 'Offline & Privacy',
      cta: 'Get Started',
    },
    hero: {
      badge: '🎉 Free Forever',
      title: 'Learn Japanese\nwith Zundamon',
      sub: 'Enjoy Japanese learning for free — no ads, no in-app purchases, ever.',
      appStore: '🍎 App Store',
      googlePlay: '▶ Google Play',
    },
    values: {
      tag: '✨ Why Kobato?',
      heading: "Everything you need,\nnothing you don't",
      items: [
        { icon: '🆓', title: 'Completely Free', desc: 'No ads. No in-app purchases. Forever.' },
        { icon: '🔇', title: 'Privacy First', desc: 'No data collection. No activity tracking.' },
        { icon: '📴', title: 'Works Offline', desc: 'Study anywhere, even without internet.' },
        { icon: '🔊', title: 'Vivid Voice', desc: 'Real-time TTS for native-like pronunciation.' },
      ],
    },
    features: {
      tag: '📚 Learning Features',
      heading: 'Three ways to learn',
      items: [
        {
          badge: '⭐ For Beginners',
          title: 'Kana Learning',
          desc: 'See a hiragana or katakana character and choose the correct romanization. The perfect starting point for your Japanese journey.',
        },
        {
          badge: '📝 Vocabulary',
          title: 'Vocabulary Practice',
          desc: 'Read a translated sentence and fill in the blank with the correct Japanese word. Learn vocabulary in context for real-world use.',
        },
        {
          badge: '🈶 Kanji',
          title: 'Kanji Reading',
          desc: 'Look at a kanji and select its correct pronunciation. Master the unique readings of Japanese characters systematically.',
        },
      ],
    },
    characters: {
      tag: '🫛 Characters',
      heading: 'Your learning companions',
      sub: 'Zundamon and Shikoku Metan guide you through every lesson, reading sentences aloud as you study.',
      chars: [
        {
          avatar: '🫛',
          name: 'Zundamon',
          tagText: 'Main Voice',
          tagClass: 'green',
          desc: 'The cheerful edamame-fairy who loves helping you practice! Reads every example sentence with an energetic, friendly voice.',
        },
        {
          avatar: '🔮',
          name: 'Shikoku Metan',
          tagText: 'Alt Voice',
          tagClass: 'purple',
          desc: 'A composed and eloquent character who reads with a calm, clear voice — great for detailed listening practice.',
        },
      ],
      voicevox: {
        title: 'Powered by Voicevox',
        desc: 'Real-time TTS technology brings natural Japanese pronunciation to every sentence you practice.',
      },
      nemo: 'Prefer a quieter study session? Switch to the gentle, neutral voice of ',
      nemoLink: 'Voicevox Nemo',
      nemoEnd: ' anytime from settings.',
    },
    dictionary: {
      tag: '📖 Dictionary',
      heading: 'Built-in dictionary,\nalways one tap away',
      sub: 'Tap any word while studying to instantly look it up — no switching apps.',
      items: [
        { icon: '📘', title: 'JMDict Based', desc: 'Trusted, community-maintained Japanese dictionary with comprehensive coverage.' },
        { icon: '🌐', title: 'English & Korean', desc: 'Translations in English and Korean (partial). More Korean coverage coming soon.' },
        { icon: '⚡', title: 'Instant Lookup', desc: 'One tap from any lesson. Fast, accurate, always available.' },
      ],
    },
    privacy: {
      tag: '🔒 Offline & Privacy',
      heading: 'Your data stays yours',
      cards: [
        {
          icon: '📴',
          title: 'Study Anywhere',
          desc: 'All learning features work completely offline. Everything runs client-side — no server calls needed.',
          items: null as string[] | null,
          quote: null as string | null,
        },
        {
          icon: '🛡️',
          title: 'Zero Data Collection',
          desc: null,
          items: ['No personal data collected', 'No app activity tracked'] as string[],
          quote: null as string | null,
        },
        {
          icon: '☁️',
          title: 'Your Data, Your Drive',
          desc: null,
          items: null as string[] | null,
          quote: 'Study records are saved only to your Google Drive. Nothing stays on Kobato servers.',
        },
      ],
    },
    faq: {
      tag: '💬 FAQ',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Is it really completely free?',
          a: "Yes. No ads, no in-app purchases, no paid plans — ever. If you enjoy Kobato, you're welcome to support development on Patreon or Buy Me a Coffee!",
        },
        {
          q: 'Which platforms are supported?',
          a: 'Kobato is available on iOS (App Store) and Android (Google Play).',
        },
        {
          q: 'Does it work without internet?',
          a: 'Yes! All learning features are fully available offline. An internet connection is only needed if you want to sync progress to Google Drive.',
        },
        {
          q: 'What data does Kobato collect?',
          a: 'Nothing. Kobato collects no personal information and tracks no in-app activity whatsoever.',
        },
      ],
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copy: '© 2026 Team Kobato. All rights reserved.',
    },
  },
  ko: {
    nav: {
      features: '학습 기능',
      characters: '캐릭터',
      dictionary: '사전',
      privacy: '오프라인/프라이버시',
      cta: '지금 시작하기',
    },
    hero: {
      badge: '🎉 영원히 무료',
      title: '즌다몬과 함께하는\n무료 일본어 학습',
      sub: '무료로 즐기는 일본어 학습 — 광고 없음, 인앱 결제 없음.',
      appStore: '🍎 App Store',
      googlePlay: '▶ Google Play',
    },
    values: {
      tag: '✨ 왜 Kobato인가요?',
      heading: '필요한 건 모두,\n불필요한 건 없이',
      items: [
        { icon: '🆓', title: '완전 무료', desc: '광고 없음. 인앱 결제 없음. 영원히.' },
        { icon: '🔇', title: '프라이버시 보호', desc: '개인 정보 수집 없음. 앱 활동 추적 없음.' },
        { icon: '📴', title: '오프라인 학습', desc: '인터넷 없이도 언제 어디서나 학습 가능.' },
        { icon: '🔊', title: '생생한 음성', desc: '실시간 TTS로 원어민 발음을 들으며 공부.' },
      ],
    },
    features: {
      tag: '📚 학습 기능',
      heading: '세 가지 학습 방식',
      items: [
        {
          badge: '⭐ 초보자 추천',
          title: '가나 학습',
          desc: '히라가나·가타카나 문자를 보고 로마자 발음을 맞추는 모드. 일본어를 처음 시작하는 분께 딱 맞습니다.',
        },
        {
          badge: '📝 어휘',
          title: '어휘 학습',
          desc: '번역된 문장을 보고 일본어 빈칸을 채우는 모드. 문맥 속에서 단어를 익혀 실전 활용도를 높입니다.',
        },
        {
          badge: '🈶 한자',
          title: '한자 학습',
          desc: '한자를 보고 올바른 발음(읽기)을 맞추는 모드. 일본어 특유의 한자 독음을 체계적으로 학습합니다.',
        },
      ],
    },
    characters: {
      tag: '🫛 캐릭터',
      heading: '함께하는 캐릭터',
      sub: '즌다몬과 시코쿠 메탄이 모든 학습을 함께합니다. 예문을 맞출 때마다 캐릭터가 직접 음성으로 읽어줍니다.',
      chars: [
        {
          avatar: '🫛',
          name: '즌다몬',
          tagText: '메인 보이스',
          tagClass: 'green',
          desc: '학습을 도와주는 활기차고 귀여운 에다마메 요정! 매 예문을 생생하고 친근한 목소리로 읽어줍니다.',
        },
        {
          avatar: '🔮',
          name: '시코쿠 메탄',
          tagText: '서브 보이스',
          tagClass: 'purple',
          desc: '차분하고 명료한 목소리를 가진 캐릭터. 꼼꼼한 발음 연습에 잘 어울립니다.',
        },
      ],
      voicevox: {
        title: 'Voicevox 기술',
        desc: '실시간 TTS 기술로 자연스러운 일본어 발음을 매 문장 생생하게 들을 수 있습니다.',
      },
      nemo: '좀 더 차분한 학습 환경을 원하신다면? 설정에서 ',
      nemoLink: 'Voicevox Nemo',
      nemoEnd: '의 편안한 목소리로 언제든지 전환할 수 있습니다.',
    },
    dictionary: {
      tag: '📖 사전',
      heading: '내장 사전,\n항상 탭 하나로',
      sub: '학습 중 모르는 단어를 탭 하나로 즉시 검색. 앱 전환 없이.',
      items: [
        { icon: '📘', title: 'JMDict 기반', desc: '신뢰할 수 있는 커뮤니티 관리 일본어 사전 데이터.' },
        { icon: '🌐', title: '영어 · 한국어 지원', desc: '영어 및 한국어(일부) 번역 제공. 한국어 지원 확대 예정.' },
        { icon: '⚡', title: '즉시 검색', desc: '학습 중 탭 한 번으로. 빠르고 정확하게, 언제든지.' },
      ],
    },
    privacy: {
      tag: '🔒 오프라인 & 프라이버시',
      heading: '내 데이터는 내 것',
      cards: [
        {
          icon: '📴',
          title: '언제 어디서나',
          desc: '인터넷이 없어도 모든 학습 기능을 그대로 사용할 수 있습니다. 모든 기능은 클라이언트 사이드에서 동작합니다.',
          items: null as string[] | null,
          quote: null as string | null,
        },
        {
          icon: '🛡️',
          title: '개인 정보 보호',
          desc: null,
          items: ['개인 정보 수집 없음', '앱 활동 수집 없음'] as string[],
          quote: null as string | null,
        },
        {
          icon: '☁️',
          title: '내 데이터는 내 드라이브에',
          desc: null,
          items: null as string[] | null,
          quote: '학습 기록은 본인의 Google 드라이브에만 저장됩니다. Kobato 서버에는 아무것도 남지 않습니다.',
        },
      ],
    },
    faq: {
      tag: '💬 자주 묻는 질문',
      heading: '자주 묻는 질문',
      items: [
        {
          q: '정말 완전 무료인가요?',
          a: '네. 광고, 인앱 결제, 유료 플랜이 없습니다. 맘에 드셨다면 Patreon 또는 Buy Me a Coffee로 후원 부탁드립니다!',
        },
        {
          q: '어떤 플랫폼을 지원하나요?',
          a: 'Kobato는 iOS(App Store)와 Android(Google Play)에서 이용 가능합니다.',
        },
        {
          q: '인터넷 없이도 사용할 수 있나요?',
          a: '네! 모든 학습 기능은 오프라인에서도 완전히 이용 가능합니다. Google 드라이브 동기화 시에만 인터넷이 필요합니다.',
        },
        {
          q: '앱이 어떤 데이터를 수집하나요?',
          a: '아무것도 수집하지 않습니다. Kobato는 개인 정보를 수집하지 않으며 앱 활동을 추적하지 않습니다.',
        },
      ],
    },
    footer: {
      privacy: '개인정보처리방침',
      terms: '이용약관',
      copy: '© 2026 Team Kobato. All rights reserved.',
    },
  },
}

/* ─── Scroll reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Phone mockup: Kana (hero) ─── */
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

/* ─── Phone mockup: Vocab ─── */
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

/* ─── Phone mockup: Kanji ─── */
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

/* ─── Nav ─── */
function Nav({
  lang, setLang, theme, setTheme, t,
}: {
  lang: Lang; setLang: (l: Lang) => void
  theme: Theme; setTheme: (t: Theme) => void
  t: (typeof T)['en']['nav']
}) {
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

/* ─── Hero ─── */
function Hero({ t }: { t: (typeof T)['en']['hero'] }) {
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

/* ─── Values ─── */
function Values({ t }: { t: (typeof T)['en']['values'] }) {
  const ref = useReveal()
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="values-header" ref={ref}>
          <div className="section-tag">{t.tag}</div>
          <h2 className="section-heading" style={{ whiteSpace: 'pre-line' }}>{t.heading}</h2>
        </div>
        <div className="values-grid">
          {t.items.map((item, i) => (
            <div key={i} className="value-card reveal">
              <span className="value-icon">{item.icon}</span>
              <div className="value-title">{item.title}</div>
              <div className="value-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Features ─── */
function FeatureItem({
  item, index, phone,
}: {
  item: { badge: string; title: string; desc: string }
  index: number
  phone: React.ReactNode
}) {
  const ref = useReveal()
  return (
    <div className={`feature-item${index % 2 === 1 ? ' reverse' : ''}`} ref={ref}>
      <div>
        <div className="feature-badge">{item.badge}</div>
        <h3 className="feature-title">{item.title}</h3>
        <p className="feature-desc">{item.desc}</p>
      </div>
      <div className="feature-phone-wrap">{phone}</div>
    </div>
  )
}

function Features({ t }: { t: (typeof T)['en']['features'] }) {
  const phones = [<PhoneKana key={0} />, <PhoneVocab key={1} />, <PhoneKanji key={2} />]
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-heading">{t.heading}</h2>
        <div className="features-list">
          {t.items.map((item, i) => (
            <FeatureItem key={i} item={item} index={i} phone={phones[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Characters ─── */
function Characters({ t }: { t: (typeof T)['en']['characters'] }) {
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

/* ─── Dictionary ─── */
function Dictionary({ t }: { t: (typeof T)['en']['dictionary'] }) {
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

/* ─── Privacy ─── */
function PrivacySection({ t }: { t: (typeof T)['en']['privacy'] }) {
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

/* ─── FAQ ─── */
function FAQ({ t }: { t: (typeof T)['en']['faq'] }) {
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

/* ─── Footer ─── */
function Footer({ t }: { t: (typeof T)['en']['footer'] }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span>🫛</span> Kobato
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">{t.privacy}</a>
            <span style={{ color: 'var(--border)', padding: '0 4px' }}>·</span>
            <a href="#" className="footer-link">{t.terms}</a>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-btn" title="GitHub" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="#" className="social-btn" title="Discord" aria-label="Discord">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a href="#" className="social-btn" title="X (Twitter)" aria-label="X">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copy">{t.copy}</div>
      </div>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  const [lang, setLang] = useState<Lang>('ko')
  const [theme, setTheme] = useState<Theme>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
    <>
      <Nav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t.nav} />
      <Hero t={t.hero} />
      <Features t={t.features} />
      <Characters t={t.characters} />
      <Dictionary t={t.dictionary} />
      <PrivacySection t={t.privacy} />
      <FAQ t={t.faq} />
      <Footer t={t.footer} />
    </>
  )
}
