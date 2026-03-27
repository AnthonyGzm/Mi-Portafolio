import { personal, traits, stats } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import * as Icons from 'lucide-react'

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2.5rem', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader label="01 / About me" title="Sobre" italic="mí" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — bio */}
          <div>
            {personal.bio.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p
                  dangerouslySetInnerHTML={{ __html: para }}
                  style={{ color: 'var(--text2)', lineHeight: 1.7, fontWeight: 400, fontSize: '1.05rem', marginBottom: '1.4rem' }}
                />
              </Reveal>
            ))}

            {/* Stats */}
            <Reveal delay={180}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1,
                background: 'var(--border)',
                border: '1px solid var(--border)',
                marginTop: '2.5rem',
                borderRadius: 4,
                overflow: 'hidden',
              }}>
                {stats.map(({ num, label }) => (
                  <div
                    key={label}
                    style={{ background: 'var(--bg2)', padding: '1.5rem 1rem', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
                  >
                    <div className="accent-text" style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.4rem' }}>
                      {num}
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — traits grid */}
          <div style={{ 
            display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 1, 
            background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' 
          }}>
            {traits.map((t, i) => {
              const Icon = Icons[t.icon]
              return (
                <Reveal key={t.title} delay={i * 60}>
                  <div
                    style={{ background: 'var(--bg2)', padding: '1.8rem', transition: 'background 0.2s', height: '100%' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
                  >
                    <div style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                      {Icon && <Icon size={28} strokeWidth={1.5} />}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.4rem' }}>{t.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
