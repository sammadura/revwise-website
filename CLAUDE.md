# Revwise Website - Claude Development Guide

## Project Overview

Revwise is an automated Google review collection and management platform. This is the marketing website built with Next.js 15, React 18, TypeScript, Tailwind CSS, and Framer Motion. Production URL: https://getrevwise.com

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **UI**: React 18
- **Styling**: Tailwind CSS 3.4 with custom design tokens
- **Animations**: Framer Motion 11
- **Forms**: react-hook-form 7
- **Deployment**: Vercel

## Commands

```bash
npm run dev       # Development server on :3000
npm run build     # Production build (use to verify before completion)
npm run lint      # ESLint validation
npm run start     # Production server
```

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (Header/Footer, SEO metadata, JSON-LD)
  page.tsx              # Home/landing page
  globals.css           # Global styles with Tailwind layers
  contact/              # Contact form flow
  demo-call/            # Demo booking flow
  preview/              # Preview page
  privacy-policy/       # Legal pages
  terms-and-conditions/
components/
  layout/               # Header.tsx, Footer.tsx
  sections/             # Hero.tsx, LogoShowcase.tsx
  ui/                   # Button, Card, FloatingStars3D, SMSDemo, ScrollAnimations, YouTubeEmbed
public/                 # Static assets (og-image.png, robots.txt, sitemap.xml)
docs/plans/             # Implementation plans and design documents
```

## Design System

### Brand Colors (defined in tailwind.config.ts)
- **Primary**: `#349cff` (blue)
- **Secondary**: `#604BEA` (purple)
- **Dark**: `#242424`
- **Gray light**: `#fafafa`, **Gray medium**: `#64646E`, **Gray border**: `#F0F0F0`

### Typography
- Font: Inter (loaded via next/font/google)
- Apply `font-sans` or `font-heading` utility classes

### Custom Animations
Available via Tailwind: `animate-float`, `animate-fade-in-up`, `animate-pulse-glow`, `animate-slide-in-right`, `animate-scale-in`, `animate-bounce-subtle`, `animate-scroll`, `animate-gradient-shift`

### Image Optimization
Remote images allowed from: `images.leadconnectorhq.com`, `storage.googleapis.com`, `assets.cdn.filesafe.space`, `img.youtube.com`

---

## Development Workflow (Superpowers)

### Core Principles

1. **Brainstorm before building** - Explore requirements and propose approaches before writing any code. Even "simple" tasks benefit from a moment of design thinking.
2. **Plan with precision** - Break work into small, specific tasks with exact file paths and expected outcomes.
3. **Test-driven development** - Write the failing test first. Verify the failure. Implement minimally. Verify the pass. Refactor.
4. **Verify before claiming completion** - Run `npm run build` and `npm run lint` and read the output before declaring success. Never say "should work" or "probably passes."
5. **Systematic debugging** - When something fails: reproduce, analyze patterns, form hypotheses, test minimally. If 3+ fixes fail, question the architecture.
6. **Frequent commits** - Commit after each meaningful unit of work with clear messages.

### Verification Checklist

Before claiming any task is complete:
- [ ] `npm run lint` passes with zero warnings/errors
- [ ] `npm run build` completes with exit code 0
- [ ] Changed pages render correctly (check for hydration errors)
- [ ] No TypeScript errors in changed files
- [ ] Responsive layout verified (mobile-first)

### Planning Convention

Store plans in `docs/plans/` using the format: `YYYY-MM-DD-<feature-name>.md`

Example: `docs/plans/2026-02-15-pricing-page.md`

Plans should include:
- Goal statement and architecture overview
- Granular tasks (2-5 minute increments)
- Exact file paths and expected outcomes
- TDD cycle for each task where applicable

---

## Frontend Design Standards

### Anti-AI-Slop Rules

When creating or modifying UI, avoid generic AI aesthetics:

- **NO** cookie-cutter centered layouts with uniform rounded corners everywhere
- **NO** overused font stacks (the site uses Inter intentionally as brand font - but avoid defaulting to it for decorative/accent purposes)
- **NO** cliched purple-gradient-on-white patterns (the site has purple as secondary - use it with intention, not as default)
- **NO** predictable component patterns that look templated

### Design Quality Checklist

- **Typography**: Pair fonts intentionally. Use size/weight contrast for hierarchy. Don't make everything the same size.
- **Color**: Dominant + accent is stronger than evenly distributed palettes. Use CSS variables from the design system.
- **Motion**: One well-orchestrated page-load reveal beats scattered micro-interactions. Use Framer Motion for complex animations, CSS for simple transitions.
- **Spatial Composition**: Generous whitespace OR controlled density. Avoid the muddy middle. Asymmetry and overlap create visual interest.
- **Backgrounds & Depth**: Gradient meshes, noise textures, layered transparencies, dramatic shadows - use atmosphere, don't default to flat white.

### Implementation Patterns

- Use Next.js `Image` component for all images (performance optimization)
- Use `next/font/google` for font loading (already configured for Inter)
- Apply Framer Motion for scroll-triggered animations (see `ScrollAnimations.tsx` for patterns)
- Use `react-hook-form` for all form state management
- CSS classes via Tailwind utilities; extract to `globals.css` `@layer components` only for truly reusable patterns

---

## Code Quality Standards

- **TypeScript strict mode** - No `any` types. Use proper interfaces/types.
- **Component patterns** - Functional components with explicit prop types. Use `'use client'` directive only when client interactivity is needed.
- **File naming** - PascalCase for components (e.g., `Hero.tsx`), kebab-case for routes (e.g., `demo-call/page.tsx`)
- **Imports** - Use `@/` path alias for all internal imports
- **SEO** - Every page needs proper metadata export. Use Next.js Metadata API.
- **Accessibility** - ARIA labels on interactive elements, semantic HTML, keyboard navigation support

---

## Code Review Standards

When reviewing code changes, evaluate:

1. **Plan alignment** - Does the implementation match the agreed design/plan?
2. **Type safety** - Are TypeScript types correct and specific?
3. **Performance** - No unnecessary re-renders, proper Image optimization, lazy loading where appropriate
4. **SEO impact** - Metadata, structured data, semantic HTML preserved
5. **Mobile responsiveness** - Works at all breakpoints (sm, md, lg, xl)
6. **Accessibility** - Screen reader compatible, keyboard navigable

### Feedback Categories
- **Critical** (must fix): Breaks functionality, security issues, accessibility violations
- **Important** (should fix): Performance problems, SEO regressions, poor UX
- **Suggestion** (nice to have): Code style improvements, minor optimizations
