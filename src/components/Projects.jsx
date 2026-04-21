import { projects } from '../data'
import { motion } from 'framer-motion'
import { ExternalLink, Box } from 'lucide-react'

const GithubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Box size={28} className="accent-text" /> 
          Proyectos Destacados
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 600 }}>
          Explora los sistemas integrales y mini-apps que he construido utilizando mi stack tecnológico.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <motion.div 
            key={p.num} 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bento-card project-card" 
            style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
          >
            {p.image && (
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--border)', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--accent)', opacity: 0.05, zIndex: 1, pointerEvents: 'none' }} />
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="project-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                />
              </div>
            )}
            
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text3)', background: 'var(--bg)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                  {p.year}
                </span>
              {p.featured && (
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>OLED</span>
              )}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>{p.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--text2)', 
                  background: 'var(--bg2)', 
                  padding: '0.35rem 0.85rem', 
                  borderRadius: '100px',
                  border: '1px solid var(--border)',
                  fontWeight: 500,
                  transition: 'border-color 0.2s, color 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                  {tag}
                </span>
              ))}
            </div>
            
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: 'auto', display: 'flex', gap: '1.5rem' }}>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>
                    <GithubIcon size={18} /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text2)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}>
                    <ExternalLink size={18} /> Live
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
