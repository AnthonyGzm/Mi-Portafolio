import { projects } from '../data'
import { motion } from 'framer-motion'
import { ExternalLink, Box, Construction } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import SectionHeader from './SectionHeader'

const GithubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const overlayPillStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.25rem 0.65rem',
  borderRadius: '6px',
  backdropFilter: 'blur(6px)',
}

export default function Projects() {
  const { sections, projectTitles, projectDescs, featuredLabel, inProgressLabel } = useContent()

  return (
    <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <SectionHeader
        label={sections.projects.label}
        title={sections.projects.title}
        italic={sections.projects.italic}
        subtitle={sections.projects.subtitle}
        icon={<Box size={28} />}
      />

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
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--border)', position: 'relative' }}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={projectTitles[p.title] || p.title}
                  className="project-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
                  <Construction size={40} style={{ color: 'var(--text3)', opacity: 0.4 }} />
                </div>
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)', pointerEvents: 'none' }} />

              <span style={{ ...overlayPillStyle, position: 'absolute', top: '0.85rem', left: '0.85rem', color: '#fff', background: 'rgba(0,0,0,0.4)' }}>
                {p.num}
              </span>
              <span style={{ ...overlayPillStyle, position: 'absolute', top: '0.85rem', right: '0.85rem', color: '#fff', background: 'rgba(0,0,0,0.4)' }}>
                {p.year}
              </span>

              {p.inProgress && (
                <span style={{ ...overlayPillStyle, position: 'absolute', bottom: '0.85rem', left: '0.85rem', color: '#fff', background: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {inProgressLabel}
                </span>
              )}
              {p.featured && (
                <span style={{ ...overlayPillStyle, position: 'absolute', bottom: '0.85rem', left: p.inProgress ? 'auto' : '0.85rem', right: p.inProgress ? '0.85rem' : 'auto', color: '#fff', background: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {featuredLabel}
                </span>
              )}
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>{projectTitles[p.title] || p.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{projectDescs[p.title]}</p>

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
