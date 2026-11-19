# GearShift - project brief
Course: ITEC80 HCI, Lecture Activity 4 (System Design Draft Presentation, 50 pts).
Rubric: System Design 15 | System Overview 10 | Functions and Features 15 | Demo and Presentation 5 | Understanding and Q&A 5.
Team: Drixen Paul R. Calzado (Figma design) and Carl Joshua S. Cadungog (build), BSCS-CS4A.
Repo: https://github.com/MrChessman/gearshift (public: never commit keys or passwords)

## What it is
A showcase-first car community. Users post their builds, browse by category and brand, favorite builds, and can mark a build "For sale".
The friend's Figma (13 screens) is the starting point. We improve it where the logic or HCI is weak.

## Stack (must really work, may be deployed)
- Plain HTML, CSS, JavaScript (ES modules). No build step.
- Supabase: Auth, Postgres, Storage. Row Level Security on every table.
- Free static host. Supabase free plan: 500 MB database, 1 GB storage, pauses after 7 days of no activity (wake it before the presentation).

## Screens (from the final Figma) and routes
- Login [#/login]: logo, email, password with show/hide eye, "Stay signed in", Forgot password link, Google and Facebook buttons, LOGIN, Create Account link. Car photo on the right half.
- Create Account [#/signup]: first name, last name, age, username, email, password, confirm password, Sign Up, "Already have account? Login here."
- Forgot Password [#/forgot]: panel with X. New password*, re-enter*, email, Reset Password.
- Check Your Email [#/reset-sent]: shows the email, Resend Email, Return to Login Page.
- Home [#/home]: header (GearShift, bell, heart, menu), Categories chips (JDM, Muscle, Euro, Classics, Exotics/Super, Daily, 4x4), 2-column cards (user, heart, photo, car name, View Build), bottom nav of 5 icons (garage/home, search, add, dealership, profile).
- Post a build [#/post]: Upload car photo, Car name/model, Mods Installed, SHARE.
- Build Posted [#/posted]: check mark, "Your <car> is now live on feed", VIEW POST, Return to main garage.
- Profile [#/profile]: "Your Post" list (View details), "Back at it, User_01!", avatar, username with edit pencil, Car posted count, Car purchased count.
- Favorites [#/favorites]: "Let me see your taste in cars!", saved build cards.
- Notifications [#/notifications]: filters All / Likes / Purchases / Dealerships with counts, Today and Earlier groups, Mark all as read, Unread count, Upcoming card (test drive).
- Settings [#/settings]: profile card (Edit Profile, Logout, version), Account (Edit profile, Change password), Your Garage (My post, Favorites), Notification toggles (Likes on my post, Purchases and orders, Dealership replies), Support (Help center, About Us).
- About Us [#/about]: the two team members.
- Car Dealership [#/dealership]: brand logo tiles (Toyota, Lamborghini, Ferrari, Nissan so far).
Still missing in the Figma: Build detail page, brand page, search page.

## Known problems in the Figma to fix
- Icon-only bottom nav: add text labels.
- View Build leads nowhere: add a Build detail page.
- Post form too thin: add category, brand, multiple photos, For sale switch, required marks, error states.
- Login button looks disabled (gray); placeholder text is low contrast.
- Forgot Password asks for a new password before the email is verified. Fix: email only, then a link by email, then a Set new password page.
- Brand tiles have no text names (add them for accessibility).
- No empty states anywhere (no builds, no favorites, no notifications).
- Age field on sign up: keep only if needed (privacy).
- Purchases, dealership replies and test drives appear in Notifications and Settings but have no flow behind them.

## Decisions
- Showcase first. "For sale" is an optional switch on a build (price, location, message owner).
- Categories: the Figma chips are final. Brands: all brands that fit those categories.
- Trending: computed from our own data (most liked builds this week).
- Listings are posts saved in Supabase. No scraping other websites.
- Proposed, confirm with the friend: purchases, dealership inquiries and test drives are simulated (a record plus a notification, no real payment). Email login first; Google later if time allows; skip Facebook.
- Look: dark maroon (#2B0808) background, light gray panels, white text, cards with a white border. Fonts: Anton (headings), Carlito (logo and body). All values live in css/tokens.css.

## Current status
- Home shell done and polished: header, category chips, build cards with real photos (3:2), 2-column grid in a centered container, bottom nav with labels. Fonts: Anton (headings, chips, card titles, weight 400), Carlito (body, italic logo). Motion: staggered card reveal, hover and press feedback, reduced motion respected. Chips support independent client-side toggles and hearts support client-side save toggles with `aria-pressed`.
- Tooling: free OpenCode first. When its quota runs out, the fallback is Claude Code running Qwen3.8 27B (qwen3.8:27b; glm-4.7-flash:q8_0 is the faster alternative) from a Kaggle notebook through an ngrok tunnel: run the notebook cell, wait for "OLLAMA IS LIVE", then run `claude` in this folder. OmniRoute is no longer used. The Copilot assistant still does direct implementation and review. OpenCode has frontend-design and Vercel web-design-guidelines installed; HCI lessons were converted to Markdown outside the repo. Context7 MCP is installed in Claude Code for current library docs.
- Open items: Login shell is committed (f621ee4) and verified, but its hero media area is an empty fallback (no video or 3D hero chosen yet). Car photos are Pinterest placeholders with unknown source (replace or credit before a public deploy); bottom nav active item does not switch (needs router); favicon missing.
- Next: choose a licensed car video for the Login hero, then add it with a poster fallback, muted inline playback, and reduced-motion support. Review at 390px and 1280px, then commit.

## Log
- 2026-11-17 | header, chips, card, grid | 272fb99, 62fac39
- 2026-11-17 | design rules, frontend-design skill, agents pointer | 40d2992, 7a982e5, 765188a
- 2026-11-17 | bottom nav | 716dcb9
- 2026-11-17 | fonts and card polish, /task command | 389e036, 51fa3b8
- 2026-11-17 | real car photos (placeholders) | ff5bc88
- 2026-11-17 | card and button motion | e6c8581
- 2026-11-17 | category heading text selection disabled | 12d9b68 | one-line CSS fix
- 2026-11-17 | category chip design: pill shape, 48px token-based tap target, centered labels, overflow cue preserved | 9f4d60d | verified at 390px and 1280px
- 2026-11-17 | Home chip and heart toggles | b123ff5 | independent multi-select chips, heart labels, keyboard behavior verified at 390px and 1280px
- 2026-11-17 | installed Vercel web-design-guidelines skill and audited Home | a40c40d | skill committed; audit findings not fixed yet: skip link, theme metadata, whole-card click target, long-content handling, token gaps
- 2026-11-17 | converted six HCI lessons to Markdown outside the repo | no commit | lessons 1-6 in C:\Users\Chessman\HCI_lessons_markdown; HCI_lessons folder in repo is untracked and must never be committed
- 2026-11-17 | installed OmniRoute 3.8.53 globally and ran doctor | no commit | 0 failures, 47 warnings; re-ran install with --allow-scripts (install scripts allowed for 7 packages) before the GitHub check
- 2026-11-17 | OmniRoute GitHub check | no commit | MIT, ~88k stars, repo moved to cheaper-inference org, v3.8.54 latest (installed 3.8.53, not upgrading). Defaults bind 0.0.0.0, REQUIRE_API_KEY=false, placeholder password CHANGEME. Keys stored locally in AppData\Roaming\omniroute (encrypted per README); STORAGE_ENCRYPTION_KEY generated there by doctor, never commit or lose it. Plan: start with OMNIROUTE_SERVER_HOST=127.0.0.1, REQUIRE_API_KEY=true, own dashboard password; do not enable tunnel, autostart, MCP, A2A or MITM features
- 2026-11-17 | OpenCode Login shell attempt stopped at free quota | pending | partial Login files (login.html, css/components/login-form.css, css/pages/login.css) saved but unreviewed, uncommitted and unpushed; do not delete, reset, overwrite, commit or push
- 2026-11-17 | docs/PROJECT.md and skills-lock.json sync | pending | commit together with the next docs update
- 2026-11-17 | OmniRoute server started | no commit | bound to 127.0.0.1:20128 only (verified with netstat), health endpoint healthy. Started with OMNIROUTE_SERVER_HOST=127.0.0.1, REQUIRE_API_KEY=true, INITIAL_PASSWORD empty; login still accepted default CHANGEME, so password must be changed in Settings > Security. Env vars were set per window only, nothing written to files.
- 2026-11-17 | OmniRoute fallback and Claude Code verified | no commit | saved active priority combo gearshift-free-fallback with four free-quota provider models; generated the Claude Code profile and received the exact harmless test response. API keys remain local and unrecorded.
- 2026-11-17 | Login shell review and interaction fix | pending | added password visibility and field-specific validation, preserved token-based styling, removed the missing aerial-image request, and verified at 390px and 1280px with no horizontal overflow.
- 2026-11-17 | Login hero research and workflow handoff | no commit | img2threejs is Apache-2.0 but its official installer does not support Windows; 21st.dev is React/Tailwind-oriented and not suitable for the current stack. Pause OmniRoute and Claude Code; continue with direct assistant implementation and free OpenCode when available. Choose a licensed car video before adding the hero.
- 2026-11-19 | tooling switch and Login shell commit | f621ee4 | OmniRoute dropped; fallback is now Claude Code with GLM-4.7-Flash on Kaggle via ngrok; HCI_lessons added to .gitignore and removed from the commit; this supersedes the earlier pending Login shell and "pause OmniRoute and Claude Code" entries

## Open questions for the friend
- English or Taglish text?
- Is the simulated purchase and test drive flow OK?
- Which brands, and what does a brand page show?

## HCI checklist (defend each in the Q&A)
- Menus: short meaningful names, grouped, consistent (L2)
- Forms: labels above fields, required marked, errors name the field and reason (L2)
- Direct manipulation: instant feedback and undo (L2, L3)
- Garage/showroom metaphor, hypertext links between cars, brands, builders (L3)
- Voice search and chat help only with a text/touch alternative (L6)
- "For you" feed with "Because you liked JDM", user can edit or turn