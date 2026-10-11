export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'es';

/* -------------------------------------------------------------------------- */
/*  ES (idioma por defecto): define el contrato de claves                     */
/* -------------------------------------------------------------------------- */
const es = {
  // Meta
  'meta.title': 'Tu Nombre — Product Design & Digital Architecture',
  'meta.description': 'Diseño de producto y arquitectura frontend: del alcance del MVP al lanzamiento en producción. Astro, TypeScript, Design Systems y Core Web Vitals.',

  // Navbar
  'nav.projects': 'Proyectos',
  'nav.services': 'Servicios',
  'nav.process': 'Proceso',
  'nav.contact': 'Contacto',
  'nav.cta': 'Contactar',
  'nav.sections': 'Secciones de la página',
  'nav.backToTop': 'Volver al inicio',
  'nav.available': 'Disponible para Q4',
  'nav.copyEmail': 'Copiar Email',
  'nav.emailCopied': '¡Copiado!',

  // Hero
  'hero.title.line1': 'Diseño de Producto',
  'hero.title.line2': '& Frontend',
  'hero.lead': 'Diseño productos como lo haría un dueño: primero el alcance, primero el MVP, primero el lanzamiento.',
  'hero.copy': 'Product designer y arquitecto frontend con más de 10 años lanzando productos digitales. Diseño en Figma y entrego en código, así que lo que se aprueba es exactamente lo que sale a producción: recortar el alcance, lanzar el MVP, aprender de usuarios reales y luego pulir.',
  'hero.avatarAlt': 'Retrato de Tu Nombre',
  'hero.cta.projects': 'Ver Proyectos',
  'hero.cta.contact': 'Contactar',

  // Numbers
  'numbers.kicker': 'Experiencia',
  'numbers.aria': 'Experiencia en números',
  'numbers.1.value': '10+',
  'numbers.1.label': 'Años en diseño & desarrollo digital',
  'numbers.2.value': '20+',
  'numbers.2.label': 'Productos & MVPs desplegados',
  'numbers.3.value': '1:1',
  'numbers.3.label': 'Alineación de diseño con código en producción',
  'numbers.4.value': '100%',
  'numbers.4.label': 'Foco en conversión & rendimiento',

  // Services
  'services.kicker': 'Servicios',
  'services.title': 'Servicios de Producto',
  'services.1.title': 'Dirección de Producto',
  'services.1.item1': 'Discovery & estrategia de producto',
  'services.1.item2': 'Alcance del MVP: qué sale y qué espera',
  'services.1.item3': 'Arquitectura UX & flujos de usuario',
  'services.1.item4': 'Prioridades, recursos y trade-offs',
  'services.2.title': 'UI/UX & Design Systems',
  'services.2.item1': 'Diseño de producto, UI y UX',
  'services.2.item2': 'Design Systems que escalan',
  'services.2.item3': 'Tokens, componentes y documentación',
  'services.2.item4': 'Prototipos & pruebas de usabilidad',
  'services.3.title': 'Arquitectura & Frontend',
  'services.3.item1': 'Astro, Next.js & TypeScript',
  'services.3.item2': 'Tailwind CSS & componentes accesibles',
  'services.3.item3': 'Integraciones con APIs & CMS',
  'services.3.item4': 'Despliegue & entrega en producción',
  'services.4.title': 'Optimización & Crecimiento',
  'services.4.item1': 'Core Web Vitals: LCP, INP, CLS',
  'services.4.item2': 'Micro-interacciones a 60–120 fps',
  'services.4.item3': 'CRO & experimentos A/B',
  'services.4.item4': 'Iteración con datos de uso real',

  // Projects
  'projects.kicker': 'Proyectos',
  'projects.title': 'Proyectos Seleccionados',
  'projects.newTab': '(se abre en una pestaña nueva)',
  'projects.empty': 'Nuevos casos de estudio en camino.',

  // Process
  'process.kicker': 'Cómo trabajo',
  'process.title': 'Proceso de Trabajo',
  'process.1.title': 'Discovery',
  'process.1.desc': 'Objetivos, audiencia, contexto de negocio, presupuesto y el deadline real. Qué debe demostrar el producto primero, qué puede esperar y dónde se van realmente el tiempo y el dinero.',
  'process.2.title': 'Estructura & Arquitectura',
  'process.2.desc': 'Flujos UX, arquitectura de información, jerarquía de pantallas y estados del producto. En paralelo, la arquitectura técnica: rutas, datos, componentes y límites del frontend.',
  'process.3.title': 'Dirección Visual & Design System',
  'process.3.desc': 'Lenguaje visual, tipografía, motion y patrones de interacción traducidos a tokens y componentes reutilizables que diseño y código comparten 1:1.',
  'process.4.title': 'Construcción en Producción',
  'process.4.desc': 'El diseño convertido en un producto funcional con Astro, TypeScript y Tailwind CSS. El stack sigue al producto, no al revés.',
  'process.5.title': 'Pruebas de Usabilidad & Rendimiento',
  'process.5.desc': 'Usabilidad, accesibilidad, responsive y Core Web Vitals. Casos límite, pulido de contenido y preparación para el lanzamiento antes de publicar.',
  'process.6.title': 'Lanzamiento & Iteración',
  'process.6.desc': 'Despliegue, analítica y configuración de release. Después, iteración sobre lo que los usuarios reales encuentran primero.',

  // Delivery format
  'delivery.kicker': 'Formato de Entrega',
  'delivery.title': 'Formato de Entrega',
  'delivery.1': 'Dirección que hace que el producto sea legible.',
  'delivery.2': 'Un MVP lo bastante pequeño para lanzarlo y probarlo con usuarios reales.',
  'delivery.3': 'Un producto vivo en producción, no olvidado en una carpeta de Figma.',

  // Focus areas
  'focus.kicker': 'Áreas de Enfoque',
  'focus.title': 'Áreas de Enfoque',
  'focus.1': 'SaaS',
  'focus.2': 'Web Apps',
  'focus.3': 'Design Systems',
  'focus.4': 'Micro-frontends',
  'focus.5': 'Dashboards',
  'focus.6': 'MVPs en etapa temprana',
  'focus.7': 'Landing Pages de alta conversión',

  // Manifesto & location
  'manifesto.kicker': 'Manifiesto',
  'manifesto.location': 'Desde Lima, Perú, trabajando en remoto con founders y empresas de todo el mundo.',
  'manifesto.statement': 'Defiendo el MVP por encima del pixel perfecto, porque he pagado el precio de ambos.',
  'manifesto.copy': 'Diez años diseñando y construyendo productos digitales me enseñaron que el error caro casi nunca es un pixel desalineado: es lanzar tarde. Me sumo a equipos como product designer o arquitecto frontend, trabajo codo a codo con founders y developers, o llevo una idea temprana hasta un MVP funcionando en producción.',

  // Contact
  'contact.kicker': 'Contacto',
  'contact.title': 'Contacto',
  'contact.copyEmail': 'Copiar email',
  'contact.emailCopied': 'Email copiado',
  'contact.linkedin': 'LinkedIn',
  'contact.cv': 'Descargar CV',
  'contact.localTime': 'Hora local',

  // Footer & Global
  'footer.tagline': 'Diseño de producto y arquitectura frontend, del alcance al lanzamiento.',
  'footer.resume': 'Descargar CV',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.nextProject': 'Siguiente Proyecto',

  // Case studies
  'case.breadcrumb.home': 'Inicio',
  'case.project': 'Proyecto',
  'case.timeline': 'Duración',
  'case.role': 'Rol',
  'case.overview': 'Overview',
  'case.tools': 'Herramientas & Métodos',
  'case.team': 'Equipo',
  'case.nav.title': 'En este caso:',
  'case.nav.problem': 'El problema',
  'case.nav.approach': 'Mi enfoque',
  'case.nav.challenge': 'Reto principal',
  'case.nav.system': 'Sistema de diseño escalable',
  'case.nav.outcome': 'Resultados',
  'case.nav.voices': 'Testimonios del proyecto',
  'case.deliverables': 'Entregables clave',
  'case.deliveredScreens': 'Pantallas entregadas',
  'case.nextCta': 'Ver el siguiente caso',
  'footer.linkedin': 'Visitar mi LinkedIn',
} as const;

export type UIKey = keyof typeof es;

/* -------------------------------------------------------------------------- */
/*  EN: tipado contra ES → TypeScript avisa si falta o sobra alguna clave     */
/* -------------------------------------------------------------------------- */
const en: Record<UIKey, string> = {
  // Meta
  'meta.title': 'Your Name — Product Design & Digital Architecture',
  'meta.description': 'Product design and frontend architecture: from MVP scope to production launch. Astro, TypeScript, design systems and Core Web Vitals.',

  // Navbar
  'nav.projects': 'Projects',
  'nav.services': 'Services',
  'nav.process': 'How I work',
  'nav.contact': 'Contact',
  'nav.cta': 'Start a project',
  'nav.sections': 'Page sections',
  'nav.backToTop': 'Back to top',
  'nav.available': 'Available for Q4',
  'nav.copyEmail': 'Copy Email',
  'nav.emailCopied': 'Copied!',

  // Hero
  'hero.title.line1': 'Product Design',
  'hero.title.line2': '& Frontend',
  'hero.lead': 'I design products the way an owner does: scope first, MVP first, launch first.',
  'hero.copy': 'Product designer and frontend architect with 10+ years shipping digital products. I design in Figma and deliver in code, so what gets approved is exactly what goes live: cut the scope, ship the MVP, learn from real users, then polish.',
  'hero.avatarAlt': 'Portrait of Your Name',
  'hero.cta.projects': 'View Projects',
  'hero.cta.contact': 'Start a project',

  // Numbers
  'numbers.kicker': 'Experience',
  'numbers.aria': 'Experience in numbers',
  'numbers.1.value': '10+',
  'numbers.1.label': 'Years in digital design & development',
  'numbers.2.value': '20+',
  'numbers.2.label': 'Products & MVPs shipped',
  'numbers.3.value': '1:1',
  'numbers.3.label': 'Design-to-production code alignment',
  'numbers.4.value': '100%',
  'numbers.4.label': 'Focus on conversion & performance',

  // Services
  'services.kicker': 'Services',
  'services.title': 'Product Services',
  'services.1.title': 'Product Direction',
  'services.1.item1': 'Discovery & product strategy',
  'services.1.item2': 'MVP scope: what ships, what waits',
  'services.1.item3': 'UX architecture & user flows',
  'services.1.item4': 'Priorities, resources, trade-offs',
  'services.2.title': 'UI/UX & Design Systems',
  'services.2.item1': 'Product design, UI and UX',
  'services.2.item2': 'Design systems that scale',
  'services.2.item3': 'Tokens, components & documentation',
  'services.2.item4': 'Prototyping & usability testing',
  'services.3.title': 'Architecture & Frontend',
  'services.3.item1': 'Astro, Next.js & TypeScript',
  'services.3.item2': 'Tailwind CSS & accessible components',
  'services.3.item3': 'API & CMS integrations',
  'services.3.item4': 'Deployment & production delivery',
  'services.4.title': 'Optimization & Growth',
  'services.4.item1': 'Core Web Vitals: LCP, INP, CLS',
  'services.4.item2': '60–120 fps micro-interactions',
  'services.4.item3': 'CRO & A/B experiments',
  'services.4.item4': 'Iteration on real usage data',

  // Projects
  'projects.kicker': 'Projects',
  'projects.title': 'Selected Work',
  'projects.newTab': '(opens in a new tab)',
  'projects.empty': 'New case studies on the way.',

  // Process
  'process.kicker': 'How I work',
  'process.title': 'Work Process',
  'process.1.title': 'Discovery',
  'process.1.desc': 'Goals, audience, business context, budget, and the real deadline. What the product must prove first, what can wait, and where the time and money actually go.',
  'process.2.title': 'Structure & Architecture',
  'process.2.desc': 'UX flows, information architecture, screen hierarchy and product states. In parallel, the technical architecture: routes, data, components and frontend boundaries.',
  'process.3.title': 'Visual Direction & Design System',
  'process.3.desc': 'Visual language, typography, motion and interaction patterns translated into tokens and reusable components that design and code share 1:1.',
  'process.4.title': 'Production Build',
  'process.4.desc': 'Designs turned into a working product with Astro, TypeScript and Tailwind CSS. The stack follows the product, not the other way around.',
  'process.5.title': 'Usability & Performance Testing',
  'process.5.desc': 'Usability, accessibility, responsiveness and Core Web Vitals. Edge cases, content polish and launch readiness before release.',
  'process.6.title': 'Launch & Iteration',
  'process.6.desc': 'Deployment, analytics and release setup. Then, iteration on whatever real users hit first.',

  // Delivery format
  'delivery.kicker': 'Delivery Format',
  'delivery.title': 'Delivery Format',
  'delivery.1': 'Direction that makes the product legible.',
  'delivery.2': 'An MVP small enough to launch and test with real users.',
  'delivery.3': 'A product live in production, not forgotten in a Figma folder.',

  // Focus areas
  'focus.kicker': 'Focus Areas',
  'focus.title': 'Focus Areas',
  'focus.1': 'SaaS',
  'focus.2': 'Web Apps',
  'focus.3': 'Design Systems',
  'focus.4': 'Micro-frontends',
  'focus.5': 'Dashboards',
  'focus.6': 'Early-stage MVPs',
  'focus.7': 'High-conversion Landing Pages',

  // Manifesto & location
  'manifesto.kicker': 'Manifesto',
  'manifesto.location': 'Based in Lima, Peru, working remotely with founders and companies worldwide.',
  'manifesto.statement': 'I argue for the MVP over pixel polish, because I have paid for both.',
  'manifesto.copy': 'Ten years designing and building digital products taught me that the expensive mistake is rarely a misaligned pixel: it is launching late. I join teams as a product designer or frontend architect, work side by side with founders and developers, or take an early-stage idea all the way to a working MVP in production.',

  // Contact
  'contact.kicker': 'Contact',
  'contact.title': 'Contact',
  'contact.copyEmail': 'Copy email',
  'contact.emailCopied': 'Email copied',
  'contact.linkedin': 'LinkedIn',
  'contact.cv': 'Download CV',
  'contact.localTime': 'Local time',

  // Footer & Global
  'footer.tagline': 'Product design and frontend architecture, from scope to launch.',
  'footer.resume': 'Download Resume',
  'footer.rights': 'All rights reserved.',
  'footer.nextProject': "What's next?",

  // Case studies
  'case.breadcrumb.home': 'Home',
  'case.project': 'Project',
  'case.timeline': 'Timeline',
  'case.role': 'Role',
  'case.overview': 'Overview',
  'case.tools': 'Tools & Methods',
  'case.team': 'Team',
  'case.nav.title': 'In this case:',
  'case.nav.problem': 'The problem',
  'case.nav.approach': 'My approach',
  'case.nav.challenge': 'Core challenge',
  'case.nav.system': 'Scalable design system',
  'case.nav.outcome': 'Outcome',
  'case.nav.voices': 'Voices from the project',
  'case.deliverables': 'Key deliverables',
  'case.deliveredScreens': 'Delivered screens',
  'case.nextCta': 'Check out the next case',
  'footer.linkedin': 'Visit my LinkedIn',
};

export const ui = { es, en } as const;