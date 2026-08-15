// ─────────────────────────────────────────────────────────────
//  Contenido traducido (ES / EN)
//  Lo que no cambia entre idiomas (hrefs, imágenes, tags, años,
//  nombres de tecnologías) vive en src/data/index.js y no se duplica.
// ─────────────────────────────────────────────────────────────

export const content = {
  es: {
    personal: {
      bio: [
        'Soy <strong>Anthony Guzman</strong>, estudiante de desarrollo de software en el <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, en Santo Domingo Norte, República Dominicana.',
        'Me apasiona el desarrollo de aplicaciones, participando en todo el proceso: desde el diseño de bases de datos hasta la construcción de interfaces modernas y funcionales.',
        'He desarrollado diversos proyectos utilizando tecnologías como C#, .NET (MVC), PHP, JavaScript y Node.js, creando aplicaciones funcionales y bien estructuradas, orientadas a la resolución de problemas reales y siguiendo buenas prácticas de desarrollo.',
        'He trabajado bajo metodologías ágiles como <strong>Scrum</strong>, colaborando en equipo, organizando tareas y adaptándome a entornos de desarrollo dinámicos.',
        'Me enfoco en el aprendizaje continuo con el objetivo de convertirme en un desarrollador Full Stack capaz de crear soluciones eficientes, escalables y centradas en el usuario.',
      ],
    },

    traits: [
      { icon: 'Code', title: 'Código limpio', desc: 'Desarrollo de código estructurado, mantenible y escalable, aplicando buenas prácticas y estándares desde el inicio.' },
      { icon: 'Globe', title: 'Desarrollo Full Stack', desc: 'Experiencia en desarrollo de aplicaciones completas, desde backend hasta frontend.' },
      { icon: 'Layout', title: 'Diseño UI/UX', desc: 'Creación de interfaces modernas, responsivas y accesibles, enfocadas en la experiencia del usuario y el detalle visual.' },
      { icon: 'Users', title: 'Trabajo en equipo', desc: 'Colaboración en proyectos bajo metodologías ágiles como Scrum, con enfoque en comunicación efectiva y entregas continuas.' },
    ],

    skillCategories: { 'Frontend': 'Frontend', 'Backend': 'Backend', 'Base de datos': 'Base de datos', 'Herramientas': 'Herramientas' },

    projectTitles: {
      'Task Manager': 'Task Manager',
      'Identificador de Flores - Jardín Botánico RD': 'Identificador de Flores - Jardín Botánico RD',
      'FitRoutine': 'FitRoutine',
      'READvolution': 'READvolution',
    },
    projectDescs: {
      'Task Manager': 'Aplicación web desarrollada con PHP para la gestión de tareas (CRUD), incluyendo autenticación, manejo de sesiones y base de datos MySQL. Incorpora pruebas automatizadas end-to-end utilizando Selenium WebDriver y Pytest para garantizar la calidad del sistema.',
      'Identificador de Flores - Jardín Botánico RD': 'Sistema de reconocimiento de flores basado en Azure Computer Vision. Permite a los usuarios analizar imágenes mediante una interfaz simple e intuitiva, obteniendo identificación automática y resultados detallados.',
      'FitRoutine': 'Aplicación web desarrollada con ASP.NET Core 8 y SQL Server para la gestión de rutinas y actividades fitness. Permite a los usuarios registrar entrenamientos, organizar sesiones y dar seguimiento a su progreso mediante una interfaz moderna, responsiva y fácil de usar.',
      'READvolution': 'Aplicación web desarrollada para mejorar la experiencia de lectura, construida con ASP.NET 8 MVC y SQL Server. Incluye funcionalidades completas, optimización de rendimiento y corrección de errores, ofreciendo una experiencia fluida y lista para despliegue en producción.',
    },
    featuredLabel: 'Destacado',

    experience: [
      {
        role: 'Gerente de TI',
        desc: 'Me desempeño en la gestión y administración de la infraestructura tecnológica de Grupo Caremax, distribuidor autorizado de neumáticos Yokohama y centro de servicio automotriz. Mi función principal es garantizar la operatividad, seguridad y optimización continua de las plataformas de software, sistemas de red y herramientas digitales que sustentan las operaciones de la organización.',
        bullets: [
          'Creación, mantenimiento y actualización del sitio web corporativo, incluyendo la administración del hosting, dominio, seguridad, rendimiento y posicionamiento (SEO).',
          'Administración de Windows Server y Active Directory, gestionando usuarios, grupos, permisos y políticas de seguridad a nivel de dominio.',
          'Configuración y administración de equipos de seguridad perimetral Fortinet FortiGate: políticas de firewall, filtrado web y control de accesos.',
          'Administración de plataformas de mensajería y atención al cliente (SAC), con implementación de agentes de IA, flujos automatizados y asignación de conversaciones.',
          'Gestión de migración e integración de datos entre sistemas empresariales (ERP y bases de datos legadas), asegurando la integridad de la información.',
          'Configuración y mantenimiento de la infraestructura de red y seguridad, incluyendo videovigilancia y resolución de incidencias de conectividad.',
          'Administración de Microsoft 365, gestionando cuentas, permisos, políticas de correo y firmas institucionales.',
          'Soporte técnico integral y resolución de incidencias en los distintos sistemas de la empresa.',
        ],
      },
      {
        role: 'Asistente Registro',
        desc: 'Gestión de procesos administrativos y manejo de información mediante EcoHub, una plataforma ERP/CRM basada en Odoo, utilizada para la administración de miembros, datos institucionales y procesos contables.',
        bullets: [
          'Gestión y registro de nuevos miembros, incluyendo la emisión de credenciales, carnets y certificados institucionales.',
          'Actualización y supervisión de la base de datos institucional, garantizando la precisión, integridad y organización de la información.',
          'Control y seguimiento de documentación administrativa, optimizando los procesos internos de registro.',
          'Uso de un sistema ERP para la automatización y control de procesos, fortaleciendo habilidades en manejo de software empresarial.',
        ],
      },
    ],
    education: [
      {
        role: 'Tecnólogo en Desarollo de Software',
        desc: 'Formación técnica en desarrollo de software con enfoque en aplicaciones web y programación orientada a objetos, utilizando tecnologías modernas para la creación de soluciones escalables y centradas en el usuario.',
        bullets: [
          'Desarrollo de aplicaciones con .NET y C#, aplicando el patrón de arquitectura MVC para estructurar soluciones robustas y mantenibles.',
          'Construcción de interfaces web modernas y responsivas utilizando React y Bootstrap.',
          'Control de versiones y gestión de proyectos con Git y GitHub en entornos colaborativos.',
          'Desarrollo de interfaces web utilizando HTML y CSS, aplicando principios de diseño y usabilidad.',
          'Enfoque en aprendizaje continuo y fortalecimiento de habilidades para el desarrollo Full Stack.',
        ],
      },
    ],
    experienceLabels: { experience: 'Experiencia', education: 'Educación' },

    nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'],

    footer: {
      rights: 'Todos los derechos reservados.',
      madeBy: 'Hecho con ❤️ por Anthony Guzman',
    },

    sections: {
      about: { label: '01 / Sobre mí', title: 'Sobre', italic: 'mí' },
      skills: { label: '02 / Stack', title: 'Habilidades', italic: '& Tecnologías', subtitle: 'Un conjunto completo de herramientas para construir aplicaciones modernas, desde el concepto hasta el despliegue.' },
      projects: { label: '03 / Portafolio', title: 'Proyectos', italic: 'Destacados', subtitle: 'Explora los sistemas integrales y mini-apps que he construido utilizando mi stack tecnológico.' },
      contact: { label: '04 / Contacto', title: 'Hablemos', italic: 'de tu proyecto', subtitle: '¿Listo para empezar tu próximo proyecto? Discutamos cómo puedo ayudar a llevar tus ideas a producción.' },
    },

    heroBio: { title: 'Nativo digital construyendo', accent: 'soluciones impactantes.' },

    heroHeader: {
      greeting: 'Hola, soy',
      typewriter: 'Desarrollador Junior & Entusiasta Tech',
      tagline: 'Emprendedor digital y desarrollador apasionado por construir soluciones innovadoras, escalables y con un enfoque impecable en la experiencia de usuario y el rendimiento.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
    },

    contact: {
      formTitle: 'Enviar un mensaje',
      nameLabel: 'Nombre *',
      namePlaceholder: 'Tu nombre',
      emailFieldLabel: 'Email *',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto *',
      subjectPlaceholder: 'Motivo de contacto',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Detalles de tu proyecto...',
      send: 'Enviar Mensaje',
      sent: 'Mensaje Enviado ✓',
      error: 'Error',
      sending: 'Enviando...',
      infoTitle: 'Información',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      connectTitle: 'Conectar',
      availableTitle: 'Disponible para nuevos proyectos',
      availableDesc: 'Asumiendo trabajo de gran impacto.',
    },

    maintenance: {
      title: 'Sitio en mantenimiento',
      message: 'Estoy trabajando en mejoras para el portafolio. Vuelve pronto, estará listo en breve.',
    },

    common: {
      scrollTop: 'Volver arriba',
      toggleTheme: 'Alternar tema',
      switchLanguage: 'Cambiar idioma',
    },
  },

  en: {
    personal: {
      bio: [
        'I\'m <strong>Anthony Guzman</strong>, a software development student at the <strong>Instituto Tecnológico de Las Américas (ITLA)</strong>, in Santo Domingo Norte, Dominican Republic.',
        'I\'m passionate about application development, taking part in the whole process: from database design to building modern, functional interfaces.',
        'I\'ve built several projects using technologies like C#, .NET (MVC), PHP, JavaScript, and Node.js, creating functional, well-structured applications aimed at solving real problems while following good development practices.',
        'I\'ve worked under agile methodologies like <strong>Scrum</strong>, collaborating on teams, organizing tasks, and adapting to dynamic development environments.',
        'I focus on continuous learning with the goal of becoming a Full Stack developer capable of building efficient, scalable, user-centered solutions.',
      ],
    },

    traits: [
      { icon: 'Code', title: 'Clean code', desc: 'Structured, maintainable, and scalable code, applying best practices and standards from the start.' },
      { icon: 'Globe', title: 'Full Stack development', desc: 'Experience building complete applications, from backend to frontend.' },
      { icon: 'Layout', title: 'UI/UX design', desc: 'Building modern, responsive, and accessible interfaces, focused on user experience and visual detail.' },
      { icon: 'Users', title: 'Teamwork', desc: 'Collaborating on projects under agile methodologies like Scrum, with a focus on effective communication and continuous delivery.' },
    ],

    skillCategories: { 'Frontend': 'Frontend', 'Backend': 'Backend', 'Base de datos': 'Database', 'Herramientas': 'Tools' },

    projectTitles: {
      'Task Manager': 'Task Manager',
      'Identificador de Flores - Jardín Botánico RD': 'Flower Identifier - Jardín Botánico RD',
      'FitRoutine': 'FitRoutine',
      'READvolution': 'READvolution',
    },
    projectDescs: {
      'Task Manager': 'Web application built with PHP for task management (CRUD), including authentication, session handling, and a MySQL database. Includes automated end-to-end tests using Selenium WebDriver and Pytest to ensure system quality.',
      'Identificador de Flores - Jardín Botánico RD': 'Flower recognition system based on Azure Computer Vision. Lets users analyze images through a simple, intuitive interface, getting automatic identification and detailed results.',
      'FitRoutine': 'Web application built with ASP.NET Core 8 and SQL Server for managing fitness routines and activities. Lets users log workouts, organize sessions, and track their progress through a modern, responsive, easy-to-use interface.',
      'READvolution': 'Web application built to improve the reading experience, using ASP.NET 8 MVC and SQL Server. Includes full functionality, performance optimization, and bug fixes, offering a smooth, production-ready experience.',
    },
    featuredLabel: 'Featured',

    experience: [
      {
        role: 'IT Manager',
        desc: 'I manage and administer the technology infrastructure of Grupo Caremax, an authorized Yokohama tire distributor and automotive service center. My main role is to ensure the operability, security, and continuous optimization of the software platforms, network systems, and digital tools that support the organization\'s operations.',
        bullets: [
          'Creating, maintaining, and updating the corporate website, including hosting, domain, security, performance, and SEO management.',
          'Administering Windows Server and Active Directory, managing users, groups, permissions, and domain-level security policies.',
          'Configuring and administering Fortinet FortiGate perimeter security appliances: firewall policies, web filtering, and access control.',
          'Administering messaging and customer service (SAC) platforms, implementing AI agents, automated flows, and conversation routing.',
          'Managing data migration and integration between enterprise systems (ERP and legacy databases), ensuring data integrity.',
          'Configuring and maintaining network and security infrastructure, including video surveillance and connectivity issue resolution.',
          'Administering Microsoft 365, managing accounts, permissions, mail policies, and institutional signatures.',
          'Providing comprehensive technical support and troubleshooting across the company\'s various systems.',
        ],
      },
      {
        role: 'Registration Assistant',
        desc: 'Managed administrative processes and information handling through EcoHub, an Odoo-based ERP/CRM platform used for member management, institutional data, and accounting processes.',
        bullets: [
          'Managed and registered new members, including issuing credentials, ID cards, and institutional certificates.',
          'Updated and oversaw the institutional database, ensuring the accuracy, integrity, and organization of information.',
          'Tracked and followed up on administrative documentation, streamlining internal registration processes.',
          'Used an ERP system to automate and control processes, strengthening enterprise software management skills.',
        ],
      },
    ],
    education: [
      {
        role: 'Software Development Technologist',
        desc: 'Technical training in software development focused on web applications and object-oriented programming, using modern technologies to build scalable, user-centered solutions.',
        bullets: [
          'Built applications with .NET and C#, applying the MVC architecture pattern to structure robust, maintainable solutions.',
          'Built modern, responsive web interfaces using React and Bootstrap.',
          'Version control and project management with Git and GitHub in collaborative environments.',
          'Built web interfaces using HTML and CSS, applying design and usability principles.',
          'Focused on continuous learning and strengthening Full Stack development skills.',
        ],
      },
    ],
    experienceLabels: { experience: 'Experience', education: 'Education' },

    nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],

    footer: {
      rights: 'All rights reserved.',
      madeBy: 'Made with ❤️ by Anthony Guzman',
    },

    sections: {
      about: { label: '01 / About me', title: 'About', italic: 'me' },
      skills: { label: '02 / Stack', title: 'Skills', italic: '& Technologies', subtitle: 'A complete set of tools for building modern applications, from concept to deployment.' },
      projects: { label: '03 / Portfolio', title: 'Featured', italic: 'Projects', subtitle: 'Explore the full systems and mini-apps I\'ve built using my tech stack.' },
      contact: { label: '04 / Contact', title: 'Let\'s talk', italic: 'about your project', subtitle: 'Ready to start your next project? Let\'s discuss how I can help bring your ideas to production.' },
    },

    heroBio: { title: 'Digital native building', accent: 'impactful solutions.' },

    heroHeader: {
      greeting: "Hi, I'm",
      typewriter: 'Junior Developer & Tech Enthusiast',
      tagline: 'Digital entrepreneur and developer passionate about building innovative, scalable solutions with an impeccable focus on user experience and performance.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },

    contact: {
      formTitle: 'Send a message',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      emailFieldLabel: 'Email *',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject *',
      subjectPlaceholder: 'Reason for contact',
      messageLabel: 'Message *',
      messagePlaceholder: 'Project details...',
      send: 'Send Message',
      sent: 'Message Sent ✓',
      error: 'Error',
      sending: 'Sending...',
      infoTitle: 'Information',
      emailLabel: 'Email',
      locationLabel: 'Location',
      connectTitle: 'Connect',
      availableTitle: 'Available for new projects',
      availableDesc: 'Taking on high-impact work.',
    },

    maintenance: {
      title: 'Site under maintenance',
      message: 'I\'m working on improvements to the portfolio. Check back soon, it\'ll be ready shortly.',
    },

    common: {
      scrollTop: 'Back to top',
      toggleTheme: 'Toggle theme',
      switchLanguage: 'Switch language',
    },
  },
}
