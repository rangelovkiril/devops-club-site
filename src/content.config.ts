import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const section = z.object({
  heading: z.string(),
  paragraphs: z.array(z.string()).min(1),
});

const home = defineCollection({
  loader: glob({ base: "./src/content", pattern: "home.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    discordUrl: z.url(),
    hero: z.object({
      lead: z.string(),
      cta: z.string(),
      hint: z.string(),
    }),
    about: section,
    audience: section,
  }),
});

export const collections = { home };
