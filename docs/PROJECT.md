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
- Home shell done and polished: header, category chips, build cards with real photos (3:2), 2-column grid in a centered container, bottom nav with labels. Fonts: Anton (headings, chips, card titles, weight 400), Carlito (body, italic logo). Motion: staggered card reveal, hover and press feedback, reduced motion respected (CSS only). Chips and hearts do not toggle yet.
- Tooling: OpenCode with GLM-5.3-Flash Free, /task command (.opencode/commands/task.md), skill frontend-design. Copilot writes prompts and reviews screenshots when Claude is out.
- Open items: Categories heading is still selectable; chip selected-state design to revisit; car photos are Pinterest placeholders with unknown source (replace or credit before a public deploy); bottom nav active item does not switch (needs router); favicon missing.
- Next: heading user-select fix, chip and heart toggles (JS), Web Design Guidelines audit (after GitHub check), login page, Supabase.

## Log
- 2026-11-17 | header, chips, card, grid | 272fb99, 62fac39
- 2026-11-17 | design rules, frontend-design skill, agents pointer | 40d2992, 7a982e5, 765188a
- 2026-11-17 | bottom nav | 716dcb9
- 2026-11-17 | fonts and card polish, /task command | 389e036, 51fa3b8
- 2026-11-17 | real car photos (placeholders) | ff5bc88
- 2026-11-17 | card and button motion | e6c8581

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