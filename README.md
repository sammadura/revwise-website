# Revwise Website

Marketing website for RevWise (automated Google review collection & reputation
management). Live at **https://getrevwise.com**, deployed on Vercel.

Built with Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # run to verify before shipping
npm run lint
```

## Where things are

**`CLAUDE.md`** is the maintained dev guide — full project structure, design system
(brand colors, fonts), and code conventions. In short:

- `app/` — pages/routes (home, pricing, blog, audit tool, contact, demo-call) and
  `app/api/` (audit, checkout)
- `components/` — `layout/`, `sections/`, `ui/`
- `content/blog/` + `lib/blog.ts` — blog posts
- `public/` — static assets and fonts

## Deploy

Vercel (production: getrevwise.com). Environment variables, secrets, and deploy notes:
see **`DEPLOYMENT.md`**.

## Notes

Some integrations currently run through GoHighLevel (the `/demo-call` booking widget, the
contact-form embed, and lead-CDN images). Migration planning lives in `docs/plans/`.
