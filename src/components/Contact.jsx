import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { socials, personal } from '../data'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { GitBranch, Briefcase, FileText, Mail, Send, MapPin, CheckCircle2 } from 'lucide-react'

const SOCIAL_ICONS = { GitHub: <GitBranch size={16}/>, LinkedIn: <Briefcase size={16}/>, CV: <FileText size={16}/>, Email: <Mail size={16}/> }
const STATUS = { IDLE: 'idle', SENDING: 'sending', OK: 'ok', ERROR: 'error' }

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(STATUS.IDLE)
  const { t } = useLang()

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

  const btnLabel = () => {
    if (status === STATUS.SENDING) return t('contact.sending')
    if (status === STATUS.OK)      return t('contact.sent')
    if (status === STATUS.ERROR)   return t('contact.error')
    return <><Send size={16}/> {t('contact.send')}</>
  }

  return (
    <section id="contact" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>
          {t('contact.title')}
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text2)', maxWidth: 600, margin: '0 auto' }}>
          {t('contact.subtitle')}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left: Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t('contact.formTitle')}</h3>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t('contact.name')}</label>
                <input name="from_name" type="text" placeholder={t('contact.namePh')} required className="field" />
              </div>
              <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t('contact.email')}</label>
                <input name="from_email" type="email" placeholder="tu@email.com" required className="field" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t('contact.subject')}</label>
              <input name="subject" type="text" placeholder={t('contact.subjectPh')} required className="field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600 }}>{t('contact.message')}</label>
              <textarea name="message" rows={5} placeholder={t('contact.messagePh')} required className="field" />
            </div>

            <input type="hidden" name="to_email" value={personal.email} />

            <button type="submit" disabled={status === STATUS.SENDING} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8rem 1.5rem', background: 'var(--accent)', color: '#fff',
              border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
              cursor: status === STATUS.SENDING ? 'wait' : 'pointer',
              opacity: status === STATUS.SENDING ? 0.8 : 1, transition: 'background 0.2s', marginTop: '0.5rem'
            }}>
              {btnLabel()}
            </button>
          </form>
        </motion.div>

        {/* Right: Info Boxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Info Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t('contact.info')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} className="accent-text" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text3)' }}>Email</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{personal.email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} className="accent-text" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text3)' }}>{t('contact.location')}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{personal.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Socials Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ delay: 0.1 }} className="bento-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t('contact.connect')}</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name} style={{
                  width: 44, height: 44, background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
                  {SOCIAL_ICONS[s.name]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Available Badge */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bento-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{t('available')}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{t('availableSub')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
