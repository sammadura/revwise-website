import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - RevWise | $99/mo Automated Google Review Generation',
  description: 'One plan, everything included. Automated SMS & email review requests, real-time dashboard, done-for-you setup in 48 hours. No contracts. 14-day free trial.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'RevWise Pricing - $99/mo for More Google Reviews',
    description: 'Automated review generation for local service businesses. One plan, everything included. 14-day free trial.',
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
