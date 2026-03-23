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
    privacyPage: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2026',
      backToHome: '← Back to Home',
      sections: [
        {
          heading: 'Overview',
          body: 'Kobato is a free Japanese learning app. We are committed to protecting your privacy. This policy explains what data we collect (spoiler: almost none) and how we handle it.',
        },
        {
          heading: 'Data We Do Not Collect',
          body: 'Kobato does not collect, store, or transmit any personal information. Specifically, we do not collect:',
          list: [
            'Your name, email address, or any account information',
            'Device identifiers or advertising IDs',
            'Location data',
            'App usage analytics or activity logs',
            'Crash reports sent to our servers',
          ],
        },
        {
          heading: 'Data Stored on Your Device',
          body: 'All study progress, settings, and preferences are stored locally on your device only. This data never leaves your device unless you explicitly choose to sync it to Google Drive.',
        },
        {
          heading: 'Google Drive Sync (Optional)',
          body: 'If you choose to enable Google Drive sync, your study records are saved directly to your personal Google Drive account. Kobato does not have access to your Google Drive data — the sync happens entirely between your device and your own Google account. We never see or store this data.',
        },
        {
          heading: 'Voice Synthesis (Voicevox)',
          body: 'Kobato uses Voicevox for text-to-speech. All voice synthesis is performed on-device. No text or audio data is sent to external servers.',
        },
        {
          heading: 'Offline Operation',
          body: 'All core learning features work fully offline. The app does not require an internet connection, and no data is transmitted during normal use.',
        },
        {
          heading: 'Third-Party Services',
          body: 'Kobato does not integrate any third-party analytics, advertising, or tracking SDKs.',
        },
        {
          heading: 'Children\'s Privacy',
          body: 'Kobato does not knowingly collect any information from anyone, including children. Since we collect no data at all, the app is safe for users of all ages.',
        },
        {
          heading: 'Changes to This Policy',
          body: 'If we make changes to this policy, we will update the "Last updated" date above. Continued use of the app after changes constitutes acceptance of the updated policy.',
        },
        {
          heading: 'Contact',
          body: 'If you have any questions about this privacy policy, please reach out to us via our GitHub repository or Discord server.',
        },
      ],
    },
    termsPage: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: March 2026',
      backToHome: '← Back to Home',
      sections: [
        {
          heading: 'Acceptance of Terms',
          body: 'By downloading or using Kobato, you agree to these Terms of Service. If you do not agree, please do not use the app.',
        },
        {
          heading: 'Description of Service',
          body: 'Kobato is a free Japanese language learning application available on iOS and Android. It provides kana, vocabulary, and kanji study modes with text-to-speech powered by Voicevox. All features are free of charge with no ads or in-app purchases.',
        },
        {
          heading: 'Use of the App',
          body: 'You may use Kobato for personal, non-commercial learning purposes. You agree not to:',
          list: [
            'Reverse engineer, decompile, or modify the app',
            'Use the app for any unlawful purpose',
            'Attempt to gain unauthorized access to any part of the app or its infrastructure',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: 'The Kobato app and its original content are owned by Team Kobato. Voicevox character voices and assets are subject to their respective licenses — please refer to the Voicevox terms for details on usage of Zundamon, Shikoku Metan, and Nemo.',
        },
        {
          heading: 'Dictionary Data',
          body: 'Kobato uses JMDict, a community-maintained Japanese–English dictionary. JMDict is provided under its own license. We are grateful to the JMDict Project and all its contributors.',
        },
        {
          heading: 'No Warranty',
          body: 'Kobato is provided "as is" without warranty of any kind. We do not guarantee that the app will be error-free, uninterrupted, or that any defects will be corrected. Use at your own risk.',
        },
        {
          heading: 'Limitation of Liability',
          body: 'To the fullest extent permitted by law, Team Kobato shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.',
        },
        {
          heading: 'Changes to Terms',
          body: 'We may update these terms from time to time. We will update the "Last updated" date when changes are made. Continued use of the app after changes constitutes acceptance of the updated terms.',
        },
        {
          heading: 'Contact',
          body: 'If you have any questions about these terms, please contact us via our GitHub repository or Discord server.',
        },
      ],
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
    privacyPage: {
      title: '개인정보처리방침',
      lastUpdated: '최종 업데이트: 2026년 3월',
      backToHome: '← 홈으로 돌아가기',
      sections: [
        {
          heading: '개요',
          body: 'Kobato는 무료 일본어 학습 앱입니다. 저희는 여러분의 개인정보 보호를 최우선으로 생각합니다. 이 방침은 저희가 수집하는 데이터(사실상 거의 없습니다)와 그 처리 방법을 안내합니다.',
        },
        {
          heading: '수집하지 않는 정보',
          body: 'Kobato는 어떠한 개인 정보도 수집, 저장, 전송하지 않습니다. 구체적으로 다음 정보를 수집하지 않습니다:',
          list: [
            '이름, 이메일 주소 등 계정 정보',
            '기기 식별자 또는 광고 ID',
            '위치 정보',
            '앱 사용 분석 또는 활동 로그',
            '서버로 전송되는 충돌 보고서',
          ],
        },
        {
          heading: '기기에 저장되는 데이터',
          body: '모든 학습 기록, 설정, 환경설정은 사용자의 기기에만 로컬로 저장됩니다. 이 데이터는 Google 드라이브 동기화를 명시적으로 선택하지 않는 한 기기 밖으로 나가지 않습니다.',
        },
        {
          heading: 'Google 드라이브 동기화 (선택 사항)',
          body: 'Google 드라이브 동기화를 활성화하면 학습 기록이 사용자의 Google 드라이브 계정에 직접 저장됩니다. Kobato는 사용자의 Google 드라이브 데이터에 접근할 수 없습니다. 동기화는 사용자의 기기와 본인의 Google 계정 사이에서만 이루어집니다.',
        },
        {
          heading: '음성 합성 (Voicevox)',
          body: 'Kobato는 텍스트 음성 변환(TTS)에 Voicevox를 사용합니다. 모든 음성 합성은 기기 내에서 처리됩니다. 텍스트나 오디오 데이터는 외부 서버로 전송되지 않습니다.',
        },
        {
          heading: '오프라인 운영',
          body: '모든 핵심 학습 기능은 완전히 오프라인에서 작동합니다. 앱은 인터넷 연결이 필요하지 않으며, 일반 사용 중 어떠한 데이터도 전송되지 않습니다.',
        },
        {
          heading: '제3자 서비스',
          body: 'Kobato는 제3자 분석, 광고 또는 추적 SDK를 통합하지 않습니다.',
        },
        {
          heading: '아동의 개인정보 보호',
          body: 'Kobato는 아동을 포함한 누구의 정보도 수집하지 않습니다. 어떠한 데이터도 수집하지 않으므로 모든 연령대의 사용자가 안심하고 사용할 수 있습니다.',
        },
        {
          heading: '방침 변경',
          body: '이 방침을 변경할 경우 위의 "최종 업데이트" 날짜를 갱신합니다. 변경 후에도 앱을 계속 사용하면 업데이트된 방침에 동의한 것으로 간주합니다.',
        },
        {
          heading: '문의',
          body: '이 개인정보처리방침에 대해 질문이 있으시면 GitHub 저장소 또는 Discord 서버를 통해 문의해 주세요.',
        },
      ],
    },
    termsPage: {
      title: '이용약관',
      lastUpdated: '최종 업데이트: 2026년 3월',
      backToHome: '← 홈으로 돌아가기',
      sections: [
        {
          heading: '약관 동의',
          body: 'Kobato를 다운로드하거나 사용함으로써 본 이용약관에 동의하게 됩니다. 동의하지 않으시면 앱을 사용하지 마십시오.',
        },
        {
          heading: '서비스 설명',
          body: 'Kobato는 iOS 및 Android에서 이용 가능한 무료 일본어 학습 앱입니다. Voicevox를 활용한 TTS와 함께 가나, 어휘, 한자 학습 모드를 제공합니다. 모든 기능은 광고 및 인앱 결제 없이 완전 무료로 제공됩니다.',
        },
        {
          heading: '앱 이용',
          body: '개인적, 비상업적 학습 목적으로만 Kobato를 이용할 수 있습니다. 다음 행위는 금지됩니다:',
          list: [
            '앱의 리버스 엔지니어링, 디컴파일 또는 수정',
            '불법적인 목적으로의 앱 이용',
            '앱 또는 인프라에 대한 무단 접근 시도',
          ],
        },
        {
          heading: '지적 재산권',
          body: 'Kobato 앱 및 원본 콘텐츠는 Team Kobato에 귀속됩니다. Voicevox 캐릭터 음성 및 에셋은 각각의 라이선스를 따릅니다. 즌다몬, 시코쿠 메탄, Nemo 사용에 관해서는 Voicevox 이용약관을 참조해 주세요.',
        },
        {
          heading: '사전 데이터',
          body: 'Kobato는 커뮤니티가 관리하는 일·영 사전인 JMDict를 사용합니다. JMDict는 자체 라이선스 하에 제공됩니다. JMDict 프로젝트와 모든 기여자분들께 감사드립니다.',
        },
        {
          heading: '무보증',
          body: 'Kobato는 어떠한 보증도 없이 "있는 그대로" 제공됩니다. 오류 없는 운영, 중단 없는 서비스 또는 결함 수정을 보장하지 않습니다. 사용에 따른 위험은 본인이 부담합니다.',
        },
        {
          heading: '책임 제한',
          body: '관련 법률이 허용하는 최대 범위 내에서, Team Kobato는 앱 사용으로 인해 발생하는 간접적, 우발적 또는 결과적 손해에 대해 책임을 지지 않습니다.',
        },
        {
          heading: '약관 변경',
          body: '본 약관은 수시로 변경될 수 있습니다. 변경 시 "최종 업데이트" 날짜를 갱신합니다. 변경 후에도 앱을 계속 사용하면 업데이트된 약관에 동의한 것으로 간주합니다.',
        },
        {
          heading: '문의',
          body: '이용약관에 관한 질문이 있으시면 GitHub 저장소 또는 Discord 서버를 통해 문의해 주세요.',
        },
      ],
    },
  },
}

export type Translations = typeof T
