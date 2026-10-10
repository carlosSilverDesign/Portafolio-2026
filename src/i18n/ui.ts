export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'es';

export const ui = {
  es: {
    // Header & Meta
    'site.title': 'Portafolio de Diseño y Arquitectura de Producto Digital',
    'status.available': 'Disponible para nuevos proyectos',
    'status.location': 'Remoto / Lima, Perú',
    
    // Home Sections
    'section.projects': 'Proyectos Seleccionados',
    'section.about': 'Enfoque & Metodología',
    'section.experience': 'Experiencia',
    'section.contact': 'Contacto',

    // Case Study - Overview & Data
    'case.project': 'Proyecto',
    'case.timeline': 'Duración',
    'case.role': 'Rol desempeñado',
    'case.overview': 'Visión General',
    'case.tools': 'Herramientas & Métodos',
    'case.team': 'Equipo de Trabajo',

    // Case Study - Navigation & Sections ('In this case')
    'case.nav.title': 'En este caso:',
    'case.nav.problem': 'El Problema',
    'case.nav.approach': 'Mi Enfoque',
    'case.nav.challenge': 'Reto Principal',
    'case.nav.system': 'Sistema de Diseño Escalable',
    'case.nav.outcome': 'Resultados',
    'case.nav.voices': 'Testimonios del Proyecto',

    // Global Footer
    'footer.resume': 'Descargar CV (Resume)',
    'footer.copyEmail': 'Copiar Correo',
    'footer.emailCopied': '¡Copiado!',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.nextProject': 'Siguiente Proyecto',
  },
  en: {
    // Header & Meta
    'site.title': 'Digital Product Design & Architecture Portfolio',
    'status.available': 'Available for new projects',
    'status.location': 'Remote / Lima, Peru',

    // Home Sections
    'section.projects': 'Selected Projects',
    'section.about': 'Approach & Principles',
    'section.experience': 'Experience',
    'section.contact': 'Get in Touch',

    // Case Study - Overview & Data
    'case.project': 'Project',
    'case.timeline': 'Timeline',
    'case.role': 'Role',
    'case.overview': 'Overview',
    'case.tools': 'Tools & Methods',
    'case.team': 'Team',

    // Case Study - Navigation & Sections ('In this case')
    'case.nav.title': 'In this case:',
    'case.nav.problem': 'The Problem',
    'case.nav.approach': 'My Approach',
    'case.nav.challenge': 'Core Challenge',
    'case.nav.system': 'Scalable Design System',
    'case.nav.outcome': 'Outcome',
    'case.nav.voices': 'Voices from the project',

    // Global Footer
    'footer.resume': 'Download Resume',
    'footer.copyEmail': 'Copy Email',
    'footer.emailCopied': 'Copied!',
    'footer.rights': 'All rights reserved.',
    'footer.nextProject': "What's next?",
  },
} as const;