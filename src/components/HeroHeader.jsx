import { motion } from 'framer-motion'
import { personal, socials } from '../data'
import { GitBranch, Briefcase, FileText, Mail, ArrowDown } from 'lucide-react'

const SOCIAL_ICONS = { GitHub: <GitBranch size={18} />, LinkedIn: <Briefcase size={18} />, CV: <FileText size={18} />, Email: <Mail size={18} /> }

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
          opacity: 0.6 /* Subimos la opacidad para que se vea claramente */
        }}
      >
        {/* 
          Para usar tu propio video:
          1. Pon el archivo de video (ej. 'fondo.mp4') dentro de la carpeta 'public' de tu proyecto.
          2. Cambia el src='...' de abajo por src='/fondo.mp4'
        */}
        <source src="/programmer.mp4" type="video/mp4" />
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

        <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 600, color: 'var(--text2)', marginBottom: '1rem' }}>
          Desarrollador Full Stack <span style={{ color: 'var(--text3)' }}>&</span> Entusiasta Tech
        </h2>

        <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text3)', marginBottom: '2rem' }}>
          React <span className="accent-text">•</span> Node.js <span className="accent-text">•</span> Arquitectura Cloud
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
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" style={{
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
        href="#hero"
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
