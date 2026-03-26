/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old GHL landing page routes → new equivalents
      { source: '/demo', destination: '/demo-call', permanent: true },
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
