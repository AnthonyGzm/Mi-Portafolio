// ─────────────────────────────────────────────────────────────
//  Mi Informacion
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Anthony Guzman',
  initials: 'AG',
  role: 'Desarrollador Full Stack',
  location: 'Santo Domingo, RD',
  school: 'ITLA',
  email: 'anthonyguzman2808@gmail.com',
  available: true,
  bio: [
    'Soy <strong>Anthony Guzman</strong>, estudiante de desarrollo de software en el <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, en Santo Domingo Norte, República Dominicana.',
    'Me apasiona el desarrollo de aplicaciones, participando en todo el proceso: desde el diseño de bases de datos hasta la construcción de interfaces modernas y funcionales.',
    'He desarrollado diversos proyectos utilizando tecnologías como C#, .NET (MVC), PHP, JavaScript y Node.js, creando aplicaciones funcionales y bien estructuradas, orientadas a la resolución de problemas reales y siguiendo buenas prácticas de desarrollo.',
    'He trabajado bajo metodologías ágiles como <strong>Scrum</strong>, colaborando en equipo, organizando tareas y adaptándome a entornos de desarrollo dinámicos.',
    'Me enfoco en el aprendizaje continuo con el objetivo de convertirme en un desarrollador Full Stack capaz de crear soluciones eficientes, escalables y centradas en el usuario.',
  ],
}

export const traits = [
  {
    icon: 'Code',
    title: 'Código limpio',
    desc: 'Desarrollo de código estructurado, mantenible y escalable, aplicando buenas prácticas y estándares desde el inicio.'
  },
  {
    icon: 'Globe',
    title: 'Desarrollo Full Stack',
    desc: 'Experiencia en desarrollo de aplicaciones completas, desde backend hasta frontend.'
  },
  {
    icon: 'Layout',
    title: 'Diseño UI/UX',
    desc: 'Creación de interfaces modernas, responsivas y accesibles, enfocadas en la experiencia del usuario y el detalle visual.'
  },
  {
    icon: 'Users',
    title: 'Trabajo en equipo',
    desc: 'Colaboración en proyectos bajo metodologías ágiles como Scrum, con enfoque en comunicación efectiva y entregas continuas.'
  },
]

export const stats = [
  { num: '3+', label: 'Años de estudio' },
  { num: '10+', label: 'Proyectos' },
  { num: '∞', label: 'Curiosidad' },
]

export const skills = [
  { cat: 'Frontend', icon: 'Monitor', items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Tailwind CSS', 'React'] },
  { cat: 'Backend', icon: 'Cpu', items: ['Node.js', 'Express.js', '.NET (MVC)', 'C#', 'Python', 'REST APIs', 'Php', 'Selenium'] },
  { cat: 'Base de datos', icon: 'Database', items: ['SQL Server', 'MySQL', 'T-SQL', 'MongoDB'] },
  { cat: 'Herramientas', icon: 'Terminal', items: ['Git', 'GitHub', 'VS Code', 'Xampp', 'npm', 'Jira'] }
]

export const projects = [
  {
    num: '01',
    title: 'Task Manager',
    year: '2026',
    featured: false,
    desc: 'Aplicación web desarrollada con PHP para la gestión de tareas (CRUD), incluyendo autenticación, manejo de sesiones y base de datos MySQL. Incorpora pruebas automatizadas end-to-end utilizando Selenium WebDriver y Pytest para garantizar la calidad del sistema.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'PDO', 'Selenium', 'Pytest'],
    href: 'https://github.com/AnthonyGzm/Task-Manager',
    live: 'https://github.com/AnthonyGzm/Task-Manager',
    image: '/img/TaskManager.png'
  },
  {
    num: '02',
    title: 'Identificador de Flores - Jardín Botánico RD',
    year: '2026',
    featured: false,
    desc: 'Sistema de reconocimiento de flores basado en Azure Computer Vision. Permite a los usuarios analizar imágenes mediante una interfaz simple e intuitiva, obteniendo identificación automática y resultados detallados.',
    tags: ['AWS', 'Azure Computer Vision', 'JavaScript', 'CSS', 'HTML5', 'Bootstrap 5', 'Machine-Learning'],
    href: 'https://github.com/AnthonyGzm/Proyecto-Jardin-BotanicoRD',
    live: 'https://jardinbotanicoai.netlify.app',
    image: '/img/JardinBotanico.png'
  },
  {
    num: '03',
    title: 'FitRoutine',
    year: '2024',
    featured: false,
    desc: 'Aplicación web desarrollada con ASP.NET Core 8 y SQL Server para la gestión de rutinas y actividades fitness. Permite a los usuarios registrar entrenamientos, organizar sesiones y dar seguimiento a su progreso mediante una interfaz moderna, responsiva y fácil de usar.',
    tags: ['ASP.NET Core 8', 'C#', 'SQL Server', 'Bootstrap 5', 'HTML5', 'CSS3'],
    href: 'https://github.com/AnthonyGzm/FitRoutineApp',
    live: 'https://github.com/AnthonyGzm/FitRoutineApp',
    image: '/img/FitRoutine.jpg'
  },

  {
    num: '05',
    title: 'READvolution',
    year: '2024',
    featured: false,
    desc: 'Aplicación web desarrollada para mejorar la experiencia de lectura, construida con ASP.NET 8 MVC y SQL Server. Incluye funcionalidades completas, optimización de rendimiento y corrección de errores, ofreciendo una experiencia fluida y lista para despliegue en producción.',
    tags: ['ASP.NET 8 MVC', 'C#', 'SQL Server', 'Bootstrap 5', 'HTML5', 'CSS3'],
    href: 'https://github.com/AnthonyGzm/READvolution',
    live: 'https://github.com/AnthonyGzm/READvolution',
    image: '/img/READvolution.png'
  },
]

export const experience = [
  {
    role: 'Asistente Registro',
    company: 'Instituto de Contadores Públicos Autorizados R.D. (ICPARD)',
    period: '2023 — Actualidad',
    desc: 'Gestión de procesos administrativos y manejo de información mediante EcoHub, una plataforma ERP/CRM basada en Odoo, utilizada para la administración de miembros, datos institucionales y procesos contables.',
    bullets: [
      'Gestión y registro de nuevos miembros, incluyendo la emisión de credenciales, carnets y certificados institucionales.',
      'Actualización y supervisión de la base de datos institucional, garantizando la precisión, integridad y organización de la información.',
      'Control y seguimiento de documentación administrativa, optimizando los procesos internos de registro.',
      'Uso de un sistema ERP para la automatización y control de procesos, fortaleciendo habilidades en manejo de software empresarial.',
    ],
  },
]

export const education = [
  {
    role: 'Tecnólogo en Desarollo de Software',
    company: 'Instituto Tecnológico de Las Américas (ITLA)',
    period: '2022 — Actualidad',
    desc: 'Formación técnica en desarrollo de software con enfoque en aplicaciones web y programación orientada a objetos, utilizando tecnologías modernas para la creación de soluciones escalables y centradas en el usuario.',
    bullets: [
      'Desarrollo de aplicaciones con .NET y C#, aplicando el patrón de arquitectura MVC para estructurar soluciones robustas y mantenibles.',
      'Construcción de interfaces web modernas y responsivas utilizando React y Bootstrap.',
      'Control de versiones y gestión de proyectos con Git y GitHub en entornos colaborativos.',
      'Desarrollo de interfaces web utilizando HTML y CSS, aplicando principios de diseño y usabilidad.',
      'Enfoque en aprendizaje continuo y fortalecimiento de habilidades para el desarrollo Full Stack.',
    ],
  },
]

export const socials = [
  { name: 'GitHub', handle: '@anthonygzm', href: 'https://github.com/anthonygzm' },
  { name: 'LinkedIn', handle: 'anthonyguzm', href: 'https://linkedin.com/in/anthonyguzm/' },
  { name: 'CV', handle: 'Descargar PDF', href: '#' },  // 👈 Pon tu link de Google Drive
  { name: 'Email', handle: 'anthonyguzman2808@gmail.com', href: 'mailto:anthonyguzman2808@gmail.com' },
]
