# Glore Website — Build Plan

## What exists already
A Next.js 16 + Tailwind v4 + TypeScript + Framer Motion scaffold at `glore-app/`.
Brand tokens (#08050f bg, #7B3FBE purple, #E879B0 pink) and CSS utilities
(card-hover glow, btn-glow, gradient-border, background orbs) are already wired in
`app/globals.css`. The current page has generic marketing sections (About, Offers,
Testimonials, Contact) that will be replaced entirely.

---

## Folder structure after build

```
glore-app/
├── app/
│   ├── layout.tsx          MODIFY  — swap Syne → Orbitron (futuristic font)
│   ├── page.tsx            MODIFY  — replace section order
│   └── globals.css         MODIFY  — add tool-card glow keyframes
├── components/
│   ├── Nav.tsx             MODIFY  — Glore wordmark + "Browse Tools" CTA
│   ├── Hero.tsx            MODIFY  — full-width Orbitron headline, scroll CTA
│   ├── BackgroundOrbs.tsx  KEEP    — reused behind hero
│   ├── FeaturedTools.tsx   CREATE  — horizontal trending strip (3–4 cards)
│   ├── CategoryFilter.tsx  CREATE  — pill filter bar (All/Image/Video/Writing/Coding/Audio)
│   ├── ToolGrid.tsx        CREATE  — filterable grid, consumes CategoryFilter state
│   ├── ToolCard.tsx        CREATE  — single card with hover glow/lift
│   └── Footer.tsx          MODIFY  — Glore links, social icons, Submit CTA
├── lib/
│   └── tools.ts            CREATE  — static data for 12 placeholder tools
└── public/
    └── tool-placeholder.svg CREATE  — generic tool logo SVG used by all cards
```

Files **deleted**: `components/About.tsx`, `components/Offers.tsx`,
`components/Testimonials.tsx`, `components/Contact.tsx`

---

## Page sections (top → bottom)

### 1. Navbar
- "GLORE" wordmark with shimmer gradient animation (already in globals.css)
- Nav links: Home · Tools · Submit a Tool
- Right: purple "Browse Tools" button (btn-glow)
- Sticky, frosted-glass background on scroll

### 2. Hero
- Full-width, 100vh dark section
- Animated background orbs (BackgroundOrbs) + dot-grid texture
- Orbitron bold headline: "THE ULTIMATE AI TOOLS DIRECTORY FOR INFLUENCERS"
- Pink/purple gradient subheading: one-liner value prop
- Large "Explore Tools" CTA button (btn-glow, scrolls to tool grid)
- Subtle bounce scroll-down indicator at bottom

### 3. Featured / Trending strip
- Section label: "TRENDING NOW"
- Horizontally scrollable row of 3–4 tool cards
- Each card: tool logo, name, category badge (purple pill), 1-line description
- Hover: gradient border lights up, card lifts 5px (card-hover class)

### 4. Category filter + Tool grid
- Sticky pill bar: All · Image Gen · Video · Writing · Coding · Audio
- Active pill fills purple; clicking filters the grid below (client-side state)
- 3-column responsive grid (2-col tablet, 1-col mobile)
- 12 placeholder tool cards — name, logo, category badge, description, "Visit →" link
- Cards use card-hover (glow + lift on hover)

### 5. Footer
- "GLORE" logo left, nav links centre, "Submit a Tool" CTA right
- Social row: Twitter/X · YouTube · Instagram icons
- Bottom: copyright line + tagline

---

## Typography
- **Display / headings:** Orbitron (Google Fonts) — futuristic, geometric
- **Body:** Inter (already in scaffold)

## Interactivity
- Category filter: React useState, client component, instant filtering (no server round-trip)
- Tool cards: CSS hover glow/lift (card-hover) + Framer Motion fade-in-up on mount
- Hero CTA: smooth scroll to tool grid section

## What you will see in the preview panel
A single dark-luxury page on #08050f. At the top, the GLORE shimmer wordmark sits
in a frosted sticky nav. The hero fills the full viewport with pulsing purple/pink
orbs behind bold Orbitron type and a glowing CTA. Scrolling reveals a trending tools
strip, then a pill filter bar above a glowing card grid. Cards lift and border-glow
purple-to-pink on hover. The footer closes with social links and a Submit CTA.
