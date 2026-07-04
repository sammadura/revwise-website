/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old GHL landing page routes → new equivalents
      { source: '/demo', destination: '/contact', permanent: true },
      // /demo-call retired 2026-07 (GHL booking widget removed) → book-a-call page
      { source: '/demo-call', destination: '/contact', permanent: true },
      { source: '/demo-call/thank-you', destination: '/contact', permanent: true },
      // /pricing retired 2026-07 — its content moved into /contact (the CTA page);
      // homepage keeps a pricing section at /#pricing
      { source: '/pricing', destination: '/contact', permanent: true },
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
