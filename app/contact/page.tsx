import { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Book a Call — RevWise for Flower Shops',
  description:
    'Tell Sam a little about your flower shop and he’ll email you by the end of the day to set up a 15-minute call. No pitch deck, no pressure.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-light to-white py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a call with Sam</h1>
            <p className="text-lg text-gray-medium max-w-xl mx-auto">
              Tell me a little about your shop and I&apos;ll email you by the end of the
              day to set up a 15-minute call. If RevWise isn&apos;t right for you,
              I&apos;ll tell you that too.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form — swap this column for a scheduler embed (Calendly/Cal.com)
                if one is ever set up; the form is self-contained. */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Prefer email?</h3>
                <a
                  href="mailto:sam@getrevwise.com?subject=Book%20a%20call%20about%20my%20flower%20shop"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Sam directly</p>
                    <p className="font-medium text-sm">sam@getrevwise.com</p>
                  </div>
                </a>
              </div>

              {/* What we'll cover */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">What we&apos;ll cover</h3>
                <ul className="space-y-3">
                  {[
                    'Where your Google profile stands today',
                    'How the review texting works for your orders',
                    'The one 45-minute setup call, if it’s a fit',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">A real person replies</p>
                    <p className="text-sm text-green-600">Sam emails back by end of day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
