# 🌐 Website Redesign — Full Audit & Build Prompt

> **Purpose:** Delete the existing codebase and rebuild a symmetrical, production-ready website from scratch — incorporating all workspace images into the homepage with a premium UI/UX design system.

---

## 🗑️ Step 0 — Clear the Workspace

```bash
# Delete everything except assets/images
rm -rf src/ pages/ components/ app/ api/ styles/ public/fonts/
rm -f package.json tsconfig.json next.config.* tailwind.config.*
```

Then confirm the workspace is clean before proceeding.

---

## 📁 Step 1 — Scan All Folders & Catalogue Assets

Before writing a single line of code, scan the entire workspace and list every file found.

```bash
find . -not -path "*/node_modules/*" -not -path "*/.git/*" \
  -type f | sort
```

Produce a catalogue like this:

| File | Type | Usage |
|------|------|-------|
| `/public/hero.jpg` | Image | Homepage hero background |
| `/public/gallery-1.png` | Image | Gallery grid — slot 1 |
| `/public/logo.svg` | Vector | Navbar logo |
| ... | ... | ... |

**Every image found must be assigned a role in the design before proceeding.**

---

## 🏗️ Step 2 — Architecture

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS Variables for tokens |
| Animations | Framer Motion |
| Backend | Next.js API Routes |
| Image handling | Next.js `<Image />` component |
| Linting | ESLint + Prettier |

### Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   └── api/
│       └── [...routes]
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Badge)
│   ├── layout/             # Navbar, Footer, Section
│   └── sections/           # Hero, Gallery, Features, CTA
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   └── images/             # All workspace images go here
├── styles/
│   └── globals.css         # Token definitions
├── types/
│   └── index.ts
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── README.md
└── AUDIT_REPORT.md
```

---

## 🎨 Step 3 — Design System

### Color Tokens (define in `globals.css`)

```css
:root {
  /* Primary palette */
  --color-primary:       #0F0F0F;
  --color-primary-soft:  #1A1A2E;
  --color-accent:        #6C63FF;
  --color-accent-light:  #A29BFE;

  /* Neutrals */
  --color-bg:            #FAFAFA;
  --color-surface:       #FFFFFF;
  --color-border:        #E5E7EB;
  --color-text:          #111111;
  --color-text-muted:    #6B7280;

  /* Spacing scale */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  32px;
  --space-xl:  64px;
  --space-2xl: 128px;

  /* Border radius */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.15);
}
```

### Typography Scale

```css
/* One font stack, strictly applied */
--font-display: 'Inter', sans-serif;

/* Scale */
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px */
```

**Rule:** No hardcoded font sizes, colors, or spacing values in components. Tokens only.

---

## 📐 Step 4 — Symmetry Rules (Enforced Throughout)

Every section of the website must follow one of these symmetrical layout patterns:

```
HERO          →  Centered, full-width, text + image balanced
FEATURES      →  3-column grid (equal width cards)
GALLERY       →  2 or 4-column masonry grid (balanced image weights)
ABOUT         →  2-column: text left / image right (or mirror)
TESTIMONIALS  →  3-column card row, centered
CTA           →  Centered, full-width
FOOTER        →  4-column grid, logo centered top
```

**CSS Grid pattern for symmetry:**

```css
.symmetrical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}
```

No section should have unbalanced white space, orphaned elements, or unequal column weights.

---

## 🏠 Step 5 — Homepage Sections (with Images Integrated)

Build these sections in order:

### 5.1 Navbar
- Logo (left) + Nav links (center) + CTA button (right)
- Sticky, transparent → solid on scroll
- Mobile: hamburger menu

### 5.2 Hero Section
- Full viewport height
- **Use the first/primary workspace image as background or split-panel**
- Centered headline + subheadline + 2 CTA buttons (primary + secondary)
- Subtle entrance animation (Framer Motion fade-up)

### 5.3 Gallery / Showcase Grid
- **All workspace images displayed here**
- 2×2 or 3×3 symmetrical grid
- Hover: scale + overlay with caption
- Each image uses Next.js `<Image />` with proper `alt`, `width`, `height`

### 5.4 Features Section
- 3-column card grid
- Icon + heading + description per card
- Equal height cards, consistent padding

### 5.5 About / Story Section
- 2-column: rich text (left) + image (right)
- Alternate layout on mobile (image stacks above text)

### 5.6 CTA Section
- Full-width, accent background
- Centered heading + button
- Subtle background pattern or image overlay

### 5.7 Footer
- 4-column grid: Logo/tagline | Links | Links | Social/contact
- Border top separator
- Copyright line centered at bottom

---

## ✅ Step 6 — Full Audit Checklist

Work through every item. Mark each ✅ when done, ❌ if an issue was found (and document the fix in `AUDIT_REPORT.md`).

### Frontend

- [ ] All pages render without console errors or warnings
- [ ] All images render using Next.js `<Image />` — no raw `<img>` tags
- [ ] Every image has a descriptive `alt` attribute
- [ ] No hardcoded colors, font sizes, or spacing in component files
- [ ] Typography is consistent — only tokens used
- [ ] Color contrast passes WCAG AA (4.5:1 for text)
- [ ] All interactive elements are keyboard navigable (Tab, Enter, Escape)
- [ ] Focus states are visible on all buttons and links
- [ ] Layout is fully responsive: 320px → 1920px
- [ ] Symmetry holds at all breakpoints
- [ ] Animations don't block interactivity (use `will-change` sparingly)
- [ ] No layout shift (CLS) on page load
- [ ] Fonts load without FOUT (use `next/font`)

### Routing & Pages

- [ ] All internal links resolve correctly (no 404s)
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] Open Graph tags set on homepage
- [ ] 404 page is custom-designed
- [ ] Loading states exist for any async data

### Backend / API

- [ ] All API routes return consistent JSON shape: `{ data, error, status }`
- [ ] Error handling is present on every route (try/catch)
- [ ] No secrets or API keys in client-side code
- [ ] Environment variables used via `.env.local`
- [ ] API responses have correct HTTP status codes

### Architecture

- [ ] No circular imports
- [ ] Components are single-responsibility
- [ ] No business logic in UI components (lives in `lib/`)
- [ ] TypeScript strict mode passes with no errors (`tsc --noEmit`)
- [ ] ESLint passes with zero warnings
- [ ] All `console.log` statements removed from production code

### Performance

- [ ] Images are optimised (WebP/AVIF via Next.js)
- [ ] No unused CSS or JS in bundle
- [ ] Lazy loading on below-the-fold images
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 📄 Step 7 — AUDIT_REPORT.md Template

Generate this file at the end of the build:

```markdown
# Audit Report — [Site Name]
**Date:** [date]
**Auditor:** Claude

## Summary
- Total issues found: X
- Issues resolved: X
- Issues deferred: X

## Issues Found & Resolved

### ISSUE-001 — [Title]
- **Severity:** Critical / Major / Minor
- **Location:** `components/Hero.tsx` line 42
- **Problem:** [Description]
- **Fix applied:** [What was changed]

### ISSUE-002 — ...

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Next.js App Router | Better layouts, server components |
| Tailwind + CSS vars | Tokens for consistency, utilities for speed |
| Framer Motion | Smooth, accessible animations |

## Image Integration

| Image | Location | Assigned Role |
|-------|----------|---------------|
| hero.jpg | /public/images/ | Homepage hero |
| ... | ... | ... |
```

---

## 🚀 Step 8 — README.md

```markdown
# [Project Name]

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `tsc --noEmit` | Type check |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values.

## Design System

See `styles/globals.css` for all tokens.
All colors, spacing, and typography are tokenised — no hardcoded values.
```

---

## ⚡ Execution Order Summary

1. Clear workspace
2. Scan all folders → catalogue every asset
3. Install dependencies
4. Define design tokens
5. Build folder structure
6. Build layout components (Navbar, Footer, Section)
7. Build UI primitives (Button, Card, Badge)
8. Build homepage sections top-to-bottom
9. Integrate all workspace images
10. Build remaining pages
11. Build API routes
12. Run full audit checklist
13. Fix every issue found
14. Generate `AUDIT_REPORT.md`
15. Generate `README.md`
16. Final type check + lint pass

---

*This prompt is exhaustive by design. Every step must be completed in order. Do not skip items. Document everything in AUDIT_REPORT.md.*
