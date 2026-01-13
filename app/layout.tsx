import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Revwise - Get More Google Reviews & Boost Your Online Reputation',
  description: 'Turn happy customers into raving fans with automated Google review collection. Start getting the reviews you deserve and rank higher on Google.',
  keywords: 'Google reviews, review management, online reputation, customer reviews, review automation',
  authors: [{ name: 'Revwise' }],
  openGraph: {
    title: 'Revwise - Automated Google Review Management',
    description: 'Get more Google reviews automatically. Turn happy customers into 5-star reviews.',
    type: 'website',
    url: 'https://getrevwise.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revwise - Get More Google Reviews',
    description: 'Automated review collection for businesses',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
