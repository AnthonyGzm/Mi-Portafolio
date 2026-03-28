import { personal, traits as traitsData } from '../data'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Experience from './Experience'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLang()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  }

  // pick the right bio paragraphs
  const bio = personal.bio[lang] ?? personal.bio.en

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-24"
    >
      {/* Left Column: Bio & Traits */}
      <div className="lg:col-span-2 flex flex-col gap-6">

        {/* Bio Card */}
        <motion.div variants={itemVariants} className="bento-card p-8 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-[var(--text)] tracking-tight">
            {t('hero.tagline')} <span className="accent-text">{t('hero.taglineAccent')}</span>
          </h1>
          <div className="text-[var(--text2)] text-[0.95rem] leading-relaxed">
            {bio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} style={{ marginBottom: i < bio.length - 1 ? '1rem' : 0 }} />
            ))}
          </div>
        </motion.div>

        {/* Traits 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {traitsData.map((trait) => {
            const Icon = Icons[trait.icon]
            const title = typeof trait.title === 'string' ? trait.title : (trait.title[lang] ?? trait.title.en)
            const desc  = typeof trait.desc  === 'string' ? trait.desc  : (trait.desc[lang]  ?? trait.desc.en)
            return (
              <motion.div key={title} variants={itemVariants} className="bento-card p-6 flex flex-col">
                <div className="mb-4 text-[var(--text)] inline-flex p-3 bg-[var(--surface)] rounded-xl w-fit border border-[var(--border)] shadow-sm">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-[var(--text3)] leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Right Column: Experience */}
      <motion.div variants={itemVariants} className="bento-card p-8 flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-[var(--text)] tracking-tight">{t('hero.exp')}</h2>
        <Experience />
      </motion.div>

    </motion.section>
  )
}
