import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Thank You | Revwise',
  description: 'Thank you for contacting Revwise',
};

export default function ThankYouPage() {
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
              Thanks for Reaching Out!
            </h1>

            <p className="text-xl text-gray-medium mb-8">
              We've received your message and will get back to you shortly.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>

            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We'll Review Your Message</h3>
                  <p className="text-gray-medium text-sm">
                    Our team will read your inquiry and prepare a personalized response.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expect a Response Within 24 Hours</h3>
                  <p className="text-gray-medium text-sm">
                    We typically respond within a few hours during business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Check Your Email</h3>
                  <p className="text-gray-medium text-sm">
                    We'll reach out to <strong>the email address you provided</strong> with next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Want to See Revwise in Action?
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Don't wait! Schedule a free demo now and see how we can help your business.
            </p>
            <Button
              href="/demo-call"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Schedule a Free Demo
            </Button>
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
              href="/#features"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Features</h3>
              <p className="text-sm text-gray-medium">See what we offer</p>
            </Link>

            <Link
              href="/#testimonials"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Testimonials</h3>
              <p className="text-sm text-gray-medium">See success stories</p>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center text-gray-medium">
            <p className="mb-2">Need immediate assistance?</p>
            <a
              href="mailto:sam@getrevwise.com"
              className="text-primary hover:text-blue-600 font-semibold"
            >
              sam@getrevwise.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
