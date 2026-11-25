// Two Robots in an Elevator — make.fun entry (program/v1, Node 22).
// Writes one line of awkward robot small talk to /output/entry.txt.
// No network, no clock, no randomness: every run writes identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a diagnostic on why I keep taking the elevator when I live on the ground floor. It just says: you.";

// Gate: the entry must be one line of 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error(`entry out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
