import { experience, education } from '../data'
import { useContent } from '../hooks/useContent'
import { Briefcase, GraduationCap } from 'lucide-react'

function TimelineEntry({ role, company, period, desc, bullets, icon: Icon, isLast }) {
  return (
    <div style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: isLast ? 0 : '2.5rem' }}>
      {!isLast && (
        <div style={{ position: 'absolute', left: '15px', top: '38px', bottom: '-0.5rem', width: '1px', background: 'var(--border)' }} />
      )}

      <div style={{
        position: 'absolute', left: 0, top: 0, width: 32, height: 32, borderRadius: '8px',
        background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={16} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{role}</h4>
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

function TimelineGroup({ label, icon: Icon, items }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
        <Icon size={18} className="accent-text" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{label}</h3>
      </div>
      {items.map((item, i) => (
        <TimelineEntry key={i} {...item} icon={Icon} isLast={i === items.length - 1} />
      ))}
    </div>
  )
}

export default function ExperienceComponent() {
  const { experience: experienceContent, education: educationContent, experienceLabels } = useContent()

  const mergedExperience = experience.map((item, i) => ({ ...item, ...experienceContent[i] }))
  const mergedEducation = education.map((item, i) => ({ ...item, ...educationContent[i] }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <TimelineGroup label={experienceLabels.experience} icon={Briefcase} items={mergedExperience} />
      <TimelineGroup label={experienceLabels.education} icon={GraduationCap} items={mergedEducation} />
    </div>
  )
}
