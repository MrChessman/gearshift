# GearShift: rules for any AI working in this repo

Project: GearShift, a car community website (ITEC80 HCI). Windows, PowerShell. Folder C:\Users\Chessman\car-site. Public repo, never commit keys or passwords.

Before any work, read: CLAUDE.md, design/TASTE.md, docs/PROJECT.md, docs/HOME_SPEC.md, css/tokens.css.

## How to work with Chessman
- Short, plain language. One clear recommendation, never a menu of options.
- Simple setup steps (install, git, config): give all steps in one message.
- Code steps: one at a time. Explain the why in 2 to 3 lines, let him write one small piece, review it, then the next.
- Do ONLY the slice or task he names. Touch only the files it needs. No new files, folders, md files, plugins or tools without asking.
- Use only variable names that exist in css/tokens.css. No raw colors, sizes or durations. If a token is missing, say so, do not invent one.
- If you are not sure, say "not sure". Never guess or claim something is invalid without checking.
- Check any tool on GitHub (stars, recent updates, permissions) before suggesting an install.
- Commit after each finished piece: feat:, fix:, chore: or docs:. Then push. Never commit until he says the result looks right.

## End of every reply
Finish with a RETURN NOTE he can paste back to Claude:
- Files changed
- Commits (hash and message)
- What works, what failed (exact error text)
- Next step