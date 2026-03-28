import { projects } from '../data'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { GitBranch, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const { t, lang } = useLang()
  const loc = (val) => {
    if (!val) return ''
    if (typeof val === 'string') return val
    return val[lang] ?? val.en ?? val.es ?? ''
  }
  return (
    <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>
          {t('projects.title')} <span className="accent-text">{t('projects.titleAccent')}</span>
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 560 }}>
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`bento-card flex flex-col ${i === 0 ? 'md:col-span-2' : ''}`}
            style={{ overflow: 'hidden' }}
          >
            {/* Project Image */}
            {p.image && (
              <div style={{ position: 'relative', height: i === 0 ? 260 : 180, overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={p.image}
                  alt={loc(p.title)}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    display: 'block'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                  pointerEvents: 'none'
                }} />
                {/* Project number badge */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                  color: 'var(--accent)', background: 'rgba(0,0,0,0.6)',
                  border: '1px solid var(--accent-bdr)', backdropFilter: 'blur(8px)',
                  padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 600
                }}>{p.num}</div>
                {/* Featured badge */}
                {p.featured && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#fff', background: 'var(--accent)',
                    padding: '0.2rem 0.65rem', borderRadius: '100px'
                  }}>⭐ Featured</div>
                )}
                {/* Year bottom-right of image */}
                <div style={{
                  position: 'absolute', bottom: '0.75rem', right: '1rem',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.6)'
                }}>{p.year}</div>
              </div>
            )}

            {/* Card Body */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                {loc(p.title)}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.65, flex: 1 }}>{loc(p.desc)}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {p.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontSize: '0.68rem', fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'var(--accent)',
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-bdr)',
                    padding: '0.25rem 0.65rem', borderRadius: '100px',
                  }}>
                    {loc(tag)}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                {p.href && p.href !== '#contact' && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                  >
                    <GitBranch size={15} /> {t('projects.github')}
                  </a>
                )}
                {p.href === '#contact' && (
                  <a
                    href={p.href}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)',
                      transition: 'color 0.2s'
                    }}
                  >
                    <ArrowUpRight size={15} /> {t('projects.collab')}
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.8rem', fontWeight: 600, color: 'var(--text2)',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}
                  >
                    <ExternalLink size={15} /> {t('projects.demo')}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
