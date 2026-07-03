/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old GHL landing page routes → new equivalents
      { source: '/demo', destination: '/contact', permanent: true },
      // /demo-call retired 2026-07 (GHL booking widget removed) → book-a-call form
      { source: '/demo-call', destination: '/contact', permanent: true },
      { source: '/demo-call/thank-you', destination: '/contact/thank-you', permanent: true },
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
        hostname: 'images.leadconnectorhq.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

module.exports = nextConfig;
