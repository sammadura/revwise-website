# Revwise Website — Claude Development Guide

Marketing website for RevWise (automated Google review collection & reputation management).
Production: https://getrevwise.com

> **Process guidance** — brainstorming, planning, TDD, systematic debugging, verification,
> and frontend-design standards come from the global skills, not this file. This guide is
> the **repo-specific reference** only (stack, structure, design system, conventions).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **UI**: React 18
- **Styling**: Tailwind CSS 3.4 (custom tokens) + `@tailwindcss/typography`
- **Animation**: Framer Motion 11
- **Forms**: react-hook-form 7
- **Email**: nodemailer (contact + audit lead forms)
- **Payments**: Stripe (hosted subscription checkout)
- **Analytics**: `@vercel/analytics`
- **Deployment**: Vercel

## Commands

```bash
npm run dev       # Dev server on :3000
npm run build     # Production build — run to verify before claiming completion
npm run lint      # ESLint
npm run start     # Production server
```

## Project Structure

```
app/                       # Next.js App Router
  layout.tsx               # Root layout: Header/Footer, local fonts, SEO metadata, JSON-LD, Vercel Analytics
  page.tsx                 # Home / landing
  globals.css              # Global styles + Tailwind layers
  icon.svg
  blog/                    # Blog index + blog/[slug]/ dynamic post pages
  audit/                   # Free "review audit" lead-gen tool (page)
  pricing/                 # Pricing page (+ pricing/layout.tsx)
  contact/                 # Contact form  → contact/thank-you/
  demo-call/               # Demo booking  → demo-call/thank-you/
  checkout/success/        # Post-Stripe-checkout success page
  preview/
  privacy-policy/  terms-and-conditions/   # Legal pages
  api/
    audit/                 # Audit backend: industry-benchmarked review estimate, emails result (nodemailer)
    audit/autocomplete/    # Business lookup autocomplete for the audit tool
    checkout/              # Creates a Stripe subscription Checkout session (14-day trial)
components/
  layout/                  # Header.tsx, Footer.tsx
  sections/                # Hero, HomeContent, FAQ, LogoShowcase
  ui/                      # Button, Card, FeatureIllustration, SMSDemo, SMSDemoV2, ScrollAnimations, YouTubeEmbed
content/blog/              # Blog posts authored as .tsx (~19 posts)
lib/blog.ts                # Blog content loader (used by app/blog)
public/                    # Static assets: public/fonts (Satoshi, Clash Display), og-image, robots.txt, sitemap.xml
docs/plans/                # Implementation plans (see Planning convention)
```

## Design System

Source of truth: `tailwind.config.ts` and `next.config.js`.

### Brand Colors
- **Primary**: `#349cff` (blue) — dominant
- **Secondary**: `#F59E0B` (amber) — accent; use sparingly and with intention
- **Dark**: `#242424`
- **Gray**: light `#fafafa`, medium `#64646E`, border `#F0F0F0`

### Typography
Loaded via `next/font/local` (variable woff2 files in `public/fonts/`):
- **Body**: Satoshi — `var(--font-satoshi)`, utility `font-sans`
- **Headings**: Clash Display — `var(--font-clash-display)`, utility `font-heading`

Lean on size/weight contrast for hierarchy; pair Clash Display (display) with Satoshi (body).

### Custom Animations (Tailwind)
`animate-scroll`, `animate-float`, `animate-float-slow`, `animate-float-delayed`,
`animate-gradient-shift`, `animate-fade-in-up`, `animate-fade-in-up-delayed`,
`animate-pulse-glow`, `animate-slide-in-right`, `animate-scale-in`, `animate-bounce-subtle`.

### Other
- `@tailwindcss/typography` plugin powers blog prose (`prose` classes).
- Remote images allowed (`next.config.js`): `images.leadconnectorhq.com`,
  `storage.googleapis.com`, `assets.cdn.filesafe.space`, `img.youtube.com`.

## Code Quality Standards

- **TypeScript strict** — no `any`; explicit interfaces/prop types.
- **Components** — functional; `'use client'` only when client interactivity is needed.
- **Imports** — `@/` path alias for internal imports.
- **Naming** — PascalCase components (`Hero.tsx`), kebab-case routes (`demo-call/page.tsx`).
- **SEO** — every page exports `Metadata` (Next.js Metadata API); preserve JSON-LD / structured data.
- **Accessibility** — semantic HTML, ARIA on interactive elements, keyboard navigation.
- **Images** — use `next/image`. **Fonts** — `next/font/local` (already configured).

## Config / Secrets

Set in Vercel env (never commit). See `DEPLOYMENT.md` / `.env.example`:
- `STRIPE_SECRET_KEY` — checkout endpoint (`app/api/checkout`)
- SMTP/email credentials — nodemailer (contact + audit forms)

## Planning Convention

Implementation plans live in `docs/plans/` as `YYYY-MM-DD-<feature-name>.md`
(e.g. `docs/plans/2026-02-15-high-impact-design-improvements.md`).
