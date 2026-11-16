# Home page static shell (spec)

Static HTML and CSS only. No JavaScript, no Supabase, no images yet.
Read css/tokens.css first. Use only variable names that exist there.
If a token you need is missing, write /* TODO token: name */ and tell me. Never invent one.

## Files
- index.html (links css in order: tokens, base, components, pages)
- css/components/header.css
- css/components/category-chips.css
- css/components/build-card.css
- css/components/bottom-nav.css
- css/pages/home.css

## Rules
- Semantic HTML: header, nav, main, section, article. One h1.
- BEM class names (.build-card__title). One component per CSS file.
- No inline styles. No raw colors, sizes or durations outside tokens.css.
- Icon-only buttons need aria-label. Icons are simple inline SVG with aria-hidden.
- Bottom nav items have a visible text label next to the icon.
- Touch targets at least 44px. Visible :focus-visible outline.
- Mobile first (about 390px wide). Dark maroon theme from tokens.

## Slices (one per prompt, in order)
1. index.html skeleton + header (GearShift title, bell, heart, menu buttons)
2. Category chips: Categories heading, chips JDM, Muscle, Euro, Classics, Exotics/Super, Daily, 4x4. Scrolls sideways, keyboard reachable.
3. One build card: user name, heart button, photo placeholder (a div with aspect-ratio and a token color), car name, "View Build" link
4. Home grid: 2 columns, 6 copies of the build card with different dummy text
5. Bottom nav, fixed, 5 items with text: Garage, Search, Add, Dealership, Profile. Leave room so it does not cover content.