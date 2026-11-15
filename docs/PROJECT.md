# GearShift - project brief
Course: ITEC80 HCI, Lecture Activity 4 (System Design Draft Presentation, 50 pts).
Rubric: System Design 15 | System Overview 10 | Functions and Features 15 | Demo and Presentation 5 | Understanding and Q&A 5.

## What it is
A showcase-first car community. Users post their builds, browse by category and brand, favorite builds, and can mark a build "For sale" (price, location, message owner).
Friend's Figma design (GearShift) is the starting point. We improve it where the logic or HCI is weak.

## Stack (must really work, may be deployed)
- Plain HTML, CSS, JavaScript (ES modules). No build step.
- Supabase: Auth, Postgres, Storage. Row Level Security on every table.
- Free static host for deployment.

## Pages
Login, Create account, Forgot/Reset password, Home feed (category chips + cards), Build detail, Post build (multi-photo, category, brand, mods list, For sale switch), Favorites, Profile, Brands then Brand page, Search, Notifications, Settings.

## Known problems in the Figma to fix
Icon-only bottom nav (add labels); View Build leads nowhere (build detail page); post form too thin (add category, brand, multiple photos, required marks, error states); login button looks disabled and placeholders are low contrast; no empty states; Settings and Notifications empty; Car purchased stat has no flow behind it.

## HCI checklist (from the lessons)
- Menus: short meaningful names, grouped, consistent (L2)
- Forms: labels above fields, required marked, errors name the field and reason (L2)
- Direct manipulation: instant feedback and undo (L2, L3)
- Garage/showroom metaphor, hypertext links between cars, brands, builders (L3)
- Voice search and chat help only with a text/touch alternative (L6)
- "For you" feed with "Because you liked JDM", user can edit or turn off; stable layout; fallback for new users (L5)
- Optional 3D viewer with photo fallback (L4)
- Contrast, keyboard use, collect only needed data (L5, L6)

## Design decisions
(Palette, fonts, layout style: to be decided together.)

## Current status
Nov 15, 2026: folder, CLAUDE.md, this file created. Nothing built yet.
Next: decide the feature list with the friend, design the look, build the UI shell, then connect Supabase.
