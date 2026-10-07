import { type CollectionEntry, getCollection } from "astro:content";
import { getAbout } from "./content";

export type Meeting = CollectionEntry<"meetings">;

const byDate = (a: Meeting, b: Meeting) =>
  a.data.date.getTime() - b.data.date.getTime();

/** `planned` по дата нагоре, `past` по дата надолу. */
export async function getMeetings() {
  const all = await getCollection("meetings");

  const topics = new Set((await getAbout()).topics.items.map((t) => t.id));
  for (const meeting of all) {
    const { area } = meeting.data;
    if (area && !topics.has(area)) {
      throw new Error(
        `meetings/${meeting.id}: area "${area}" is not a topic id in pages/about.md`,
      );
    }
  }

  const planned = all.filter((m) => m.data.status === "planned").sort(byDate);
  const past = all
    .filter((m) => m.data.status === "past")
    .sort(byDate)
    .reverse();
  return { planned, past };
}

/** 27.05.2026, сглобено от ISO низ. Intl с bg-BG би добавил « г.». */
export function formatDate(date: Date) {
  const [year, month, day] = date.toISOString().slice(0, 10).split("-");
  return `${day}.${month}.${year}`;
}

/** `/meetings#<id>`: котвата е id-то на записа, не се пише във frontmatter. */
export const meetingHref = (meeting: Meeting) => `/meetings#${meeting.id}`;
