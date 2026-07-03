import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — RevWise | $99/mo Google Review Automation for Flower Shops',
  description: 'One plan, everything included. Automatic text & email review requests after every order, done-for-you setup in 48 hours. No contracts. 14-day free trial.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'RevWise Pricing — $99/mo for More Google Reviews',
    description: 'Google review automation built for flower shops. One plan, everything included. 14-day free trial.',
    url: 'https://getrevwise.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
