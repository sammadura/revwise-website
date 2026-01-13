# Deployment Guide

## Pre-Deployment Checklist

### ✅ Before You Start

- [ ] Node.js 18+ is installed
- [ ] Project runs locally without errors (`npm run dev`)
- [ ] All content is updated and correct
- [ ] Forms are connected to your backend/CRM
- [ ] Calendar booking widget is integrated
- [ ] Analytics tracking is added
- [ ] All images load correctly
- [ ] Mobile responsive on all pages
- [ ] All links work

### ✅ Content Review

- [ ] Company logo is correct
- [ ] All text content is accurate
- [ ] Contact information is up to date
- [ ] Testimonials are real (not placeholders)
- [ ] CTA buttons link to correct destinations
- [ ] Footer links are correct

## Deployment to Vercel (Recommended)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Free plan is sufficient for this site

### Step 2: Push to GitHub

```bash
# Initialize git repository
cd revwise-rebuild
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Revwise rebuild"

# Create GitHub repo (via GitHub.com or CLI)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/revwise-rebuild.git
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Via Vercel Dashboard**

1. Log in to Vercel
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework: Next.js (auto-detected)
5. Click "Deploy"
6. Wait 2-3 minutes
7. Get your preview URL: `revwise-new.vercel.app`

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? revwise-rebuild
# - Directory? ./ (press enter)
# - Override settings? No

# Get preview URL
```

### Step 4: Test Preview Site

Visit your preview URL and test:

- [ ] Home page loads
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] Mobile menu works
- [ ] All images load
- [ ] Contact page works
- [ ] Demo booking page works
- [ ] No console errors

### Step 5: Add Custom Domain

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add domain: `getrevwise.com`
3. Add domain: `www.getrevwise.com`
4. Vercel will show DNS instructions

### Step 6: Update DNS Records

In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**For root domain (`getrevwise.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Important:**
- Remove or update old DNS records that point to current site
- DNS changes take 5-60 minutes to propagate

### Step 7: Verify SSL Certificate

- Vercel automatically generates SSL certificates
- Check that both URLs work with HTTPS:
  - `https://getrevwise.com`
  - `https://www.getrevwise.com`

### Step 8: Monitor

First 24 hours after launch:
- Check Google Analytics for traffic
- Monitor error logs in Vercel dashboard
- Test all forms are receiving submissions
- Check page load times
- Monitor Google Search Console

---

## Alternative: Deploy to Netlify

### Step 1: Build Settings

```bash
# Build command
npm run build

# Publish directory
.next
```

### Step 2: Deploy

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Step 3: DNS Configuration

Similar to Vercel, but point to Netlify's DNS:
```
Type: A
Name: @
Value: (Netlify will provide)

Type: CNAME
Name: www
Value: (Your Netlify subdomain)
```

---

## Post-Deployment Tasks

### Immediate (Day 1)

- [ ] Test all functionality on live site
- [ ] Submit sitemap to Google Search Console
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Check mobile performance with PageSpeed Insights
- [ ] Send test emails/forms
- [ ] Share with team for feedback

### Week 1

- [ ] Monitor analytics daily
- [ ] Check for any 404 errors
- [ ] Monitor form submissions
- [ ] Review site speed metrics
- [ ] Check search engine indexing
- [ ] Gather user feedback

### Month 1

- [ ] Review conversion rates
- [ ] A/B test different CTAs
- [ ] Optimize based on user behavior
- [ ] Add additional features if needed

---

## Rollback Plan

If something goes wrong after launch:

### Quick Rollback (5-10 minutes)

1. Go to your DNS provider
2. Update A/CNAME records to point back to old site
3. Wait for DNS propagation
4. Old site is live again

### Keep Old Site as Backup

- Don't delete old site for 2-4 weeks
- Keep as backup in case of issues
- Can run both simultaneously on different URLs

---

## Troubleshooting

### "Site won't load after DNS change"

- DNS can take up to 24 hours (usually 5-60 minutes)
- Clear browser cache
- Try incognito mode
- Check DNS propagation: https://dnschecker.org

### "Forms not working"

- Check form handler is connected
- Check browser console for errors
- Verify API endpoints are correct
- Test with different browsers

### "Images not loading"

- Check image URLs in code
- Verify Next.js image optimization settings
- Check network tab in browser dev tools
- Ensure images are accessible

### "Slow performance"

- Check Vercel analytics dashboard
- Run PageSpeed Insights
- Optimize images if needed
- Check for JavaScript errors

---

## Environment Variables

If you need to add secrets (API keys, etc.):

### In Vercel:
1. Project Settings → Environment Variables
2. Add variable (e.g., `SENDGRID_API_KEY`)
3. Redeploy

### In code:
```typescript
// Access with:
process.env.SENDGRID_API_KEY
```

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **DNS Help**: https://vercel.com/docs/concepts/projects/domains
- **SSL Issues**: https://vercel.com/docs/concepts/projects/custom-domains#ssl

---

**Good luck with your launch! 🚀**
