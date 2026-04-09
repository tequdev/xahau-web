import en from './en.json'
import es from './es.json'
import ja from './ja.json'

type TranslationKeys = typeof en
type Locale = 'en' | 'es' | 'ja'

const translations: Record<Locale, TranslationKeys> = { en, es, ja }

export type { Locale, TranslationKeys }
export function t(locale: Locale): TranslationKeys {
  return translations[locale] ?? translations.en
}
