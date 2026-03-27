import { skills } from '../data'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function Skills() {
  const mainCategories = skills.slice(0, 3)
  const additionalCat = skills[3]

  return (
    <section id="skills" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>
          Habilidades & Tecnologías
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 600, margin: '0 auto' }}>
          Un conjunto completo de herramientas para construir aplicaciones modernas, desde el concepto hasta el despliegue.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {mainCategories.map((cat, i) => {
          const Icon = Icons[cat.icon]
          return (
            <motion.div 
              key={cat.cat} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bento-card" 
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ color: 'var(--accent)' }}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{cat.cat}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.items.map(item => (
                  <span 
                    key={item} 
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      color: 'var(--text2)',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {additionalCat && (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Tecnologías Adicionales
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: 800, margin: '0 auto' }}>
            {additionalCat.items.map(item => (
              <span 
                key={item} 
                style={{
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--text3)',
                  transition: 'background 0.2s, color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.color = 'var(--text3)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
