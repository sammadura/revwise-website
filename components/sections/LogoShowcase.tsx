'use client';

import Image from 'next/image';

export default function LogoShowcase() {
  const logos = [
    {
      src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/JXQHXZnDDNz7dCgIO7gP/media/693de06cca729808c8b29fb0.png',
      alt: 'Partner Logo 1',
    },
    {
      src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/caqjXomAvmGGYfrHmW72/media/693ddfca97c02378ebe5c396.png',
      alt: 'Partner Logo 2',
    },
  ];

  // Duplicate logos for seamless animation
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-transparent py-8 px-4 rounded-lg overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll space-x-16">
          {allLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
