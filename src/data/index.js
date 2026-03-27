// ─────────────────────────────────────────────────────────────
//  SITE DATA  —  Edit this file to personalize the portfolio
// ─────────────────────────────────────────────────────────────

export const personal = {
  name:      'Anthony Guzman',
  initials:  'AG',
  role:      'Desarrollador Full Stack',
  location:  'Santo Domingo, RD',
  school:    'ITLA',
  email:     'anthonyguzman2808@gmail.com',
  available: true,
  bio: [
    'Soy <strong>Anthony Guzman</strong>, estudiante de desarrollo de software en el <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, Santo Domingo, República Dominicana.',
    'Me apasiona construir aplicaciones web completas — desde el diseño de base de datos hasta la interfaz de usuario. Trabajo en proyectos académicos en equipo con entregas estructuradas y metodologías ágiles.',
    'Actualmente en <strong>Programación 3</strong>, desarrollando apps con arquitectura real: servidores Node.js, bases de datos SQL Server y frontends modernos con React.',
  ],
}

export const traits = [
  { icon: 'Code',   title: 'Código limpio',    desc: 'Estructuras claras, código mantenible y buenas prácticas desde el inicio.' },
  { icon: 'Globe',  title: 'Full Stack',       desc: 'Del backend con Node.js y SQL Server al frontend con React y Bootstrap.' },
  { icon: 'Layout', title: 'Diseño UI',        desc: 'Interfaces responsivas, accesibles y con atención al detalle visual.' },
  { icon: 'Users',  title: 'Trabajo en equipo',desc: 'Proyectos colaborativos con metodologías ágiles y entregas estructuradas.' },
]

export const stats = [
  { num: '3+',  label: 'Años de estudio' },
  { num: '10+', label: 'Proyectos'       },
  { num: '∞',   label: 'Curiosidad'      },
]

export const skills = [
  { cat: 'Frontend',      icon: 'Monitor',  items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Tailwind CSS', 'React'] },
  { cat: 'Backend',       icon: 'Cpu',      items: ['Node.js', 'Express.js', 'REST APIs', 'express-session', 'Java'] },
  { cat: 'Base de datos', icon: 'Database', items: ['SQL Server', 'SSMS', 'T-SQL', 'Diseño relacional'] },
  { cat: 'Herramientas',  icon: 'Terminal', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'] },
]

export const projects = [
  {
    num:      '01',
    title:    'PrimeFit',
    year:     '2025',
    featured: true,
    desc:     'Aplicación web de gestión de gimnasio desarrollada en equipo para Programación 3. Sistema de login, registro de actividades y panel administrativo completo con persistencia en localStorage.',
    tags:     ['HTML5', 'Bootstrap 5', 'JavaScript', 'localStorage'],
    href:     'https://github.com/anthonygzm',
    live:     null,
  },
  {
    num:      '02',
    title:    'PrimeFit API',
    year:     '2025',
    featured: false,
    desc:     'Versión backend con Node.js/Express, autenticación por sesiones y SQL Server con tablas auto-seeded. Arquitectura cliente-servidor real y completa.',
    tags:     ['Node.js', 'Express', 'SQL Server', 'mssql'],
    href:     'https://github.com/anthonygzm',
    live:     null,
  },
  {
    num:      '03',
    title:    'Próximo proyecto',
    year:     '2026',
    featured: false,
    desc:     'Siempre construyendo algo nuevo. Si tienes una idea y quieres colaborar, escríbeme.',
    tags:     ['En progreso'],
    href:     '#contact',
    live:     null,
  },
]

export const experience = [
  {
    role:    'Tu rol aquí',              // 👈 Edita con tu cargo real
    company: 'Tu empresa / práctica',    // 👈 Edita con tu empresa
    period:  'Mes Año — Presente',
    desc:    'Descripción breve de tus responsabilidades y tecnologías usadas.',
    bullets: [
      'Logro o responsabilidad 1',
      'Logro o responsabilidad 2',
      'Logro o responsabilidad 3',
    ],
  },
]

export const education = [
  {
    role:    'Técnico en Desarrollo de Software',
    company: 'Instituto Tecnológico de Las Américas (ITLA)',
    period:  '2022 — Presente',
    desc:    'Programación orientada a objetos, desarrollo web full stack, bases de datos relacionales y gestión de proyectos en equipo.',
    bullets: [
      'Programación I, II y III',
      'Bases de datos con SQL Server',
      'Desarrollo web con Node.js y React',
    ],
  },
]

export const socials = [
  { name: 'GitHub',   handle: '@anthonygzm',                    href: 'https://github.com/anthonygzm' },
  { name: 'LinkedIn', handle: 'anthonyguzm',                    href: 'https://linkedin.com/in/anthonyguzm/' },
  { name: 'CV',       handle: 'Descargar PDF',                  href: '#' },  // 👈 Pon tu link de Google Drive
  { name: 'Email',    handle: 'anthonyguzman2808@gmail.com',    href: 'mailto:anthonyguzman2808@gmail.com' },
]
