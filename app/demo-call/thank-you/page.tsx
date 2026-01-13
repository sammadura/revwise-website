import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Demo Scheduled | Revwise',
  description: 'Your Revwise demo has been scheduled successfully',
};

export default function DemoThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demo Scheduled! 🎉
            </h1>

            <p className="text-xl text-gray-medium mb-8">
              We're excited to show you how Revwise can transform your review collection!
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>

            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Check Your Email</h3>
                  <p className="text-gray-medium text-sm">
                    You'll receive a calendar invite with the meeting link and all the details.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Get a Reminder</h3>
                  <p className="text-gray-medium text-sm">
                    We'll send you a reminder 24 hours before your scheduled demo.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Join the Demo</h3>
                  <p className="text-gray-medium text-sm">
                    Click the meeting link in your email at the scheduled time. We'll show you everything!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Preparation */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Get the Most Out of Your Demo
            </h3>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Think about your current review collection process and pain points</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Prepare any questions you have about Revwise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Have your Google Business Profile info handy (optional but helpful)</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Want to Learn More Before Your Demo?
            </h2>
            <p className="text-gray-medium mb-6">
              Explore our features and see how other businesses are succeeding with Revwise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/#features" variant="primary">
                Explore Features
              </Button>
              <Button href="/#testimonials" variant="secondary">
                Read Success Stories
              </Button>
            </div>
          </div>

          {/* Need to Reschedule */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2">Need to Reschedule?</h3>
            <p className="text-gray-medium text-sm mb-3">
              No problem! Use the link in your confirmation email to choose a different time.
            </p>
            <p className="text-sm text-gray-medium">
              Or contact us at{' '}
              <a
                href="mailto:sam@getrevwise.com"
                className="text-primary hover:text-blue-600 font-semibold"
              >
                sam@getrevwise.com
              </a>
            </p>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Home</h3>
              <p className="text-sm text-gray-medium">Return to homepage</p>
            </Link>

            <Link
              href="/#about"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">About Us</h3>
              <p className="text-sm text-gray-medium">Learn about Revwise</p>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Contact</h3>
              <p className="text-sm text-gray-medium">Have questions?</p>
            </Link>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-gray-medium text-lg font-medium">
              We can't wait to show you how Revwise works! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
