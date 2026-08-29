// ─────────────────────────────────────────────────────────────
//  Mi Informacion
// ─────────────────────────────────────────────────────────────

// bio vive en src/data/content.js (traducido); acá solo lo que no cambia entre idiomas.
export const personal = {
  name: 'Anthony Guzman',
  initials: 'AG',
  role: 'Desarrollador Full Stack',
  location: 'Santo Domingo, RD',
  school: 'ITLA',
  email: 'anthonyguzman2808@gmail.com',
  available: true,
}

// traits vive en src/data/content.js (traducido)

export const stats = [
  { num: '3+', label: 'Años de estudio' },
  { num: '10+', label: 'Proyectos' },
  { num: '∞', label: 'Curiosidad' },
]

export const skills = [
  { cat: 'Frontend', icon: 'Monitor', items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Tailwind CSS', 'React'] },
  { cat: 'Backend', icon: 'Cpu', items: ['Node.js', 'Express.js', '.NET (MVC)', 'C#', 'Python', 'REST APIs', 'Php', 'Selenium'] },
  { cat: 'Base de datos', icon: 'Database', items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { cat: 'Herramientas', icon: 'Terminal', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Xampp', 'npm', 'Jira'] }
]

// title/desc viven traducidos en src/data/content.js (projectTitles/projectDescs)
export const projects = [
  {
    num: '00',
    title: 'Cashva',
    year: '2026',
    featured: false,
    inProgress: true,
    tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'NestJS'],
    image: '/img/Cashva.webp'
  },
  {
    num: '01',
    title: 'Task Manager',
    year: '2026',
    featured: false,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'PDO', 'Selenium', 'Pytest'],
    href: 'https://github.com/AnthonyGzm/Task-Manager',
    live: 'https://github.com/AnthonyGzm/Task-Manager',
    image: '/img/TaskManager.webp'
  },
  {
    num: '02',
    title: 'Identificador de Flores - Jardín Botánico RD',
    year: '2026',
    featured: false,
    tags: ['AWS', 'Azure Computer Vision', 'JavaScript', 'CSS', 'HTML5', 'Bootstrap 5', 'Machine-Learning'],
    href: 'https://github.com/AnthonyGzm/Proyecto-Jardin-BotanicoRD',
    live: 'https://jardinbotanicoai.netlify.app',
    image: '/img/JardinBotanico.webp'
  },
  {
    num: '03',
    title: 'FitRoutine',
    year: '2024',
    featured: false,
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
    tags: ['ASP.NET 8 MVC', 'C#', 'SQL Server', 'Bootstrap 5', 'HTML5', 'CSS3'],
    href: 'https://github.com/AnthonyGzm/READvolution',
    live: 'https://github.com/AnthonyGzm/READvolution',
    image: '/img/READvolution.webp'
  },
]

// role/desc/bullets viven en src/data/content.js (traducidos); acá solo lo que no cambia entre idiomas.
export const experience = [
  { company: 'Grupo Caremax (Lubricantes Diversos SRL)', period: '2026 — Actualidad' },
  { company: 'Instituto de Contadores Públicos Autorizados R.D. (ICPARD)', period: '2023 — 2026' },
]

export const education = [
  { company: 'Instituto Tecnológico de Las Américas (ITLA)', period: '2022 — Actualidad' },
]

export const socials = [
  { name: 'GitHub', handle: '@anthonygzm', href: 'https://github.com/anthonygzm' },
  { name: 'LinkedIn', handle: 'anthonyguzm', href: 'https://linkedin.com/in/anthonyguzm/' },
  { name: 'CV', handle: 'Descargar PDF', href: '/CV_Anthony_Guzman.pdf', download: true },
  { name: 'Email', handle: 'anthonyguzman2808@gmail.com', href: 'mailto:anthonyguzman2808@gmail.com' },
]
