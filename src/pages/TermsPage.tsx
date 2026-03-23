import { Link } from 'react-router-dom'
import { type Lang } from '../i18n'

type Section = {
  heading: string
  body: string
  list?: string[]
}

const content: Record<Lang, { title: string; effective: string; back: string; sections: Section[] }> = {
  en: {
    title: 'Terms of Service',
    effective: 'Effective Date: March 23, 2026',
    back: '← Back to Home',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By downloading, installing, or using the Kobato application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.',
      },
      {
        heading: '2. Description of Service',
        body: 'Kobato is a free Japanese language learning application for iOS and Android. The App provides kana, vocabulary, and kanji study modes with on-device text-to-speech powered by Voicevox. All features are provided free of charge with no advertisements or in-app purchases.',
      },
      {
        heading: '3. License Grant',
        body: 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial language learning purposes.',
      },
      {
        heading: '4. Restrictions',
        body: 'You agree not to:',
        list: [
          'Copy, modify, distribute, sell, or lease any part of the App or its content',
          'Reverse engineer, decompile, or disassemble the App, except to the extent permitted by applicable law',
          'Use the App for any unlawful purpose or in violation of any applicable regulation',
          'Attempt to gain unauthorized access to any systems or networks associated with the App',
          'Use the App in any manner that could interfere with, disrupt, or impose an undue burden on our infrastructure',
        ],
      },
      {
        heading: '5. Intellectual Property',
        body: 'The Kobato application, including its design, code, and original content, is owned by Team Kobato and protected by applicable intellectual property laws. All rights not expressly granted in these Terms are reserved.',
      },
      {
        heading: '6. Third-Party Content and Licenses',
        body: 'The App incorporates the following third-party components, each subject to their respective licenses:',
        list: [
          'Voicevox — An open-source text-to-speech engine. Character voices (Zundamon, Shikoku Metan, Nemo) are used in accordance with Voicevox\'s character usage terms.',
          'JMDict — A community-maintained Japanese–English dictionary provided under the JMDict/EDICT license.',
        ],
      },
      {
        heading: '7. Disclaimer of Warranties',
        body: 'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY OF CONTENT, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
      },
      {
        heading: '8. Limitation of Liability',
        body: 'TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TEAM KOBATO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
      {
        heading: '9. Modifications to the App and Terms',
        body: 'We reserve the right to modify, suspend, or discontinue the App at any time without notice. We may also update these Terms from time to time. When we do, we will revise the Effective Date above. Your continued use of the App after any changes constitutes your acceptance of the revised Terms.',
      },
      {
        heading: '10. Governing Law',
        body: 'These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.',
      },
      {
        heading: '11. Contact',
        body: 'If you have questions about these Terms, please contact us through our GitHub repository or Discord server.',
      },
    ],
  },
  ko: {
    title: '이용약관',
    effective: '시행일: 2026년 3월 23일',
    back: '← 홈으로 돌아가기',
    sections: [
      {
        heading: '제1조 (약관의 동의)',
        body: 'Kobato 애플리케이션(이하 "앱")을 다운로드, 설치 또는 사용함으로써 본 이용약관(이하 "약관")에 동의하게 됩니다. 본 약관에 동의하지 않으시면 앱을 사용하지 마십시오.',
      },
      {
        heading: '제2조 (서비스의 내용)',
        body: 'Kobato는 iOS 및 Android용 무료 일본어 학습 애플리케이션입니다. 앱은 Voicevox를 기반으로 한 기기 내 TTS와 함께 가나, 어휘, 한자 학습 모드를 제공합니다. 모든 기능은 광고 및 인앱 결제 없이 무료로 제공됩니다.',
      },
      {
        heading: '제3조 (이용 허가)',
        body: '본 약관을 준수하는 조건으로, 당사는 개인적이고 비상업적인 언어 학습 목적으로 앱을 사용할 수 있는 제한적, 비독점적, 양도 불가능하고 취소 가능한 라이선스를 부여합니다.',
      },
      {
        heading: '제4조 (금지 행위)',
        body: '이용자는 다음 행위를 하여서는 안 됩니다:',
        list: [
          '앱 또는 그 콘텐츠의 복사, 수정, 배포, 판매 또는 대여',
          '관련 법령이 허용하는 범위를 초과하는 리버스 엔지니어링, 디컴파일 또는 역어셈블',
          '불법적인 목적 또는 관련 법규에 위반하는 방식으로의 앱 사용',
          '앱과 관련된 시스템 또는 네트워크에 대한 무단 접근 시도',
          '당사의 인프라에 과도한 부담을 주거나 서비스를 방해하는 방식으로의 앱 사용',
        ],
      },
      {
        heading: '제5조 (지적재산권)',
        body: 'Kobato 애플리케이션의 디자인, 코드 및 원본 콘텐츠를 포함한 앱은 Team Kobato에 귀속되며 관련 지적재산권법의 보호를 받습니다. 본 약관에서 명시적으로 부여되지 않은 모든 권리는 유보됩니다.',
      },
      {
        heading: '제6조 (제3자 콘텐츠 및 라이선스)',
        body: '앱은 각각의 라이선스를 따르는 다음 제3자 구성 요소를 포함합니다:',
        list: [
          'Voicevox — 오픈소스 TTS 엔진. 캐릭터 음성(즌다몬, 시코쿠 메탄, Nemo)은 Voicevox의 캐릭터 이용 약관에 따라 사용됩니다.',
          'JMDict — JMDict/EDICT 라이선스 하에 제공되는 커뮤니티 관리 일·영 사전.',
        ],
      },
      {
        heading: '제7조 (무보증)',
        body: '앱은 상품성, 특정 목적 적합성, 콘텐츠 정확성 또는 비침해에 관한 보증을 포함하여 명시적 또는 묵시적인 어떠한 종류의 보증 없이 "있는 그대로" 및 "제공 가능한 상태로" 제공됩니다. 당사는 앱이 중단 없이, 오류 없이, 또는 바이러스나 기타 유해한 요소 없이 제공될 것을 보증하지 않습니다.',
      },
      {
        heading: '제8조 (책임의 제한)',
        body: '관련 법령이 허용하는 최대 범위 내에서, Team Kobato는 앱의 사용 또는 사용 불가로 인해 발생하는 데이터 손실, 이익 손실, 업무 중단을 포함하되 이에 한정되지 않는 간접적, 우발적, 특수한, 결과적 또는 징벌적 손해에 대해, 그러한 손해의 가능성을 사전에 고지받은 경우에도, 책임을 지지 않습니다.',
      },
      {
        heading: '제9조 (앱 및 약관의 변경)',
        body: '당사는 사전 통지 없이 언제든지 앱을 수정, 중단 또는 종료할 권리를 보유합니다. 약관도 수시로 변경될 수 있으며, 변경 시 위의 시행일을 수정합니다. 변경 후에도 앱을 계속 사용하면 개정된 약관에 동의한 것으로 간주합니다.',
      },
      {
        heading: '제10조 (준거법)',
        body: '본 약관은 저촉법 원칙에 관계없이 관련 법령에 따라 해석 및 적용됩니다.',
      },
      {
        heading: '제11조 (문의)',
        body: '본 약관에 관한 질문이 있으시면 GitHub 저장소 또는 Discord 서버를 통해 문의해 주세요.',
      },
    ],
  },
}

const styles = {
  page: {
    maxWidth: 680,
    margin: '0 auto',
    padding: '48px 24px 80px',
    fontFamily: 'Georgia, "Times New Roman", serif',
    color: '#111',
    lineHeight: 1.8,
    fontSize: 15,
  } as React.CSSProperties,
  back: {
    display: 'inline-block',
    marginBottom: 40,
    fontSize: 13,
    color: '#555',
    textDecoration: 'none',
  } as React.CSSProperties,
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 6,
    fontFamily: 'Georgia, serif',
    color: '#111',
  } as React.CSSProperties,
  effective: {
    fontSize: 13,
    color: '#888',
    marginBottom: 40,
    paddingBottom: 24,
    borderBottom: '1px solid #ddd',
  } as React.CSSProperties,
  section: {
    marginBottom: 32,
  } as React.CSSProperties,
  heading: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 8,
    color: '#111',
    fontFamily: 'Georgia, serif',
  } as React.CSSProperties,
  body: {
    fontSize: 14,
    color: '#333',
    margin: 0,
    lineHeight: 1.85,
  } as React.CSSProperties,
  list: {
    marginTop: 10,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
  } as React.CSSProperties,
  listItem: {
    fontSize: 14,
    color: '#333',
    lineHeight: 1.75,
  } as React.CSSProperties,
}

type Props = { lang: Lang }

export function TermsPage({ lang }: Props) {
  const c = content[lang]
  return (
    <div style={styles.page}>
      <Link to="/" style={styles.back}>{c.back}</Link>
      <h1 style={styles.title}>{c.title}</h1>
      <p style={styles.effective}>{c.effective}</p>
      {c.sections.map((s, i) => (
        <div key={i} style={styles.section}>
          <h2 style={styles.heading}>{s.heading}</h2>
          <p style={styles.body}>{s.body}</p>
          {s.list && (
            <ul style={styles.list}>
              {s.list.map((item, j) => (
                <li key={j} style={styles.listItem}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
