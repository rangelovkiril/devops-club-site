import { getEntry } from "astro:content";

export async function getHome() {
  const home = await getEntry("home", "home");
  if (!home) throw new Error("src/content/home.md is missing");
  return home.data;
}
