import { Link } from 'react-router-dom'
import { type Lang } from '../i18n'

type Section = {
  heading: string
  body: string
  list?: string[]
}

const content: Record<Lang, { title: string; effective: string; back: string; sections: Section[] }> = {
  en: {
    title: 'Privacy Policy',
    effective: 'Effective Date: March 23, 2026',
    back: '← Back to Home',
    sections: [
      {
        heading: '1. Introduction',
        body: 'This Privacy Policy describes how Kobato ("we," "our," or "the app") handles information in connection with your use of the Kobato mobile application. By using Kobato, you agree to the practices described in this policy.',
      },
      {
        heading: '2. Information We Collect',
        body: 'Kobato does not collect, transmit, or store any personal information on our servers. We do not collect:',
        list: [
          'Name, email address, or any account credentials',
          'Device identifiers, advertising IDs, or hardware information',
          'IP addresses or network information',
          'Location data',
          'App usage analytics, session data, or behavioral tracking',
          'Crash reports or diagnostic data sent to our servers',
        ],
      },
      {
        heading: '3. Data Stored Locally on Your Device',
        body: 'All study progress, settings, and application preferences are stored exclusively on your device using local storage. This data is never transmitted to Kobato or any third party. You may delete this data at any time by uninstalling the application.',
      },
      {
        heading: '4. Optional Google Drive Synchronization',
        body: 'Kobato offers an optional feature to back up your study records to your personal Google Drive account. This synchronization occurs directly between your device and your Google account via Google\'s official APIs. Kobato does not have access to your Google Drive contents, credentials, or any data stored therein. We do not receive, store, or process any data as part of this sync.',
      },
      {
        heading: '5. Voice Synthesis (Voicevox)',
        body: 'Kobato uses Voicevox, an open-source text-to-speech engine, to synthesize voice for study content. All voice synthesis is performed entirely on-device. No text input, audio output, or related data is transmitted to external servers.',
      },
      {
        heading: '6. Dictionary Data (JMDict)',
        body: 'The built-in dictionary functionality uses JMDict, a community-maintained Japanese–English dictionary database. JMDict data is bundled within the app and all lookups are performed locally. No queries are sent to external servers.',
      },
      {
        heading: '7. Third-Party SDKs and Services',
        body: 'Kobato does not integrate any third-party analytics, advertising, crash reporting, or behavioral tracking SDKs. The application contains no trackers.',
      },
      {
        heading: '8. Children\'s Privacy',
        body: 'Kobato does not knowingly collect personal information from any user, including children under the age of 13. Because we collect no personal data whatsoever, the application is safe for users of all ages in accordance with applicable children\'s privacy laws, including COPPA.',
      },
      {
        heading: '9. Security',
        body: 'Because Kobato collects no personal data and transmits nothing to our servers, there is no personal information at risk from our side. Study data stored on your device is protected by your device\'s built-in security mechanisms.',
      },
      {
        heading: '10. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. When we do, we will revise the Effective Date at the top of this page. We encourage you to review this policy periodically. Continued use of the app after any changes constitutes your acceptance of the revised policy.',
      },
      {
        heading: '11. Contact',
        body: 'If you have questions or concerns about this Privacy Policy, please contact us through our GitHub repository or Discord server.',
      },
    ],
  },
  ko: {
    title: '개인정보처리방침',
    effective: '시행일: 2026년 3월 23일',
    back: '← 홈으로 돌아가기',
    sections: [
      {
        heading: '제1조 (목적)',
        body: '본 개인정보처리방침은 Kobato(이하 "앱" 또는 "당사")가 모바일 애플리케이션 이용과 관련하여 정보를 처리하는 방식을 설명합니다. 앱을 이용함으로써 본 방침에 기술된 사항에 동의하게 됩니다.',
      },
      {
        heading: '제2조 (수집하는 정보)',
        body: 'Kobato는 서버에 어떠한 개인정보도 수집, 전송 또는 저장하지 않습니다. 다음 정보를 수집하지 않습니다:',
        list: [
          '이름, 이메일 주소 등 계정 정보',
          '기기 식별자, 광고 ID 또는 하드웨어 정보',
          'IP 주소 또는 네트워크 정보',
          '위치 정보',
          '앱 사용 분석, 세션 데이터 또는 행동 추적 정보',
          '서버로 전송되는 충돌 보고서 또는 진단 데이터',
        ],
      },
      {
        heading: '제3조 (기기 내 로컬 저장 데이터)',
        body: '모든 학습 기록, 설정 및 앱 환경설정은 로컬 스토리지를 이용하여 사용자의 기기에만 저장됩니다. 이 데이터는 Kobato 또는 제3자에게 전송되지 않습니다. 앱 삭제 시 언제든지 이 데이터를 삭제할 수 있습니다.',
      },
      {
        heading: '제4조 (선택적 Google 드라이브 동기화)',
        body: 'Kobato는 학습 기록을 개인 Google 드라이브 계정에 백업하는 선택적 기능을 제공합니다. 이 동기화는 Google의 공식 API를 통해 사용자의 기기와 Google 계정 간에 직접 이루어집니다. Kobato는 사용자의 Google 드라이브 내용, 자격 증명 또는 저장된 데이터에 접근하지 않으며, 이 동기화 과정에서 어떠한 데이터도 수신, 저장 또는 처리하지 않습니다.',
      },
      {
        heading: '제5조 (음성 합성 — Voicevox)',
        body: 'Kobato는 학습 콘텐츠의 음성 합성을 위해 오픈소스 TTS 엔진인 Voicevox를 사용합니다. 모든 음성 합성은 기기 내에서 완전히 처리됩니다. 텍스트 입력, 오디오 출력 또는 관련 데이터는 외부 서버로 전송되지 않습니다.',
      },
      {
        heading: '제6조 (사전 데이터 — JMDict)',
        body: '내장 사전 기능은 커뮤니티가 관리하는 일·영 사전 데이터베이스인 JMDict를 사용합니다. JMDict 데이터는 앱 내에 포함되어 있으며 모든 검색은 로컬에서 수행됩니다. 외부 서버로 검색 쿼리가 전송되지 않습니다.',
      },
      {
        heading: '제7조 (제3자 SDK 및 서비스)',
        body: 'Kobato는 제3자 분석, 광고, 충돌 보고 또는 행동 추적 SDK를 통합하지 않습니다. 앱에는 트래커가 포함되어 있지 않습니다.',
      },
      {
        heading: '제8조 (아동의 개인정보 보호)',
        body: 'Kobato는 만 14세 미만 아동을 포함한 어떠한 이용자의 개인정보도 수집하지 않습니다. 개인정보를 전혀 수집하지 않으므로 아동 개인정보 보호 관련 법령에 따라 모든 연령대의 이용자가 안전하게 사용할 수 있습니다.',
      },
      {
        heading: '제9조 (보안)',
        body: 'Kobato는 개인정보를 수집하지 않고 서버로 어떠한 데이터도 전송하지 않으므로, 당사 측에서 위험에 노출될 개인정보가 없습니다. 기기에 저장된 학습 데이터는 기기의 보안 메커니즘에 의해 보호됩니다.',
      },
      {
        heading: '제10조 (방침의 변경)',
        body: '본 개인정보처리방침은 수시로 변경될 수 있습니다. 변경 시 이 페이지 상단의 시행일을 수정합니다. 주기적으로 본 방침을 검토하실 것을 권장합니다. 변경 후에도 앱을 계속 사용하면 개정된 방침에 동의한 것으로 간주합니다.',
      },
      {
        heading: '제11조 (문의)',
        body: '본 개인정보처리방침에 관한 질문이나 우려 사항이 있으시면 GitHub 저장소 또는 Discord 서버를 통해 문의해 주세요.',
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

export function PrivacyPage({ lang }: Props) {
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
