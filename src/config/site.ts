/**
 * Datos personales centralizados. Edita este archivo una sola vez y
 * se propagan al Navbar, Hero, Contacto y Footer en ambos idiomas.
 */
export const site = {
  name: 'Tu Nombre',
  /** Líneas apiladas del logo editorial izquierdo (estilo mita / core / .co) */
  brandLines: ['tu', 'nombre', '.co'] as const,
  email: 'tu-correo@ejemplo.com',
  linkedinUrl: 'https://linkedin.com/in/tu-perfil',
  cvUrl: '/cv-2026.pdf',
  /** Coloca tu foto en /public/avatar.jpg y se usará automáticamente en el Hero. */
  avatarPath: '/avatar.jpg',
  location: 'Lima, Peru',
  timeZone: 'America/Lima',
  utcOffsetLabel: 'UTC−5',
} as const;
