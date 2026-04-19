import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero-header', 'about', 'skills', 'projects', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('hero-header')

  useEffect(() => {
    const handler = () => {
      for (const id of [...SECTION_IDS].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return active
}
