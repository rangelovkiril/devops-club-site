import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
  }),
});

export const collections = { home };
