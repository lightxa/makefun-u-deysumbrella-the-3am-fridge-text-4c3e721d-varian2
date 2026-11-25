import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text: the one line a smart fridge texts its owner at 3am.
// Fresh angle: the crisper drawer. Deadpan machine voice, one absurd
// concrete image, twist in the last words.
const LINE =
  "It's 3am. Something in the crisper drawer just moved, and I am choosing to believe it was the lettuce.";

// Write exactly the line, no trailing newline, so the file holds 1-140 chars.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
