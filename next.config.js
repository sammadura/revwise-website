/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const OF = 'https://openflower.co';
    return [
      // 2026-11-24 (Sam): RevWise is sold as "Review requests" on openflower.co. Every marketing page
      // goes there. Kept on this domain: /privacy-policy and /terms-and-conditions (texting and ad
      // registrations cite them) and /api. The app (app.revwise.us) is a different site and unchanged.
      { source: '/', destination: OF + '/reviews', permanent: true },
      { source: '/pricing', destination: OF + '/pricing', permanent: true },
      { source: '/contact', destination: OF + '/about', permanent: true },
      { source: '/audit', destination: OF + '/reviews', permanent: true },
      { source: '/preview', destination: OF + '/reviews', permanent: true },
      { source: '/blog', destination: OF + '/guides', permanent: true },
      { source: '/blog/how-to-ask-customers-for-reviews', destination: OF + '/guides/asking-for-reviews', permanent: true },
      { source: '/blog/:slug', destination: OF + '/guides', permanent: true },
      // Old GHL landing page routes → new equivalents
      { source: '/demo', destination: '/contact', permanent: true },
      // /demo-call retired 2026-07 (GHL booking widget removed) → book-a-call page
      { source: '/demo-call', destination: '/contact', permanent: true },
      { source: '/demo-call/thank-you', destination: '/contact', permanent: true },
      // contact form + thank-you retired 2026-07 (CTA is a mailto link now)
      { source: '/contact/thank-you', destination: '/contact', permanent: true },
      { source: '/home-9738-792467', destination: '/', permanent: true },
      { source: '/privacy-policy-293718', destination: '/privacy-policy', permanent: true },
      { source: '/terms-and-conditions-293718', destination: '/terms-and-conditions', permanent: true },
      // Catch old GHL pattern routes
      { source: '/home-:slug', destination: '/', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

module.exports = nextConfig;
