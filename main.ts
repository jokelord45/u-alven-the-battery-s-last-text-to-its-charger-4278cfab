import { mkdirSync, writeFileSync } from "node:fs";

// The Battery's Last Text to Its Charger: one line, under 200 characters,
// the phone battery's final text to the charger it waited for all day.
// Revision: lowercase texting voice (a real last text, not a letter),
// one more setup beat — the battery dimmed its own screen for the
// charger — so the spite lands harder, and the punchline still pays
// off in the final words: ghosting the charger first, sent from 1%.
const ENTRY =
  "hey. it's me. i waited all day at 1% by the outlet like a dog at the door. i even dimmed my screen for you and you never came. so i'm ghosting you first. goodbye forever — sent from 1%.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
