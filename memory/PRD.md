# PRD — Youth Transform Landing Page (Rupantaram Academy)

## Original Problem Statement
Build a premium, responsive, English-only landing page for **Youth Transform**, the flagship 3-day life skills & personality development program of **Rupantaram – Life Skills & Personality Transformation Academy** (Garud Zep Group), for teenagers aged 13–18. Theme: premium navy blue, gold, and white; inspirational, trustworthy for parents, modern for students. Sections required: Hero (title, subtitle, tagline, Enroll/Brochure CTAs), About the Program, 8 Key Outcome cards, Who Should Join (6 traits), 3-Day Journey timeline, Learning Method grid (8), Benefits (8), FAQ (6), Final CTA, Footer. Brand tokens: Barlow headings, Mulish body, pill buttons, preloader gradient #c8102e → #f0a500 with navy #1b2a4a text.

## User Decisions
- Pure frontend landing page, **no backend** (enroll/contact forms static only).
- "Download Brochure" scrolls to program details (dummy for now).
- Visuals: mix of AI-generated (hero, workshop, day 1–3, CTA texture) + stock (Unsplash).
- Art direction pushed to Awwwards level: kinetic masked-line hero reveal, editorial marquee, numbered chapters, framer-motion scroll reveals, lenis smooth scrolling, mouse-tilt 3D hero card, film-grain overlay.

## Architecture
- **Frontend only**: Vite + React 19 + TS strict, Tailwind v4, framer-motion, lenis, shadcn (dialog/input/label/sonner), lucide-react.
- `src/pages/Home.tsx` composes: Preloader → Navbar → HeroSection → EditorialMarquee → AboutProgram → OutcomesGrid → WhoShouldJoin → TimelineJourney → LearningMethods → BenefitsList → FaqAccordion → FinalCta → Footer → EnrollDialog.
- `src/lib/scroll.ts`: lenis singleton + smooth anchor scrolling.
- Fonts: Barlow + Mulish via Google Fonts `<link>` in index.html, Geist Variable as fallback.
- Backend untouched (template `/api/status` only).

## User Personas
- Teen student (13–18): wants confidence, direction, less screen pull.
- Parent: wants trust signals, measurable benefits, progress updates, easy enrollment.

## Implemented (2026-09-05)
- Red→gold brand preloader with progress counter and curtain reveal.
- Kinetic hero: masked line-by-line headline, gold gradient accents, dual CTAs, stats strip, 3D mouse-tilt image card with floating badges, scroll parallax.
- Editorial marquee ribbon (skills ticker, pauses on hover).
- All 9 required content sections with numbered chapter headings (01–07 + CTA).
- 6-item animated FAQ accordion.
- Enroll dialog (name/age/phone) with Sonner toast confirmation — STATIC ONLY, nothing is saved or sent.
- Footer with programs, quick links, centers (Karjat · Alibag · Pen · Lonavala), placeholder contact.
- data-testid attributes on all interactive elements; `yarn typecheck` clean.

## Verified
- Public URL https://transform-teens.preview.emergentagent.com returns 200; `/api/status` responds.
- Browser pass: preloader → hero reveal → section scrolls → FAQ toggle → enroll dialog fill + submit → success toast → final CTA → footer. All screenshotted and confirmed.

## Notes / Not Done (by choice)
- Enrollment form is front-end only (toast confirmation); no data persists. MOCKED.
- "Download Brochure" scrolls to the About section; no real PDF yet.
- Footer phone/email are placeholders; parent quote is sample copy.

## Backlog
- P0: Real enrollment backend (save leads to MongoDB) + brochure PDF download.
- P1: Other program pages (Kids Transform, Young Adult Transform, Parenting 360, 30-Day Journey).
- P1: Marathi language toggle (Mukta font) mirroring the main Rupantaram site.
- P2: Batch schedule section, real testimonials, admin view of leads.
