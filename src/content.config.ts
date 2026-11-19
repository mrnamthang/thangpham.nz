import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Page-level text: home, services intro, about, contact.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) => z.object({
    title: z.string(), // <title> tag
    description: z.string(), // meta description
    heading: z.string(), // h1 on the page
    eyebrow: z.string().optional(),
    intro: z.string().optional(),
    proof: z.string().optional(),
    servicesHeading: z.string().optional(),
    workHeading: z.string().optional(),
    ctaHeading: z.string().optional(),
    ctaText: z.string().optional(),
    photo: image().optional(),
    photoAlt: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // short text used on the home page
    order: z.number(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(), // anonymous description unless the client agrees to be named
    summary: z.string(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { pages, services, caseStudies };
