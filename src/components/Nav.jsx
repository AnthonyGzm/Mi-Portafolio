import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data'
import { Menu, X, Hexagon, Sun, Moon } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '#hero-header', id: 'hero-header' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Proyectos', href: '#projects', id: 'projects' },
  { name: 'Contacto', href: '#contact', id: 'contact' },
]

export default function Nav() {
  const active = useActiveSection()
  const { dark, toggle } = useTheme()
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
        background: scrolled ? (dark ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)') : (dark ? 'transparent' : 'rgba(255, 255, 255, 0.6)'),
        backdropFilter: scrolled ? 'blur(12px)' : (dark ? 'none' : 'blur(8px)'),
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a href="#hero-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)' }}>
            <span style={{ letterSpacing: '-0.5px' }}>{personal.initials}</span>
          </a>

          <div className="hide-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
                {link.name}
                {active === link.id && (
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--accent)', borderRadius: '2px' }} />
                )}
              </a>
            ))}

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggle}
              title="Alternar Tema"
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

          <div className="hide-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Mobile Theme Toggle right next to menu button */}
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '2rem', fontWeight: 800, color: active === link.id ? 'var(--accent)' : 'var(--text)' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
