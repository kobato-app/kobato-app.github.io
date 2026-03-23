import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Characters } from '../components/Characters'
import { Dictionary } from '../components/Dictionary'
import { PrivacySection } from '../components/PrivacySection'
import { FAQ } from '../components/FAQ'
import { type Translations } from '../i18n'

type Props = { t: Translations['en'] }

export function LandingPage({ t }: Props) {
  return (
    <>
      <Hero t={t.hero} />
      <Features t={t.features} />
      <Characters t={t.characters} />
      <Dictionary t={t.dictionary} />
      <PrivacySection t={t.privacy} />
      <FAQ t={t.faq} />
    </>
  )
}
