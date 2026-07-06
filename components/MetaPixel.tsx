'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Meta Pixel, dormant until NEXT_PUBLIC_META_PIXEL_ID is set in Vercel env.
// Fires PageView on load + App Router navigations, ViewContent on /audit,
// and Contact on any mailto click (the book-a-call CTAs are mailto links,
// which the pixel can't see without an explicit event).
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!PIXEL_ID || !window.fbq) return;
    window.fbq('track', 'PageView');
    if (pathname === '/audit') window.fbq('track', 'ViewContent', { content_name: 'review-audit' });
  }, [pathname]);

  useEffect(() => {
    if (!PIXEL_ID) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.('a[href^="mailto:"]');
      if (link && window.fbq) window.fbq('track', 'Contact');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}
