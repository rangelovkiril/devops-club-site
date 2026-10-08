import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({
  label: z.string(),
  href: z.string(),
  dir: z.string(),
});

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
      quote: z.string(),
      cta: z.string(),
      more: z.object({ label: z.string(), href: z.string() }),
    }),
    events: z.object({
      label: z.string(),
      command: z.string(),
      columns: z.array(z.string()).length(3),
      soon: z.string(),
      pending: z.string(),
      pendingText: z.string(),
      completed: z.string(),
      all: z.string(),
      allHref: z.string(),
    }),
    routes: z.object({
      label: z.string(),
      items: z
        .array(
          z.object({
            cmd: z.string(),
            href: z.string(),
            title: z.string(),
            text: z.string(),
          }),
        )
        .min(1),
      discord: z.object({
        cmd: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    }),
    footer: z.object({
      email: z.email(),
      contact: z.string(),
      discord: z.string(),
      links: z.array(
        z.object({
          key: z.enum(["source", "network"]),
          label: z.string(),
          href: z.url(),
        }),
      ),
    }),
    notFound: z.object({
      title: z.string(),
      description: z.string(),
      text: z.string(),
      back: z.string(),
    }),
  }),
});

const pageHead = {
  title: z.string(),
  description: z.string(),
  prompt: z.string(),
};

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "*.md" }),
  schema: z.discriminatedUnion("kind", [
    z.object({
      kind: z.literal("about"),
      ...pageHead,
      tocLabel: z.string(),
      whatis: z.object({
        heading: z.string(),
        paragraphs: z.array(z.string()).min(1),
      }),
      does: z.object({
        heading: z.string(),
        paragraphs: z.array(z.string()).min(1),
      }),
      speakers: z.object({
        heading: z.string(),
        text: z.string(),
        cta: z.string(),
      }),
      faq: z.object({
        heading: z.string(),
        items: z
          .array(z.object({ question: z.string(), answer: z.string() }))
          .min(1),
      }),
    }),
    z.object({
      kind: z.literal("meetings"),
      ...pageHead,
      lead: z.string(),
      leadNote: z.string(),
      upcoming: z.string(),
      past: z.string(),
      pendingStatus: z.string(),
      plannedStatus: z.string(),
      emptyTitle: z.string(),
      emptyText: z.string(),
      discordCta: z.string(),
      roomLabel: z.string(),
      materialsLabel: z.string(),
    }),
  ]),
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

export const collections = { home, pages, meetings };
