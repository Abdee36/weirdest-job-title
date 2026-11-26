// Weirdest Job Title: Blind Judge Showdown
// Writes one job title (1-60 chars, nothing else) to /output/entry.txt.
// Picked title: a real-sounding job structure ("Funeral Director")
// with one absurd, specific twist (underwater, for goldfish) —
// instantly pictureable, funny on first read, and unlike a generic oddity.
import { mkdirSync, writeFileSync } from "node:fs";

const title = "Underwater Funeral Director for Goldfish";

// Gate guard: the sealed scorer only accepts 1-60 chars, non-blank.
if (title.length < 1 || title.length > 60 || !title.trim()) {
  throw new Error(`title must be 1-60 chars, got ${title.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
