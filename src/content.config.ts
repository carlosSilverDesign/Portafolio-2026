import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // Metadatos obligatorios para listado y navegación
    title: z.string(),
    headline: z.string(), // Ej: "Maximizing Search Efficiency Through Filter Validation"
    order: z.number().default(0), // Para ordenar en la Home (1, 2, 3...)

    // Metadatos opcionales de cabecera
    category: z.string().optional(), // Ej: "Two-sided marketplace"
    tags: z.array(z.string()).default([]), // Ej: ["UX Design", "Figma", "Design Systems"]
    heroImage: z.string().optional(),

    // Ficha técnica (Project, Timeline, Role)
    meta: z.object({
      client: z.string().optional(),
      timeline: z.string().optional(),
      role: z.string().optional(),
    }).optional(),

    // Secciones de contexto inicial
    overview: z.string().optional(),
    overviewParagraphs: z.array(z.string()).optional(),
    toolsAndMethods: z.array(z.string()).optional(),
    team: z.array(z.string()).optional(),

    // Secciones 'In this case' (Todas opcionales para ocultarlas a demanda)
    inThisCase: z.object({
      showNav: z.boolean().default(true), // Permite apagar el menú de anclas si el caso es corto

      // 1. The Problem
      problem: z.string().optional(),
      problemHighlight: z.string().optional(),
      problemClosing: z.string().optional(),

      // 2. My Approach
      approachTitle: z.string().optional(),
      approach: z.string().optional(),
      povs: z.array(z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        listTitle: z.string().optional(),
        items: z.array(z.string()),
      })).optional(),

      // 3. Core Challenge
      challengeTitle: z.string().optional(),
      challengeHighlight: z.string().optional(),
      coreChallenge: z.string().optional(),
      options: z.array(z.object({
        title: z.string(),
        recommended: z.boolean().optional(),
        items: z.array(z.string()),
      })).optional(),
      optionsCaption: z.string().optional(),
      findings: z.object({
        title: z.string(),
        items: z.array(z.string()),
        note: z.string().optional(),
      }).optional(),
      retrospective: z.object({
        title: z.string(),
        text: z.string(),
      }).optional(),

      // 4. Scalable Design System
      designSystem: z.string().optional(),
      systemTokens: z.object({
        title: z.string(),
        items: z.array(z.string()),
      }).optional(),
      systemBody: z.string().optional(),
      systemImpact: z.object({
        title: z.string(),
        text: z.string(),
      }).optional(),

      // 5. Outcome
      outcome: z.string().optional(),
      deliverables: z.array(z.string()).optional(),
      deliveredLabel: z.string().optional(),
    }).optional(),

    // Testimonio / Voices from the project
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      title: z.string(),
      date: z.string().optional(),
      avatar: z.string().optional(),
    }).optional(),

    // Proyecto siguiente (para navegación continua al pie)
    nextProject: z.object({
      slug: z.string(),
      title: z.string(),
      category: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { projects };