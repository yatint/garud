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

## Implemented — Original-Style Hero & Header (2026-09-05, fourth phase)
- Homepage hero rebuilt to match the original site per user screenshot: real campus banner (`/assets/hero-banner.webp` from their CDN) with green overlay, centered Marathi tagline चला माणूस घडवू या (Mukta font added), uppercase "Life Skills & Personality Transformation Academy" title, Explore Programs pill + circular call CTA, and 6 overlapping white stat cards (5 programs / 25 skills / 4 locations / 6–19+ ages / 30-day flagship / 6 mentors).
- Header rebuilt to match original: white top bar (social icons left, real logo.webp centered, orange phone pill right) + dark-green menu bar with HOME / ABOUT / PROGRAMS (hover dropdown) / LIFE SKILLS / GALLERY / SUCCESS STORIES / CONTACT + Enquire Now pill. Real logo downloaded from garudzeprupantarm.com.

- Hero polish (per user reference screenshot): banner bottom edge uses an elliptical curve (`border-radius: 0 0 50% 50% / 0 0 72px 72px`) sweeping up at the edges; stat cards are flat white with brown line icons on soft-beige hexagon badges (clip-path polygon), bold green numbers, gray labels.

## Implemented — About Us Page (2026-09-05, fifth phase)
- `/about`: full About page — hero (mountain-summit sunrise stock image, green overlay, curved bottom edge, Explore Programs/Contact Us CTAs), Who We Are + Mission/Vision cards, What Makes Us Different (6 cards), Core Values (8 circular cards with one-liners), Our Programs (4 cards, Youth links to /youth-transform, others open enquiry), 5-step horizontal methodology timeline, Why Families Choose animated counters (4 centers / 4 programs / 25+ modules / 100% practical), Community Impact (volunteer imagery), 4 location cards with View Programs, final CTA "Your Transformation Begins Today".
- Shared `SlimNavbar` (logo + Academy Home + Enquire) extracted and used by About and Gallery.
- Homepage navbar About link (desktop + mobile) now routes to /about.

## Implemented — Why Choose Us Page (2026-09-05, sixth phase)
- `/why-us`: hero (walkers-toward-light imagery, curved edge, Explore Programs → homepage #programs, Book a Counselling Session → enquiry dialog), Philosophy ("Education Beyond Academics"), 8 trust feature cards, Ordinary Coaching vs Rupantaram comparison table (gray X column vs green ✓ column), 12-skills colorful icon grid, 4-step Transformation Method with arrow connectors, Outcomes for 4 audiences (Children/Teenagers/Parents/Young Adults), Core Promise green band, final CTA (Join Rupantaram / Contact Our Team).
- Homepage navbar (desktop + mobile) gained a "Why Us" link.

## Implemented — Programs Overview Page (2026-09-05, seventh phase)
- `/programs`: hero (multi-generation family image, curved edge, Find Your Program / Contact Us), intro, 5 premium program cards (flagship 30-Day highlighted), "Which Program Is Right for You?" horizontal age→program journey (colorful icon stops), 8 "What Every Program Develops" cards, 6-column Learning Experience grid, 4 location cards + batch note, final CTA "Start Your Transformation Today". Page title set for SEO.
- Homepage navbar Programs now routes to /programs (dropdown lists all five programs + overview; Youth Transform still routes to its own page).

## Implemented — Kids Transform Landing Page (2026-09-05, eighth phase)
- `/programs/kids-transform`: hero (joyful kids image, Register Now → enquiry, Download Brochure → scroll), About ("Growing Better Children Beyond Academics"), 8 colorful What Children Learn cards, 3-Day Learning Journey timeline (Discover Myself / Build Good Habits / Shine with Confidence), 6-card Learning Method, green "Why Parents Love This Program" benefits band (6), Ideal For checklist (6), CSS certificate mockup with real logo + seal, 3 placeholder testimonial cards (explicitly marked "Coming Soon"), final CTA "Give Your Child the Gift of Life Skills". SEO title + meta description set on mount.
- Navbar dropdown Kids Transform now routes to this page.

## Implemented — Young Adult Transform Landing Page (2026-09-05, ninth phase)
- `/programs/young-adult-transform`: hero (mountain group image, Register/Brochure CTAs), About ("Preparing You for Life Beyond College"), 8 "What You'll Develop" cards (incl. Financial Awareness), 3-Day Journey (Know Yourself / Build Your Leadership / Design Your Future), Who Should Join checklist (6), 6-card Learning Experience, green "The Skills That Schools Rarely Teach" band, 8 outcome chips (no employment/salary claims), certificate mockup, final CTA "Your Future Begins with the Right Direction". SEO title + meta set.
- Navbar dropdown Young Adult Transform now routes to this page.

## Implemented — 30-Day, Life Skills, Success Stories & Contact Pages (2026-09-05, tenth phase)
- `/programs/30-day-transform`: flagship page — hero, "Transformation Doesn't Happen in One Day", Why 30 Days (4 cards), 4-week journey timeline, 8 daily-practice cards, 8 core-area cards, 6 experience cards, ideal-for checklist (5), 8 outcome chips, CTA "Your Best Version Starts with One Decision". SEO set.
- `/life-skills`: hero ("21 Life Skills That Shape a Meaningful Life"), intro, 23 skill cards grouped into 5 categories (Self Mastery / Emotional Intelligence / Communication & Leadership / Learning & Critical Thinking / Responsible Living), 6 methodology cards, clickable program comparison table, 5-step journey, "Preparing People for Life" band, CTA. SEO set.
- `/success-stories`: hero, intro, 3 featured story cards (placeholders only — no invented names/reviews), Before→After framework table (6 rows), 3 parent testimonial placeholders, 6 journey gallery placeholders + View Full Gallery link, 4-step Moments timeline, Share Your Story CTA. SEO set.
- `/contact`: hero, 3 contact cards (official numbers +91 90116 58888 / +91 90116 78888, info@garudzeprupantaram.com, website), full enquiry form with success-confirmation UI (design only), 4 location cards with map placeholders + real Google Maps direction links, office hours card (Mon–Sat 9–6, Sunday workshop only), Why Visit (4 cards), 5 FAQs, final CTA with Call + WhatsApp (wa.me/919011658888).
- Navbar: Life Skills → /life-skills, Success Stories → /success-stories, Contact → /contact; dropdown Kids/Young Adult/30-Day route to their pages.
- Phone numbers updated site-wide to the official +91 90116 58888 (and 90116 78888 in footer); footer email now info@garudzeprupantaram.com.

## Static Export (2026-09-05)
- App switched to HashRouter + `base: "./"` so the production build runs on any static host (cPanel etc.) — URLs work as `index.html#/about` style.
- `yarn build` → `frontend/dist/`; zipped to `/app/rupantaram-website.zip` (~450K). Verified standalone via plain static server (home + #/programs render fully).
- Note: React SPA compiles to one index.html + JS/CSS bundles — not 12 separate hand-written HTML files.

## Implemented — Full Marathi/English Bilingual Conversion (2026-09-06)
- Governing request: "I want entire site in Marathi. In header allow user to switch to English." User confirmed: all pages, agent-written professional Marathi, no ZIP rebuild needed.
- `src/lib/lang.tsx`: LanguageProvider with `t(en, mr)`, default Marathi, persisted via localStorage `rupantaram-lang`, sets `document.documentElement.lang` + `lang-mr` class. `LangToggle` pill in both navbars (English/मराठी).
- ~53 components across all 12 pages converted to the `t()` pattern: Home, About, Why Us, Programs Overview, Kids/Youth/Young Adult/30-Day Transform, Life Skills, Success Stories, Contact, Gallery + navbars, footer, enquiry/enroll dialogs, preloader (also re-themed from old red/navy to brand green).
- Bilingual browser tab titles centralized in `App.tsx` (TITLES map by pathname, reacts to language switch).
- Brand names intentionally stay English in Marathi mode: Kids/Youth/Young Adult Transform, Parenting 360°, 30-Day Transform, phone/email/URLs. Homepage hero keeps the cross-language brand presentation (Marathi title + English tagline eyebrow, mirroring the original site) — intentional.
- Homepage hero image replaced per user-supplied campus aerial photo → enhanced to 1264×848, saved as `/assets/hero-campus.webp`; overlay strengthened (0.55→0.85 green gradient + radial vignette + heading text-shadow) so hero text is clearly readable (user complaint: text not visible on old image).
- Testing agent pass (iteration_1): default Marathi, toggle, persistence, contact form Marathi success, gallery filters/lightbox, all program pages, tab titles — all pass. One HIGH bug (Life Skills intro left in English) found and fixed; `yarn typecheck` clean.
- Stale `/app/rupantaram-website.zip` predates the bilingual work; user said no new ZIP needed.

## Implemented — Youth Transform Page Redesign (2026-09-06)
- User report: /youth-transform layout looked different from other pages (it was still the original first-phase navy/gold landing page). Rebuilt from scratch on the academy design system to match Kids/Young Adult/30-Day program pages: SlimNavbar, curved hero (badge, gradient title, Register/Brochure CTAs), About, 8 outcome cards, 3-day journey cards with images, 8 learning-method cards, ideal-for checklist, green benefits band, certificate mockup, testimonial placeholders, 6-FAQ accordion, final CTA, AcademyFooter + EnquiryDialog.
- New bilingual components in `src/components/academy/youth/`; all youth-specific content (outcomes, journey, FAQs, benefits) preserved from the old page's copy.
- Hero image replaced with upright stock photo of Indian students (old one rendered sideways in wide crop).
- Deleted 12 legacy components now unused (Navbar, HeroSection, AboutProgram, OutcomesGrid, WhoShouldJoin, TimelineJourney, LearningMethods, BenefitsList, FaqAccordion, FinalCta, Footer, EnrollDialog). EditorialMarquee + Preloader kept (used by Home).
- Testing agent (iteration_2): 100% pass — design consistency, both languages, FAQ, enquiry dialog, inbound links, and full regression on all other pages; typecheck clean.

## Implemented — Youth Transform Content Update (2026-09-06)
- User supplied new Marathi content for /youth-transform ("किशोर रूपांतर"); page sections rebuilt around it with bilingual (agent-written English) content and Lucide icons:
  - Hero title now किशोर रूपांतर / Youth Transform; subtitle from the new intro.
  - About (01): both new intro paragraphs verbatim.
  - उद्दिष्टे (02): 5 objective icon cards (Flame/ShieldCheck/HeartHandshake/Users/Target).
  - मुख्य घटक (03): 5 numbered rich cards (Sparkles/Timer/Heart/Crown/Compass) with descriptions.
  - कार्यक्रम रचना (04): 3-day journey — Day 1 स्व-ओळख/आत्मविश्वास/सकारात्मक विचार, Day 2 भावनिक बुद्धिमत्ता/शिस्त/वेळ व्यवस्थापन, Day 3 नेतृत्व/करिअर दिशा/जीवन नियोजन + पदवी.
  - वैशिष्ट्ये (05): 4 feature cards (MessagesSquare/Zap/GraduationCap/Flower2).
  - कोणासाठी (06): 3 checklist items; अपेक्षित परिणाम (07): 5 chips in green band; CTA carries the closing quote.
  - Replaced YouthOutcomes/YouthMethod with YouthObjectives/YouthComponents/YouthFeatures; App.tsx Marathi tab title now "किशोर रूपांतर".
- Verified via screenshots in Marathi + English; yarn typecheck clean.

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
- P1: Parenting 360° dedicated program page.
- P2: Batch schedule section, real testimonials/photos to replace placeholders, admin view of leads.
