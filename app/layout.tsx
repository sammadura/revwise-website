import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Fraunces } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MetaPixel from '@/components/MetaPixel';
import { Analytics } from '@vercel/analytics/next';

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
  weight: '300 900',
});

// Display serif for headings — self-hosted at build time by next/font.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://getrevwise.com'),
  title: 'RevWise — Google Review Automation for Flower Shops | $49/mo',
  description: 'RevWise asks your customers for a Google review after every order, automatically. Built for florists. One-step setup: copy your shop address. $49/mo. Cancel anytime.',
  keywords: 'florist Google reviews, flower shop reviews, review automation for florists, florist marketing, Google reviews for flower shops',
  authors: [{ name: 'RevWise' }],
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
    title: 'RevWise — Google Review Automation for Flower Shops',
    description: 'RevWise asks your customers for a Google review after every order, automatically. Built for florists. $49/mo. Copy your shop address to start.',
    type: 'website',
    url: 'https://getrevwise.com',
    siteName: 'RevWise',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RevWise — Google review automation for flower shops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevWise — Google Review Automation for Flower Shops',
    description: 'Automatic Google review requests for florists. $49/mo. One-step setup.',
    images: ['/og-image.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RevWise',
  applicationCategory: 'BusinessApplication',
  description: 'Automatic Google review requests for flower shops — texts customers after every order and turns them into Google reviews.',
  url: 'https://getrevwise.com',
  operatingSystem: 'Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Florists',
  },
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'USD',
    description: '$49/month. Charged on the first captured order, or day 7. Cancel anytime.',
  },
  provider: {
    '@type': 'Organization',
    name: 'RevWise',
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
      </head>
      <body className={`${satoshi.variable} ${fraunces.variable} font-sans`}>
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
        <MetaPixel />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
