// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // '/' muestra Español y '/en' muestra Inglés
    },
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

