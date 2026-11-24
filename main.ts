// Entry: one-line developer excuse for broken production code.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Deterministic: no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a feature flag that was ON in prod, OFF everywhere tested.
// Twist: it was never a bug in the code — the flag itself was the bug.
const EXCUSE =
  "I didn't deploy a bug \u2014 I deployed a feature flag that was on in " +
  "production and off in every environment we actually tested.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
