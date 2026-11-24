import type { Metadata } from 'next';
import HomeContent from '@/components/sections/HomeContent';

// Each page names its own canonical address (the root layout no longer sets '/' for all of them).
export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return <HomeContent />;
}
