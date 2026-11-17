# Car website (ITEC80 HCI project)
- Windows. Project folder: C:\Users\Chessman\car-site. Use relative paths only.
- Python: ~/AppData/Local/Programs/Python/Python313/python.exe
- Read docs/PROJECT.md first.
- Plain HTML, CSS, JavaScript first. Keep files small and separate.
- Follow the HCI checklist in docs/PROJECT.md. No generic AI look: no default purple gradients, no stock card grids.
- Every animation must give feedback or guide attention, respect prefers-reduced-motion, and never hide content.
- Every form: labels above fields, required fields marked, errors name the field and the reason.
- Architecture: js/core (router, supabase client, state) -> js/services (only code that talks to Supabase) -> js/components (data to DOM, no fetching) -> js/pages (compose components, call services). Dependencies point one way only.
- One responsibility per file, small files, named exports, no globals. Hash router (#/home).
- Services return { data, error }. UI shows an error message that names what failed.
- CSS order: tokens.css, base.css, components/*.css, pages/*.css. BEM class names. No raw colors, sizes, or durations outside tokens.css.
- Teaching mode: explain the why in 2-3 lines, let Chessman write one small piece per step, then review it.
- Design: read design/TASTE.md before any UI work.

## Behavior
- If unsure, say "not sure". Never guess. If a request has more than one meaning, ask before picking.
- Use only CSS variable names that exist in css/tokens.css. Never invent one.
- In plan mode, or when told not to edit, do not write or change any file.
- Do only what was asked. No extra features, no abstractions for single-use code.
- Change only what the request needs. Match the existing style. Mention unrelated problems, don't fix them.
- Remove only the leftovers your own change created.
- For multi-step work, state a short plan with a check for each step, then verify each one.
- Read design/TASTE.md before any UI work. Where it conflicts with the Figma, TASTE.md wins.