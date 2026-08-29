import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { socials, personal } from '../data'
import { motion } from 'framer-motion'
import { Download, Mail, Send, MapPin } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import SectionHeader from './SectionHeader'

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
  const { sections, contact: t } = useContent()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formRef.current.company.value) {
      // Honeypot: campo invisible para humanos, si viene lleno es un bot.
      formRef.current.reset()
      return
    }

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
      <SectionHeader
        label={sections.contact.label}
        title={sections.contact.title}
        italic={sections.contact.italic}
        subtitle={sections.contact.subtitle}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'stretch' }}>
        {/* Left: Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ flex: '1.15 1 380px', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t.formTitle}</h3>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.nameLabel}</label>
                <input name="from_name" type="text" placeholder={t.namePlaceholder} required maxLength={100} className="field" />
              </div>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.emailFieldLabel}</label>
                <input name="from_email" type="email" placeholder={t.emailPlaceholder} required maxLength={150} className="field" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.subjectLabel}</label>
              <input name="subject" type="text" placeholder={t.subjectPlaceholder} required maxLength={150} className="field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t.messageLabel}</label>
              <textarea name="message" rows={5} placeholder={t.messagePlaceholder} required maxLength={2000} className="field" />
            </div>
            
            <input type="hidden" name="to_email" value={personal.email} />

            <button type="submit" disabled={status === STATUS.SENDING} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8rem 1.5rem', background: 'var(--text)', color: 'var(--bg)',
              border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
              cursor: status === STATUS.SENDING ? 'wait' : 'pointer',
              opacity: status === STATUS.SENDING ? 0.8 : 1, transition: 'background 0.2s', marginTop: '0.5rem'
            }}>
              {status === STATUS.IDLE ? <><Send size={16}/> {t.send}</> : status === STATUS.OK ? t.sent : status === STATUS.ERROR ? t.error : t.sending}
            </button>
          </form>
        </motion.div>

        {/* Right: unified contact panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bento-card"
          style={{
            flex: '1 1 300px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            background: 'linear-gradient(160deg, var(--accent-dim), var(--bg2) 55%)',
          }}
        >
          {/* Availability status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>
              <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', opacity: 0.4, animation: 'pulseDot 2s ease-in-out infinite' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              </span>
              {t.availableTitle.toUpperCase()}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text2)' }}>{t.availableDesc}</p>
          </div>

          <div style={{ height: 1, background: 'var(--border)' }} />

          {/* Email / Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 38, height: 38, flexShrink: 0, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={16} className="accent-text" />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text3)' }}>{t.emailLabel}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{personal.email}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: 38, height: 38, flexShrink: 0, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={16} className="accent-text" />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text3)' }}>{t.locationLabel}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{personal.location}</div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border)' }} />

          {/* Socials */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text3)', marginBottom: '0.75rem' }}>{t.connectTitle}</div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name} download={s.download ? 'CV_Anthony_Guzman.pdf' : undefined} style={{
                  width: 40, height: 40, background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.color = 'var(--text2)' }}>
                  {SOCIAL_ICONS[s.name]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
