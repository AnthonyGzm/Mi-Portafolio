import { projects } from '../data'
import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Box } from 'lucide-react'

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
            className="bento-card" 
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
          >
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
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
                  #{tag}
                </span>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)' }}>
                  <GitBranch size={16} /> Code
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text2)' }}>
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
