import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { socials, personal } from '../data'
import { motion } from 'framer-motion'
import { Download, Mail, Send, MapPin, CheckCircle2 } from 'lucide-react'

const GithubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const SOCIAL_ICONS = { GitHub: <GithubIcon size={16}/>, LinkedIn: <LinkedinIcon size={16}/>, CV: <Download size={16}/>, Email: <Mail size={16}/> }
const STATUS = { IDLE: 'idle', SENDING: 'sending', OK: 'ok', ERROR: 'error' }

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(STATUS.IDLE)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(STATUS.SENDING)
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    ).then(() => {
      setStatus(STATUS.OK)
      formRef.current.reset()
      setTimeout(() => setStatus(STATUS.IDLE), 4500)
    }).catch(() => {
      setStatus(STATUS.ERROR)
      setTimeout(() => setStatus(STATUS.IDLE), 4500)
    })
  }

  return (
    <section id="contact" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>
          Contacto
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 600, margin: '0 auto' }}>
          ¿Listo para empezar tu próximo proyecto? Discutamos cómo puedo ayudar a llevar tus ideas a producción.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left: Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Enviar un mensaje</h3>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>Nombre *</label>
                <input name="from_name" type="text" placeholder="Tu nombre" required className="field" />
              </div>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>Email *</label>
                <input name="from_email" type="email" placeholder="tu@email.com" required className="field" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>Asunto *</label>
              <input name="subject" type="text" placeholder="Motivo de contacto" required className="field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>Mensaje *</label>
              <textarea name="message" rows={5} placeholder="Detalles de tu proyecto..." required className="field" />
            </div>
            
            <input type="hidden" name="to_email" value={personal.email} />

            <button type="submit" disabled={status === STATUS.SENDING} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8rem 1.5rem', background: 'var(--text)', color: 'var(--bg)',
              border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
              cursor: status === STATUS.SENDING ? 'wait' : 'pointer',
              opacity: status === STATUS.SENDING ? 0.8 : 1, transition: 'background 0.2s', marginTop: '0.5rem'
            }}>
              {status === STATUS.IDLE ? <><Send size={16}/> Enviar Mensaje</> : status === STATUS.OK ? 'Mensaje Enviado ✓' : status === STATUS.ERROR ? 'Error' : 'Enviando...'}
            </button>
          </form>
        </motion.div>

        {/* Right: Info Boxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Info Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Información</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} className="accent-text" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text3)' }}>Email</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{personal.email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} className="accent-text" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text3)' }}>Ubicación</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{personal.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Socials Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ delay: 0.1 }} className="bento-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Conectar</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name} style={{
                  width: 44, height: 44, background: 'var(--bg)', border: '1px solid var(--border)', 
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.color = 'var(--text2)' }}>
                  {SOCIAL_ICONS[s.name]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Status Badge Custom */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bento-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <CheckCircle2 size={18} style={{ color: '#10b981' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>Disponible para nuevos proyectos</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>Asumiendo trabajo de gran impacto.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
