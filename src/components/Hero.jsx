import { personal, traits } from '../data'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Experience from './Experience'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  }

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="hero"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', paddingTop: '6rem' }}
    >
      {/* Left Column: Bio & Traits */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Bio Card */}
        <motion.div variants={itemVariants} className="bento-card" style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
            Nativo digital construyendo <span className="accent-text">soluciones impactantes.</span>
          </h1>
          <div style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {personal.bio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} style={{ marginBottom: i < personal.bio.length - 1 ? '1rem' : 0 }} />
            ))}
          </div>
        </motion.div>

        {/* Traits 2x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {traits.map((t, i) => {
            const Icon = Icons[t.icon]
            return (
              <motion.div key={t.title} variants={itemVariants} className="bento-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--text)', display: 'inline-flex', padding: '10px', background: 'var(--bg)', borderRadius: '8px', width: 'fit-content', border: '1px solid var(--border)' }}>
                  {Icon && <Icon size={20} />}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Right Column: Experience */}
      <motion.div variants={itemVariants} className="bento-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text)' }}>Experiencia y Educación</h2>
        <Experience />
      </motion.div>

    </motion.section>
  )
}
