# Florist rebrand — full site repositioning for flower shops

**Status:** in progress (PR 1 of 4).
**Created:** 2026-07-03
**Supersedes:** `2026-06-08-replace-booking-integration.md` (GHL removal lands in PR 1 here).

## Why

RevWise is focusing on florists. The site currently pitches generic local service
businesses (plumbers, HVAC, roofers); it should speak solely to flower-shop owners.

## Locked decisions

1. **Offer:** the existing review tool, florist-framed. A clear product pitch.
2. **Scope:** homepage + pricing + contact/demo-call. Blog and `/audit` stay as-is this pass.
3. **Design:** fresh warm/botanical redesign — fern `#3F5D44` / terracotta `#B5562F` /
   cream `#FAF6EF` palette, Fraunces display serif replacing Clash Display, owl logo unchanged.
4. **Primary CTA:** "Book a call with Sam" (founder-led). Stripe checkout stays functional
   but demoted to a text link.

## Copy rules (hard)

- Never claim review-gating / sentiment-routing. Same request to every eligible customer;
  "Policy-Safe by Design" is the differentiator.
- Never sell unbuilt features as live (dashboard = "coming soon").
- Canonical numbers only: $99/mo everything included · 14-day trial · 52% email open rate ·
  8–12% click-through · one 45-minute setup call, live within 48 hours · "one Bronx flower
  shop: 431→501 Google reviews in 74 days" (unnamed — the named case study, its testimonial
  video, and its derived ROI/ranking figures are retired and must not be reintroduced).
- Competitor comparison on price/setup/contract facts only (Podium $399, Birdeye $349).

## PR sequence

1. **PR 1 — contact flow + GHL removal + claims cleanup** (this PR):
   new `app/api/contact/route.ts` + `components/ui/ContactForm.tsx` (react-hook-form,
   honeypot, mailto fallback); `app/contact` rebuilt as the book-a-call page; `app/demo-call/`
   deleted with permanent redirects to `/contact`; footer link fixes; sitemap; retired
   case-study assets and non-canonical stats removed site-wide; dead `SMSDemo` (v1) deleted.
2. **PR 2 — design system + shell:** Tailwind palette, Fraunces via `next/font/google`,
   `app/layout.tsx` metadata/JSON-LD, Header/Footer redesign, dead-code deletion
   (`components/sections/Hero.tsx`, `LogoShowcase.tsx`, `CALENDAR_CUSTOM_CSS.css`),
   `remotePatterns` prune, new `BotanicalAccents` component.
3. **PR 3 — homepage rebuild:** `HomeContent.tsx` rewritten florist-only (hero with proof
   line, holiday-rush pain section, how-it-works, slim proof strip, features bento, pricing
   teaser, FAQ, final CTA); `SMSDemoV2` reskin.
4. **PR 4 — pricing rebuild + polish:** pricing page florist rewrite, book-a-call primary CTA,
   Stripe demoted, metadata; final grep: `go.getrevwise.com|leadconnectorhq` → zero hits.

## Capability verification gate (before PR 3/4 copy ships)

Verify against the product before claiming: (1) send trigger granularity — default to
"after every order" unless pickup/delivery awareness is confirmed; (2) configurable send
timing windows (wedding/sympathy FAQ answer) — cut if not real; (3) whether `/audit`
compares against local florists — soften copy if generic.

## Verification (every PR)

`npm run lint` + `npm run build` exit 0; dev-server eyeball of `/`, `/pricing`, `/contact`,
`/blog`, `/audit`, `/checkout/success`; redirect checks (`/demo-call` → `/contact` 308);
contact form send with and without SMTP env (graceful fallback); mobile 375px pass;
copy-audit grep for gating language and non-canonical numbers.
