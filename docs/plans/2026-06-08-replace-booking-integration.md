# Replace booking integration (GoHighLevel retirement)

**Status:** superseded by `2026-07-03-florist-rebrand.md` — GHL removal shipped in its PR 1
(native contact form + `/demo-call` redirects).
**Created:** 2026-06-08

## Why

GoHighLevel (GHL / LeadConnector) is being retired. The site embeds GHL widgets that will
stop working once the GHL account / `getrevwise.com` GHL subdomain goes away.

## Current state

- **Booking (the primary item):** `app/demo-call/page.tsx` (~line 43) embeds the GHL
  booking widget:
  `<iframe src="https://go.getrevwise.com/widget/booking/P7dxcssqKuxJWgO0LykB" ... />`
  (`go.getrevwise.com` = GHL white-label domain; `/widget/booking/<id>` = GHL booking widget).
- `app/demo-call/thank-you/page.tsx` tells the user they'll receive a calendar invite —
  copy may need adjusting depending on the replacement.

## Goal

Replace the GHL booking widget with a non-GHL scheduler so `/demo-call` keeps working
after GHL is gone.

## Options (decide later)

- **Cal.com** — open-source, embeddable (self-host or cloud); good data ownership.
- **Calendly** — quick embed (`react-calendly` or iframe).
- **Google/Microsoft native booking** — if calendar already lives there.

Decide on: cost, calendar sync, availability/round-robin needs, and lead/data ownership.

## Related GHL dependencies to migrate at the same time (don't miss these)

- **Contact form** — `app/contact/page.tsx` (~lines 35–53) is a GHL form embed
  (`data-layout-iframe-id="inline-..."`). Replace with the site's own form
  (`react-hook-form` + the `nodemailer` `app/api/...` pattern already used elsewhere).
- **Audit → CRM** — `app/api/audit/route.ts` (~line 742):
  `// TODO: Replace with GHL API integration to push leads into CRM`. Pick the new lead
  destination (currently leads are emailed via nodemailer).
- **Image CDN** — `images.leadconnectorhq.com` serves logos
  (`components/sections/LogoShowcase.tsx`; dns-prefetch in `app/layout.tsx`). Re-host those
  images off GHL infrastructure (and update `next.config.js` `remotePatterns`).

## Acceptance

- `/demo-call` books a meeting with no GHL dependency.
- No remaining references to `go.getrevwise.com`, `leadconnectorhq.com`, or GHL form/widget
  IDs (grep clean).
- `npm run build` and `npm run lint` pass.
