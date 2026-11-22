# GearShift design rules (read before any UI work)

Keep from Figma: maroon header and surfaces, gray page, white card borders, Anton headings, bold pill chips.
Fonts: only two. Anton for headings, Carlito for everything else.

## Fix while building (these beat the Figma)
- Bottom nav: icon AND visible text label. Current page has a clear active state (full white or accent, not faded).
- Chips: real buttons, one selected state (filled), visible focus, aria-pressed.
- Heart: real button with aria-pressed, filled when on. Never color alone.
- Forms: label above the field, never placeholder as label. Required fields marked. Errors name the field and the reason.
- Primary buttons use --color-action. Gray buttons are only for disabled.
- Text on any surface must have readable contrast. No small gray text under 14px. Body text at least --text-base.
- Cards: whole card is one clear target to the build, 44px minimum for buttons.
- Do not collect Age. Do not add features that are not in docs/PROJECT.md.
- Motion is part of the premium feel: load reveals, hover and press feedback, smooth selected states, a small pop on the heart. Use --dur-fast and --dur-base (add a slower token in tokens.css if needed), animate only transform and opacity, respect prefers-reduced-motion, never hide content or delay a task. Hover and focus may also transition background-color and border-color with --dur-fast.

## Layout
- Mobile first at 390px. Must also look right at 1280px: centered container with a max-width, cards stay 2 columns.