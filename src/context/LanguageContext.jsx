import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('ag-lang') || 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('ag-lang', lang) } catch {}
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang(l => (l === 'es' ? 'en' : 'es')) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
