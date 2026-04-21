import { experience, education } from '../data'

function TimelineEntry({ role, company, period, desc, bullets }) {
  return (
    <div style={{ position: 'relative', paddingLeft: '1.5rem', paddingBottom: '2.5rem' }}>
      {/* Timeline Line */}
      <div style={{ position: 'absolute', left: '3px', top: '24px', bottom: 0, width: '1px', background: 'var(--border)' }} />
      {/* Dot */}
      <div style={{ position: 'absolute', left: 0, top: '6px', width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text)', border: '2px solid var(--bg2)', boxSizing: 'content-box' }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{role}</h3>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text3)' }}>{period}</span>
      </div>
      
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.75rem' }}>
        {company}
      </div>
      
      <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '1rem' }}>{desc}</p>
      
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ position: 'relative', paddingLeft: '1rem', fontSize: '0.8rem', color: 'var(--text3)' }}>
            <span style={{ position: 'absolute', left: 0, top: '0.5rem', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text3)' }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ExperienceComponent() {
  return (
    <div>
      {experience.map((item, i) => (
        <TimelineEntry key={i} {...item} />
      ))}
      <div style={{ height: '1.5rem' }} />
      {education.map((item, i) => (
        <TimelineEntry key={i} {...item} />
      ))}
    </div>
  )
}
