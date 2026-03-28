// ─────────────────────────────────────────────────────────────
//  SITE DATA  —  Edit this file to personalize the portfolio
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Anthony Guzman',
  initials: 'AG',
  role: 'Full Stack Developer',
  location: 'Santo Domingo, RD',
  school: 'ITLA',
  email: 'anthonyguzman2808@gmail.com',
  available: true,
  bio: {
    es: [
      'Soy <strong>Anthony Guzmán</strong>, estudiante de Desarrollo de Software en el <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, en Santo Domingo, República Dominicana.',
      'Me apasiona el desarrollo de aplicaciones web completas, participando en todo el proceso: desde el diseño de bases de datos hasta la construcción de interfaces de usuario atractivas y funcionales. Me enfoco en crear soluciones eficientes, escalables y con una buena experiencia de usuario.',
      'He trabajado en proyectos académicos colaborativos, aplicando metodologías ágiles y buenas prácticas de desarrollo, lo que me ha permitido fortalecer mis habilidades en trabajo en equipo, organización y entrega de resultados estructurados.',
      'Actualmente, continúo aprendiendo y mejorando mis habilidades técnicas, con el objetivo de crecer como desarrollador y aportar valor en cada proyecto en el que participo.',
    ],
    en: [
      'I\'m <strong>Anthony Guzmán</strong>, a Software Development student at the <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, in Santo Domingo, Dominican Republic.',
      'I\'m passionate about full-stack web development, participating in every step of the process: from database design to building attractive and functional user interfaces. I focus on creating efficient, scalable solutions with a great user experience.',
      'I have worked on collaborative academic projects, applying agile methodologies and development best practices, which has allowed me to strengthen my skills in teamwork, organization, and structured delivery.',
      'I\'m currently continuing to learn and improve my technical skills, with the goal of growing as a developer and adding value to every project I participate in.',
    ],
  },
}

export const traits = [
  { icon: 'Code',   title: { es: 'Código limpio',     en: 'Clean Code'  }, desc: { es: 'Estructuras claras, código mantenible y buenas prácticas desde el inicio.', en: 'Clear structures, maintainable code and best practices from the start.' } },
  { icon: 'Globe',  title: { es: 'Full Stack',         en: 'Full Stack'  }, desc: { es: 'Del backend con Node.js y SQL Server al frontend con React y Bootstrap.', en: 'From backend with Node.js and SQL Server to frontend with React and Bootstrap.' } },
  { icon: 'Layout', title: { es: 'Diseño UI',          en: 'UI Design'   }, desc: { es: 'Interfaces responsivas, accesibles y con atención al detalle visual.', en: 'Responsive, accessible interfaces with attention to visual detail.' } },
  { icon: 'Users',  title: { es: 'Trabajo en equipo',  en: 'Teamwork'    }, desc: { es: 'Proyectos colaborativos con metodologías ágiles y entregas estructuradas.', en: 'Collaborative projects with agile methodologies and structured deliveries.' } },
]

export const stats = [
  { num: '3+', label: { es: 'Años de estudio', en: 'Years studying' } },
  { num: '10+', label: { es: 'Proyectos', en: 'Projects' } },
  { num: '∞', label: { es: 'Curiosidad', en: 'Curiosity' } },
]

export const skills = [
  { cat: { es: 'Frontend',        en: 'Frontend'        }, icon: 'Monitor', items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Tailwind CSS', 'React'] },
  { cat: { es: 'Backend',         en: 'Backend'         }, icon: 'Cpu',     items: ['Node.js', 'Express.js', 'REST APIs', 'express-session', 'Java'] },
  { cat: { es: 'Base de datos',   en: 'Databases'       }, icon: 'Database',items: ['SQL Server', 'SSMS', 'T-SQL', 'Diseño relacional', 'MySQL', 'SQLite'] },
  { cat: { es: 'Herramientas',    en: 'Tools'           }, icon: 'Terminal',items: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'] },
]

export const projects = [
  {
    num: '01',
    title: 'PrimeFit',
    year: '2026',
    featured: true,
    desc: {
      es: 'Aplicación web de gestión de gimnasio desarrollada en equipo para Programación 3. Sistema de login, registro de actividades y panel administrativo completo con persistencia en localStorage.',
      en: 'Gym management web app developed as a team project for Programming 3. Login system, activity tracking, and a complete admin panel with localStorage persistence.',
    },
    tags: ['HTML5', 'Bootstrap 5', 'JavaScript', 'localStorage'],
    href: 'https://github.com/AnthonyGzm/PrimeFit',
    live: null,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'PrimeFit API',
    year: '2025',
    featured: false,
    desc: {
      es: 'Versión backend con Node.js/Express, autenticación por sesiones y SQL Server con tablas auto-seeded. Arquitectura cliente-servidor real y completa.',
      en: 'Backend version with Node.js/Express, session-based authentication, and SQL Server with auto-seeded tables. Full real-world client-server architecture.',
    },
    tags: ['Node.js', 'Express', 'SQL Server', 'mssql'],
    href: 'https://github.com/anthonygzm',
    live: null,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
  },
  {
    num: '03',
    title: { es: 'Próximo proyecto', en: 'Next Project' },
    year: '2026',
    featured: false,
    desc: {
      es: 'Siempre construyendo algo nuevo. Si tienes una idea y quieres colaborar, escríbeme.',
      en: 'Always building something new. If you have an idea and want to collaborate, reach out.',
    },
    tags: [{ es: 'En progreso', en: 'In progress' }],
    href: '#contact',
    live: null,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1488&auto=format&fit=crop',
  },
]

export const experience = [
  {
    role: { es: 'Asistente de Registro', en: 'Registration Assistant' },
    company: 'ICPARD',
    period: '2023 — Presente',
    desc: {
      es: 'Supervisión y actualización del sistema y base de datos, asegurando la precisión de la información y la correcta gestión de la documentación institucional.',
      en: 'Supervision and updating of the system and database, ensuring information accuracy and correct management of institutional documentation.',
    },
    bullets: [
      { es: 'Gestión de base de datos', en: 'Database management' },
      { es: 'Registro e inscripción de miembros', en: 'Member registration & enrollment' },
      { es: 'Emisión de credenciales y carnets', en: 'Credential & ID card issuance' },
      { es: 'Gestión de certificados institucionales', en: 'Institutional certificate management' },
    ],
  },
  {
    role: { es: 'Desarrollador Freelance', en: 'Freelance Developer' },
    company: { es: 'Independiente', en: 'Self-employed' },
    period: '2025 — Presente',
    desc: {
      es: 'Desarrollo de aplicaciones web a medida para clientes, desde el diseño hasta el despliegue, con enfoque en rendimiento y experiencia de usuario.',
      en: 'Custom web application development for clients, from design to deployment, with a focus on performance and user experience.',
    },
    bullets: [
      { es: 'Desarrollo de apps web', en: 'Web app development' },
      { es: 'React · Node.js · SQL', en: 'React · Node.js · SQL' },
      { es: 'Diseño UI/UX responsive', en: 'Responsive UI/UX design' },
    ],
  },
]


export const education = [
  {
    role: { es: 'Técnico en Desarrollo de Software — Estudiante de Término', en: 'Software Development Technician — Final Year' },
    company: 'Instituto Tecnológico de Las Américas (ITLA)',
    period: '2022 — Presente',
    desc: {
      es: 'Estudiante de término en el ITLA. Durante mi formación he adquirido una base sólida en tecnologías y herramientas clave como Node.js, React, SQL Server, Java, y metodologías de desarrollo de software.',
      en: 'Final-year student at ITLA. Throughout my studies I have built a solid foundation in key technologies and tools such as Node.js, React, SQL Server, Java, and software development methodologies.',
    },
    bullets: [
      { es: 'Estudiante de Término — Programación I, II y III', en: 'Final Year — Programming I, II and III' },
      { es: 'Bases de datos con SQL Server y MySQL', en: 'Databases with SQL Server and MySQL' },
      { es: 'Desarrollo web con Node.js y React', en: 'Web development with Node.js and React' },
    ],
  },
]

export const socials = [
  { name: 'GitHub',   handle: '@anthonygzm',               href: 'https://github.com/anthonygzm' },
  { name: 'LinkedIn', handle: 'anthonyguzm',                href: 'https://linkedin.com/in/anthonyguzm/' },
  { name: 'CV',       handle: { es: 'Descargar PDF', en: 'Download PDF' }, href: '/Cv Anthony Guzman.pdf' },
  { name: 'Email',    handle: 'anthonyguzman2808@gmail.com', href: 'mailto:anthonyguzman2808@gmail.com' },
]
