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
    topics: section.extend({ areas: z.array(z.string()).min(1) }),
    meetingsTeaser: z.object({
      heading: z.string(),
      text: z.string(),
      link: z.string(),
    }),
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
    maintainer: section,
    join: z.object({
      heading: z.string(),
      text: z.string(),
      cta: z.string(),
    }),
    nav: z.object({
      label: z.string(),
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .length(2),
    }),
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
    footer: z.object({
      contactLabel: z.string(),
      email: z.email(),
      links: z.array(z.object({ label: z.string(), href: z.url() })),
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
