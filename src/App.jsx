import { ThemeProvider } from './context/ThemeContext'
import Nav        from './components/Nav'
import HeroHeader from './components/HeroHeader'
import Hero       from './components/Hero'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 100,
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <HeroHeader />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
