import { type CollectionEntry, getCollection } from "astro:content";

export type Meeting = CollectionEntry<"meetings">;

const byDate = (a: Meeting, b: Meeting) =>
  a.data.date.getTime() - b.data.date.getTime();

/** `planned` по дата нагоре, `past` по дата надолу. */
export async function getMeetings() {
  const all = await getCollection("meetings");
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
