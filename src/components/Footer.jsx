import { personal } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', padding: '2.5rem 2.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text3)' }}>
          © {new Date().getFullYear()} <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{personal.name}</strong>.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text3)' }}>
          <span>Build con React & Vite</span>
          <span>Despliegue Continuo</span>
        </div>
      </div>
    </footer>
  )
}
