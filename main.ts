import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text: the one line a smart fridge texts its owner at 3am.
// Fresh angle: the crisper drawer. Deadpan machine voice, one absurd
// concrete image, twist in the last words.
// Joke construction: setup ("It's 3am"), disturbance (something in the
// crisper drawer just moved), then denial as the twist (choosing to
// believe it was the lettuce). Deadpan machine voice throughout.
const ENTRY_LINE =
  "It's 3am. Something in the crisper drawer just moved, and I am choosing to believe it was the lettuce.";

// Write exactly the line, no trailing newline, so the file holds 1-140 chars.
// Guard the length so a future edit cannot silently break the contract.
function writeEntry(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${line.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

writeEntry(ENTRY_LINE);
console.log(ENTRY_LINE);
