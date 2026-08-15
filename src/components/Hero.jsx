import { ICONS } from '../data/icons'
import { motion } from 'framer-motion'
import { renderBio } from '../utils/renderBio'
import { useContent } from '../hooks/useContent'
import Experience from './Experience'
import SectionHeader from './SectionHeader'

export default function Hero() {
  const { personal, traits, sections, heroBio } = useContent()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  }

  return (
    <section id="about" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <SectionHeader label={sections.about.label} title={sections.about.title} italic={sections.about.italic} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {/* Bio Card */}
        <motion.div variants={itemVariants} className="bento-card" style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
            {heroBio.title} <span className="accent-text">{heroBio.accent}</span>
          </h1>
          <div style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {personal.bio.map((para, i) => (
              <p key={i} style={{ marginBottom: i < personal.bio.length - 1 ? '1rem' : 0 }}>{renderBio(para)}</p>
            ))}
          </div>
        </motion.div>

        {/* Traits Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {traits.map((t) => {
            const Icon = ICONS[t.icon]
            return (
              <motion.div key={t.icon} variants={itemVariants} className="bento-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--text)', display: 'inline-flex', padding: '10px', background: 'var(--bg)', borderRadius: '8px', width: 'fit-content', border: '1px solid var(--border)' }}>
                  {Icon && <Icon size={20} />}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Experience & Education */}
        <motion.div variants={itemVariants} className="bento-card" style={{ padding: '2rem' }}>
          <Experience />
        </motion.div>
      </motion.div>
    </section>
  )
}
