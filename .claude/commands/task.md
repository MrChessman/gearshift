---
description: Run one scoped GearShift task with the project rules
---
Read CLAUDE.md, design/TASTE.md, css/tokens.css and docs/PROJECT.md first.

Task: $ARGUMENTS

Rules:
- Do ONLY this task. Touch only the files it needs.
- Read a file before editing it. Edit only the lines needed, never rewrite a whole file.
- Use only variable names that exist in css/tokens.css. If a token is missing, say so, do not invent one.
- If design/TASTE.md and the Figma conflict, TASTE.md wins.
- If you are not sure, say "not sure". Do not guess.
- Do not commit.
- When done, follow "After every finished task" in CLAUDE.md (update Current status and add one Log line, hash written as pending).
- Then list the files you changed, one line each on what changed, and wait.