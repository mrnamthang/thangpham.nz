import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Page-level text: home, services, case studies index, about, contact, 404.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // <title> tag and og:title
      description: z.string(), // meta description and og:description
      heading: z.string(), // h1 on the page
      intro: z.string().optional(),
      // Home page only
      proof: z.string().optional(),
      who: z.string().optional(),
      workHeading: z.string().optional(),
      exampleHeading: z.string().optional(),
      example: z.string().optional(),
      now: z.string().optional(),
      nowDate: z.string().optional(), // when the "Now" line was written, e.g. "Nov 2026"
      // About page only
      photo: image().optional(),
      photoAlt: z.string().optional(),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(), // client name, shown as a small label on the case study page
    clientType: z.string(), // e.g. "workforce management SaaS, NZ", used in the group heading
    summary: z.string(), // one sentence: what I did
    result: z.string(), // one sentence with a number
    stack: z.string(), // one sentence
    order: z.number(),
  }),
});

export const collections = { pages, services, caseStudies };
