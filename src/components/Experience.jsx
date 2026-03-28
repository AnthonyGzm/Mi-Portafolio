import { experience, education } from '../data'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { CalendarDays } from 'lucide-react'

// Helper: resolve a bilingual string or plain string
function loc(val, lang) {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val[lang] ?? val.en ?? val.es ?? ''
}

function TimelineItem({ item, type, idx, isLast }) {
  const { lang } = useLang()
  const isWork = type === 'work'
  const dotColor = isWork ? 'var(--accent)' : '#0ea5e9'

  const role    = loc(item.role,    lang)
  const company = loc(item.company, lang)
  const desc    = loc(item.desc,    lang)
  const bullets = (item.bullets ?? []).map(b => loc(b, lang))

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: idx * 0.08, duration: 0.45 }}
      style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}
    >
      {/* Timeline track */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 12, height: 12, borderRadius: '50%', marginTop: 4,
          background: dotColor,
          boxShadow: `0 0 0 3px ${dotColor}30`,
          flexShrink: 0, position: 'relative', zIndex: 1
        }} />
        {!isLast && (
          <div style={{
            width: 1, flex: 1, marginTop: 6,
            background: `linear-gradient(to bottom, ${dotColor}40, transparent)`,
            minHeight: 32
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : '2rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.3rem' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            {role}
          </h3>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--text3)', background: 'var(--bg2)',
            border: '1px solid var(--border)', padding: '0.15rem 0.55rem',
            borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0
          }}>
            <CalendarDays size={9} /> {item.period}
          </span>
        </div>

        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: dotColor, marginBottom: '0.6rem' }}>{company}</p>
        <p style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {bullets.map((b, i) => (
            <span key={i} style={{
              fontSize: '0.68rem', fontFamily: 'JetBrains Mono, monospace',
              color: dotColor,
              background: `${dotColor}12`,
              border: `1px solid ${dotColor}28`,
              padding: '0.2rem 0.6rem', borderRadius: '100px'
            }}>{b}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceComponent() {
  const totalWork = experience.length
  const totalEdu  = education.length
  const { t } = useLang()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {experience.map((item, i) => (
        <TimelineItem key={`w-${i}`} item={item} type="work" idx={i} isLast={i === totalWork - 1 && totalEdu === 0} />
      ))}

      {totalEdu > 0 && (
        <div style={{ marginBottom: '0.75rem', marginLeft: '1.6rem', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {t('hero.exp').split(' ').slice(-1)[0]}
        </div>
      )}

      {education.map((item, i) => (
        <TimelineItem key={`e-${i}`} item={item} type="edu" idx={experience.length + i} isLast={i === totalEdu - 1} />
      ))}
    </div>
  )
}
