export type Lang = 'en' | 'ko'
export type Theme = 'light' | 'dark'

export const T = {
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
          desc: null as string | null,
          items: ['No personal data collected', 'No app activity tracked'] as string[],
          quote: null as string | null,
        },
        {
          icon: '☁️',
          title: 'Your Data, Your Drive',
          desc: null as string | null,
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
          desc: null as string | null,
          items: ['개인 정보 수집 없음', '앱 활동 수집 없음'] as string[],
          quote: null as string | null,
        },
        {
          icon: '☁️',
          title: '내 데이터는 내 드라이브에',
          desc: null as string | null,
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

export type Translations = typeof T
