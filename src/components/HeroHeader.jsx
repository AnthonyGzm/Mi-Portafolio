import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personal, socials } from '../data'
import { Download, Mail, ArrowDown } from 'lucide-react'

const GithubIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const SOCIAL_ICONS = { GitHub: <GithubIcon size={18} />, LinkedIn: <LinkedinIcon size={18} />, CV: <Download size={18} />, Email: <Mail size={18} /> }

const Typewriter = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('')
  
  useEffect(() => {
    let timeout
    let i = 0
    let interval
    let pauseTimeout

    const startTyping = () => {
      i = 0
      setDisplayedText('')
      interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1))
        i++
        if (i === text.length) {
          clearInterval(interval)
          pauseTimeout = setTimeout(startTyping, 3000) // Pause for 3 seconds before repeating
        }
      }, 60)
    }

    timeout = setTimeout(startTyping, delay)
    
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
      clearTimeout(pauseTimeout)
    }
  }, [text, delay])
  
  return (
    <>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        style={{ borderRight: '2px solid var(--accent)', paddingRight: '4px', marginLeft: '2px' }}
      />
    </>
  )
}

export default function HeroHeader() {
  return (
    <section
      id="hero-header"
      className="hero-anim-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)' // Fallback color
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 'var(--video-opacity)',
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* 
        Aqui va el video de fondo
        */}
        <source src="/background-hero.mov" type="video/mp4" />
      </video>

      {/* Filtro adaptable al tema (claro/oscuro) para que el texto y el menú sean siempre legibles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, var(--hero-overlay-start) 0%, var(--hero-overlay-mid) 55%, var(--hero-overlay-end) 100%)',
        zIndex: 1
      }} />

      {/* Animated glowing orbs behind the text */}
      <div className="hero-glow hero-glow-1" style={{ zIndex: 2 }} />
      <div className="hero-glow hero-glow-2" style={{ zIndex: 2 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Hola, soy
        </span>

        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 5.5rem)',
          fontWeight: 800,
          color: 'var(--text)',
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          marginBottom: '1rem'
        }}>
          {personal.name}
        </h1>

        <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 600, color: 'var(--text2)', marginBottom: '1rem', minHeight: '3rem' }}>
          <Typewriter text="Desarrollador Junior & Entusiasta Tech" delay={800} />
        </h2>

        <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text3)', marginBottom: '2rem' }}>
          C# <span className="accent-text">•</span> .NET <span className="accent-text">•</span> SQL Server
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 650, lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Emprendedor digital y desarrollador apasionado por construir soluciones innovadoras, escalables y con un enfoque impecable en la experiencia de usuario y el rendimiento.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="#projects" style={{
            background: 'var(--text)', color: 'var(--bg)', padding: '0.8rem 1.8rem', borderRadius: '8px',
            fontSize: '0.9rem', fontWeight: 700, transition: 'transform 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Ver Proyectos
          </a>
          <a href="#contact" style={{
            background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.8rem 1.8rem', borderRadius: '8px',
            fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Mail size={16} /> Contactar
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" download={s.name === 'CV' ? 'CV_Anthony_Guzman.pdf' : undefined} style={{
              width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%', border: '1px solid var(--border)', color: 'var(--text2)',
              transition: 'all 0.2s', background: 'var(--bg2)'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {SOCIAL_ICONS[s.name]}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Down Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '3rem', width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%', border: '1px solid var(--border)', color: 'var(--text3)',
          background: 'var(--bg2)', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s'
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'var(--border)' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
