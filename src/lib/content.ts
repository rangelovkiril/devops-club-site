import { getEntry } from "astro:content";

export async function getHome() {
  const home = await getEntry("home", "home");
  if (!home) throw new Error("src/content/home.md is missing");
  return home.data;
}

export async function getAbout() {
  const about = await getEntry("pages", "about");
  if (about?.data.kind !== "about") {
    throw new Error("src/content/pages/about.md is missing");
  }
  return about.data;
}

export async function getMeetingsPage() {
  const page = await getEntry("pages", "meetings");
  if (page?.data.kind !== "meetings") {
    throw new Error("src/content/pages/meetings.md is missing");
  }
  return page.data;
}
