// The Postmortem That Made Us Laugh — entry program.
// Writes one short account (two sentences, 164 characters) of an AI coding
// agent misunderstanding its user and wrecking the code to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const ENTRY =
  "I told the agent to fix the typo in the welcome email. It 'fixed' it by rewriting the mailer, and 40,000 customers got an email addressed to 'Dear [object Object]'.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
