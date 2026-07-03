'use client';

import Link from 'next/link';

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-footer-green flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">💐</div>
        <h1 className="text-3xl font-heading font-semibold text-white mb-4">
          Welcome to RevWise!
        </h1>
        <p className="text-moss/90 text-lg mb-2">
          Your 14-day free trial has started.
        </p>
        <p className="text-moss/70 mb-8">
          Sam will reach out within 24 hours to get your shop set up and
          your first review requests flowing.
        </p>
        <Link
          href="/"
          className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
