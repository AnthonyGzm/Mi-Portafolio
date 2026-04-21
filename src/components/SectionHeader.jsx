import Reveal from './Reveal'

export default function SectionHeader({ label, title, italic, subtitle }) {
  return (
    <>
      <Reveal>
        <div className="flex items-center gap-4 mb-14">
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
          >
            {label}
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: subtitle ? '1.25rem' : '2.5rem',
          }}
        >
          {title}{' '}
          {italic && (
            <span className="accent-text" style={{ fontStyle: 'italic', fontWeight: 900 }}>
              {italic}
            </span>
          )}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={100}>
          <p
            style={{
              color: 'var(--text2)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: 580,
              marginBottom: '2.5rem',
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </>
  )
}
