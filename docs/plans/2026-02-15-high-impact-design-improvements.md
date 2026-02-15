# High-Impact Design Improvements — Batch 1

**Goal**: Fix the highest-value, lowest-effort design issues identified in the frontend-design skill audit.

**Architecture overview**: These are four independent changes that don't depend on each other. Each leaves the app in a buildable state. No new dependencies required (Framer Motion is already installed).

**Tech stack**: Next.js 15, Tailwind CSS, Framer Motion 11 (already in package.json)

---

## Task 1: Fix Footer Dead Links
**File**: `components/layout/Footer.tsx`
**What**: The `#about` and `#features` links don't match any section IDs on the home page. Update to match actual IDs: `#case-study`, `#how-it-works`, `#pricing`.
**Verify**: `npm run build` passes, links match actual section IDs in `app/page.tsx`.
**Commit**: "Fix broken anchor links in footer"

## Task 2: Add Display Heading Font
**Files**: `app/layout.tsx`, `tailwind.config.ts`, `app/globals.css`
**What**:
- Import a distinctive display font via `next/font/google` (Plus Jakarta Sans — geometric, modern, heavier than Inter, good for SaaS headings)
- Add `font-heading` CSS variable and Tailwind config
- Apply heading font to `heading-xl` class and all h1/h2 elements via base layer
- Keep Inter for body text
**Verify**: `npm run build` passes. Headings use the new font, body stays Inter.
**Commit**: "Add Plus Jakarta Sans as display heading font"

## Task 3: Restore Scroll Animations
**File**: `components/ui/ScrollAnimations.tsx`
**What**: Replace the gutted pass-through wrappers with real Framer Motion animations:
- `ScrollReveal`: fade-in-up on scroll using `useInView` + `motion.div`
- `StaggerContainer`: stagger children with `staggerChildren` variant
- `StaggerItem`: individual stagger item with fade-up
- `ParallaxSection`: keep as simple section wrapper (no complex parallax to avoid perf issues)
- `ScrollScale`: scale-in on scroll
- `AnimatedCounter`: simple number display (keep as-is)
**Verify**: `npm run build` passes. No hydration errors (components are already 'use client').
**Commit**: "Restore scroll-triggered animations with Framer Motion"

## Task 4: Eliminate Preview Page Duplication
**Files**: `app/preview/page.tsx`, `app/page.tsx`
**What**: The preview page is a near-copy of the home page with a "Preview Mode" badge. Replace `app/preview/page.tsx` with a thin wrapper that imports and renders the home page content, adding only the preview badge.
- Extract the shared page content from `app/page.tsx` into a `components/sections/HomeContent.tsx` component
- Have both `app/page.tsx` and `app/preview/page.tsx` import `HomeContent`
- Preview page adds the fixed "Preview Mode" badge
**Verify**: `npm run build` passes. Both `/` and `/preview` render correctly.
**Commit**: "Extract shared home content to eliminate page duplication"
