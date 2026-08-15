import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

export function useContent() {
  const { lang } = useLanguage()
  return content[lang]
}
