'use client';

import Link from 'next/link';

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Welcome to RevWise!
        </h1>
        <p className="text-gray-400 text-lg mb-2">
          Your 14-day free trial has started.
        </p>
        <p className="text-gray-500 mb-8">
          We&apos;ll reach out within 24 hours to get your account set up and
          your first review requests flowing.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
