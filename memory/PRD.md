# PRD — Youth Transform Landing Page (Rupantaram Academy)

## Original Problem Statement
Build a premium, responsive, English-only landing page for **Youth Transform**, the flagship 3-day life skills & personality development program of **Rupantaram – Life Skills & Personality Transformation Academy** (Garud Zep Group), for teenagers aged 13–18. Theme: premium navy blue, gold, and white; inspirational, trustworthy for parents, modern for students. Sections required: Hero (title, subtitle, tagline, Enroll/Brochure CTAs), About the Program, 8 Key Outcome cards, Who Should Join (6 traits), 3-Day Journey timeline, Learning Method grid (8), Benefits (8), FAQ (6), Final CTA, Footer. Brand tokens: Barlow headings, Mulish body, pill buttons, preloader gradient #c8102e → #f0a500 with navy #1b2a4a text.

## User Decisions
- Pure frontend landing page, **no backend** (enroll/contact forms static only).
- "Download Brochure" scrolls to program details (dummy for now).
- Visuals: stock photography only (Unsplash/Pexels) — hero group shot, classroom workshop, meditation, team huddle, public speaking. (2026-09-05: user rejected AI-generated images; all replaced with stock.)
- Art direction pushed to Awwwards level: kinetic masked-line hero reveal, editorial marquee, numbered chapters, framer-motion scroll reveals, lenis smooth scrolling, mouse-tilt 3D hero card, film-grain overlay.

## Architecture
- **Frontend only**: Vite + React 19 + TS strict, Tailwind v4, framer-motion, lenis, shadcn (dialog/input/label/sonner), lucide-react.
- **Theme (2026-09-05, corrected per user screenshot)**: official Rupantaram palette — white/#fbfafa/#f6f7f0 surfaces, brand green #18463b (headings, marquee, final CTA, footer), logo green #0b5d3b, accent orange #f68a4a (buttons/CTAs, hover → green per .btn-main spec), body #222, muted #7a7a7a/#999, border #e1dfdf. Preloader keeps brand red→gold gradient (#c8102e → #f0a500) with navy #1b2a4a text. Barlow 700 headings + Mulish body.
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

## Implemented — Academy Homepage Rebuild (2026-09-05, second phase)
- Rebuilt the fresher-made garudzeprupantarm.com index page as a premium React homepage at `/`, translated to English (per user choice).
- Youth Transform page moved to `/youth-transform` with an "Academy Home" back link; homepage links into it from nav, program card, and footer.
- Sections: top bar + navbar, hero ("Chala Manus Ghadvu Ya" masked reveal + tilt image), pillars marquee, 6-stat strip, About, 25 Life Skills in 3 tracks, Founder's Note (green band), 3 Success Stories, 5 Program cards (+ guidance tile), How We Teach (5), 6-Step Transformation Journey, Why Parents Choose Us (4), 4 Training Centers (call/enquire), 8 FAQs, final CTA, footer (both phones, garudzep.com, socials).
- Enquiry dialog (name/mobile/email/city/program/message) — STATIC ONLY, toast confirmation, nothing saved (per user choice).
- All imagery is stock (Unsplash/Pexels), Indian students/families — no AI images (per user choice).

## Implemented — Gallery Page (2026-09-05, third phase)
- `/gallery`: "Moments of Transformation" — 13 stock photos in 4 filterable categories (Workshops, Yoga & Mindfulness, Stage & Speaking, Team Activities), masonry grid, lightbox with prev/next + keyboard (Esc/arrows), slim header with Academy Home link, shared footer + enquiry dialog.
- Gallery linked from homepage navbar (desktop + mobile) and footer quick links.
- Photos are curated stock (Unsplash/Pexels), NOT real batch photos — replace with authentic workshop pictures when available.

## Verified
- `/` and `/youth-transform` both load through the public URL; enquiry dialog fill → submit → success toast confirmed; cross-page links work; typecheck clean.
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
