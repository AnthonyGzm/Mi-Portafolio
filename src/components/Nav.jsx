import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'
import { personal } from '../data'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_IDS = [
  { id: 'hero', tkey: 'nav.home' },
  { id: 'skills', tkey: 'nav.skills' },
  { id: 'projects', tkey: 'nav.projects' },
  { id: 'contact', tkey: 'nav.contact' },
]

export default function Nav() {
  const active = useActiveSection()
  const { dark, toggle } = useTheme()
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '70px', display: 'flex', alignItems: 'center',
        padding: '0 clamp(1.5rem, 5vw, 3rem)',
        background: scrolled ? (dark ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)') : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)' }}>
            <img src="/logo.png" alt={personal.initials} style={{ height: 36, width: 'auto', objectFit: 'contain', display: 'block' }} />
          </a>

          <div className="hide-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {NAV_IDS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  fontSize: '0.85rem', fontWeight: 600,
                  color: active === link.id ? 'var(--text)' : 'var(--text3)',
                  transition: 'color 0.2s',
                  position: 'relative'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => {
                  if (active !== link.id) e.currentTarget.style.color = 'var(--text3)'
                }}
              >
                {t(link.tkey)}
                {active === link.id && (
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--accent)', borderRadius: '2px' }} />
                )}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              title="Switch Language"
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                color: 'var(--text2)', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                padding: '0 0.65rem', height: 36, borderRadius: '8px',
                fontSize: '0.72rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
                gap: '0.3rem', transition: 'all 0.2s', letterSpacing: '0.04em'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <span style={{ opacity: lang === 'en' ? 1 : 0.45 }}>EN</span>
              <span style={{ color: 'var(--text3)' }}>/</span>
              <span style={{ opacity: lang === 'es' ? 1 : 0.45 }}>ES</span>
            </button>

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggle}
              title=""
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                color: 'var(--text2)', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="hide-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Mobile Lang Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                color: 'var(--text2)', cursor: 'pointer', display: 'flex',
                alignItems: 'center', padding: '0 0.5rem', height: 32, borderRadius: '7px',
                fontSize: '0.68rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
                gap: '0.2rem', transition: 'all 0.2s'
              }}
            >
              <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
              <span style={{ color: 'var(--text3)' }}>/</span>
              <span style={{ opacity: lang === 'es' ? 1 : 0.4 }}>ES</span>
            </button>
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggle}
              style={{ background: 'transparent', border: 'none', color: 'var(--text)', display: 'flex' }}
            >
              {dark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={() => setMobileOpen(true)} style={{ background: 'transparent', border: 'none', color: 'var(--text)' }}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100, background: 'var(--bg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'
        }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text)' }}>
            <X size={32} />
          </button>
          {NAV_IDS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '2rem', fontWeight: 800, color: active === link.id ? 'var(--accent)' : 'var(--text)' }}
            >
              {t(link.tkey)}
            </a>
          ))}

          {/* Mobile menu lang toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            style={{
              marginTop: '1rem',
              background: 'var(--bg2)', border: '1px solid var(--border)',
              color: 'var(--text2)', cursor: 'pointer', display: 'flex',
              alignItems: 'center', padding: '0.5rem 1.5rem', borderRadius: '10px',
              fontSize: '1rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
              gap: '0.5rem'
            }}
          >
            <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
            <span style={{ color: 'var(--text3)' }}>/</span>
            <span style={{ opacity: lang === 'es' ? 1 : 0.4 }}>ES</span>
          </button>
        </div>
      )}
    </>
  )
}
