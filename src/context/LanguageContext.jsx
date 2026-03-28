import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer & Tech Enthusiast',
      techLine: 'React • Node.js • Cloud Architecture',
      bio: 'Digital entrepreneur and developer passionate about building innovative, scalable solutions with a sharp focus on user experience and performance.',
      cta1: 'View Projects',
      cta2: 'Contact Me',
      tagline: 'Digital native building',
      taglineAccent: 'impactful solutions.',
      exp: 'Experience & Education',
    },
    traits: {
      clean: 'Clean Code',
      cleanDesc: 'Clear structures, maintainable code and best practices from the start.',
      fullstack: 'Full Stack',
      fullstackDesc: 'From backend with Node.js and SQL Server to frontend with React and Bootstrap.',
      ui: 'UI Design',
      uiDesc: 'Responsive, accessible interfaces with attention to visual detail.',
      team: 'Teamwork',
      teamDesc: 'Collaborative projects with agile methodologies and structured deliveries.',
    },
    skills: {
      title: 'Stack & Technologies',
      subtitle: 'Tools I use to build real solutions, from design to deployment.',
    },
    projects: {
      title: 'Featured',
      titleAccent: 'Projects',
      subtitle: 'Full systems and apps built with my real tech stack.',
      github: 'GitHub',
      demo: 'Live Demo',
      collab: 'Collaborate',
    },
    contact: {
      title: 'Contact',
      subtitle: "Ready to start your next project? Let's discuss how I can bring your ideas to production.",
      formTitle: 'Send a message',
      name: 'Name *',
      namePh: 'Your name',
      email: 'Email *',
      subject: 'Subject *',
      subjectPh: 'Reason for contact',
      message: 'Message *',
      messagePh: 'Project details...',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent ✓',
      error: 'Error',
      info: 'Information',
      location: 'Location',
      connect: 'Connect',
    },
    footer: {
      built: 'Built with React & Vite',
      deploy: '',
    },
    available: 'Available for new projects',
    availableSub: 'Taking on high-impact work.',
  },
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack & Entusiasta Tech',
      techLine: 'React • Node.js • Arquitectura Cloud',
      bio: 'Emprendedor digital y desarrollador apasionado por construir soluciones innovadoras, escalables y con un enfoque impecable en la experiencia de usuario y el rendimiento.',
      cta1: 'Ver Proyectos',
      cta2: 'Contactar',
      tagline: 'Nativo digital construyendo',
      taglineAccent: 'soluciones impactantes.',
      exp: 'Experiencia y Educación',
    },
    traits: {
      clean: 'Código limpio',
      cleanDesc: 'Estructuras claras, código mantenible y buenas prácticas desde el inicio.',
      fullstack: 'Full Stack',
      fullstackDesc: 'Del backend con Node.js y SQL Server al frontend con React y Bootstrap.',
      ui: 'Diseño UI',
      uiDesc: 'Interfaces responsivas, accesibles y con atención al detalle visual.',
      team: 'Trabajo en equipo',
      teamDesc: 'Proyectos colaborativos con metodologías ágiles y entregas estructuradas.',
    },
    skills: {
      title: 'Stack & Tecnologías',
      subtitle: 'Herramientas con las que construyo soluciones reales, del diseño al despliegue.',
    },
    projects: {
      title: 'Proyectos',
      titleAccent: 'Destacados',
      subtitle: 'Sistemas integrales y apps construidos con mi stack tech real.',
      github: 'GitHub',
      demo: 'Demo Live',
      collab: 'Colaborar',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para empezar tu próximo proyecto? Discutamos cómo puedo ayudar a llevar tus ideas a producción.',
      formTitle: 'Enviar un mensaje',
      name: 'Nombre *',
      namePh: 'Tu nombre',
      email: 'Email *',
      subject: 'Asunto *',
      subjectPh: 'Motivo de contacto',
      message: 'Mensaje *',
      messagePh: 'Detalles de tu proyecto...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      sent: 'Mensaje Enviado ✓',
      error: 'Error',
      info: 'Información',
      location: 'Ubicación',
      connect: 'Conectar',
    },
    footer: {
      built: 'Hecho con React & Vite',
      deploy: 'Despliegue Continuo',
    },
    available: 'Disponible para nuevos proyectos',
    availableSub: 'Asumiendo trabajo de gran impacto.',
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (path) => {
    const keys = path.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? path
  }
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
