import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
  weight: '300 900',
});

const clashDisplay = localFont({
  src: '../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-clash-display',
  display: 'swap',
  weight: '200 700',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://getrevwise.com'),
  title: 'Revwise - Get More Google Reviews & Boost Your Online Reputation',
  description: 'Turn happy customers into raving fans with automated Google review collection. Start getting the reviews you deserve and rank higher on Google.',
  keywords: 'Google reviews, review management, online reputation, customer reviews, review automation',
  authors: [{ name: 'Revwise' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Revwise - Automated Google Review Management',
    description: 'Get more Google reviews automatically. Turn happy customers into 5-star reviews.',
    type: 'website',
    url: 'https://getrevwise.com',
    siteName: 'Revwise',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Revwise - Get More Google Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revwise - Get More Google Reviews',
    description: 'Automated review collection for businesses',
    images: ['/og-image.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Revwise',
  applicationCategory: 'BusinessApplication',
  description: 'Automated Google review collection and management platform for businesses',
  url: 'https://getrevwise.com',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: '14-day free trial',
  },

  provider: {
    '@type': 'Organization',
    name: 'Revwise',
    url: 'https://getrevwise.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://images.leadconnectorhq.com" />
      </head>
      <body className={`${satoshi.variable} ${clashDisplay.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-71HEG90NPH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-71HEG90NPH');
          `}
        </Script>

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
