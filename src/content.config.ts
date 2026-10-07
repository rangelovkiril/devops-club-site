import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({ label: z.string(), href: z.string() });

const home = defineCollection({
  loader: glob({ base: "./src/content", pattern: "home.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    discordUrl: z.url(),
    nav: z.object({
      label: z.string(),
      menuLabel: z.string(),
      discord: z.string(),
      links: z.array(link).length(3),
    }),
    hero: z.object({
      prompt: z.string(),
      lead: z.string(),
      cta: z.string(),
      hint: z.string(),
    }),
    events: z.object({
      label: z.string(),
      command: z.string(),
      columns: z.array(z.string()).length(3),
      soon: z.string(),
      pending: z.string(),
      pendingText: z.string(),
      completed: z.string(),
    }),
    routes: z.object({
      label: z.string(),
      items: z
        .array(
          z.object({ href: z.string(), title: z.string(), text: z.string() }),
        )
        .min(1),
    }),
    footer: z.object({
      tagline: z.string(),
      email: z.email(),
      discord: z.string(),
      links: z.array(
        z.object({ key: z.string(), label: z.string(), href: z.url() }),
      ),
    }),
    // Остават до пренасянето на /meetings и 404.
    meetings: z.object({
      title: z.string(),
      description: z.string(),
      heading: z.string(),
      paragraphs: z.array(z.string()).min(1),
      upcomingHeading: z.string(),
      emptyTitle: z.string(),
      emptyText: z.string(),
      roomLabel: z.string(),
      materialsLabel: z.string(),
    }),
    past: z.object({ heading: z.string() }),
    notFound: z.object({
      title: z.string(),
      text: z.string(),
      back: z.string(),
      terminal: z.object({
        label: z.string(),
        output: z.string(),
        log: z.string(),
      }),
    }),
  }),
});

const meetings = defineCollection({
  loader: glob({ base: "./src/content/meetings", pattern: "**/*.md" }),
  schema: z.object({
    date: z.coerce.date(),
    time: z.string().optional(),
    title: z.string(),
    topic: z.string(),
    speaker: z.string(),
    room: z.string().optional(),
    status: z.enum(["past", "planned"]),
    materials: z.url().optional(),
  }),
});

export const collections = { home, meetings };
