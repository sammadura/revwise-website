# Quick Start Guide

Get your Revwise site running in 5 minutes.

## Step 1: Install Dependencies

```bash
cd revwise-rebuild
npm install
```

**This will take 2-3 minutes.**

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**✅ Your site is now running locally!**

---

## What You're Seeing

- **Home Page**: Hero, features, testimonials, CTA sections
- **Navigation**: Header with mobile menu
- **Contact Page**: `/contact` - working form
- **Demo Page**: `/demo-call` - calendar booking placeholder

---

## Quick Customizations

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#YOUR_COLOR",  // Line 11
}
```

### Update Content

Main content is in `app/page.tsx` - just edit the text directly.

### Add Your Logo

Replace the image URL in `components/layout/Header.tsx` (line 20).

### Connect Contact Form

Edit `app/contact/page.tsx` (line 25) - add your form handler.

---

## Ready to Deploy?

See `DEPLOYMENT.md` for full instructions, or quick deploy:

```bash
# Install Vercel
npm i -g vercel

# Deploy
vercel

# Follow prompts, get preview URL in 2 minutes
```

---

## File Structure (What's What)

```
app/
  ├── layout.tsx       ← Header, Footer, SEO
  ├── page.tsx         ← Home page content
  ├── contact/         ← Contact form
  └── demo-call/       ← Calendar booking

components/
  ├── ui/              ← Buttons, Cards (reusable)
  ├── sections/        ← Hero, Logo showcase
  └── layout/          ← Header, Footer

public/              ← Put images/files here
```

---

## Common Tasks

### Add a New Page

```bash
# Create directory
mkdir app/pricing

# Create page
touch app/pricing/page.tsx
```

```typescript
// app/pricing/page.tsx
export default function PricingPage() {
  return <div>Pricing content</div>;
}
```

Visit `/pricing` - it's live!

### Add Google Analytics

In `app/layout.tsx`, after line 40, add:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" />
```

### Add Calendly

```bash
npm install react-calendly
```

In `app/demo-call/page.tsx`:

```tsx
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/your-link" />
```

---

## Need Help?

- **Won't start?** Make sure Node.js 18+ is installed
- **Errors?** Try `rm -rf node_modules && npm install`
- **Questions?** Check `README.md` for detailed docs

---

## Next Steps

1. ✅ Site is running locally
2. Update content in `app/page.tsx`
3. Connect forms (`app/contact/page.tsx`)
4. Add calendar widget (`app/demo-call/page.tsx`)
5. Deploy to Vercel (see `DEPLOYMENT.md`)
6. Update DNS when ready to go live

**You're all set! 🎉**
