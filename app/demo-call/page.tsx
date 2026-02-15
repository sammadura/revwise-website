'use client';

import { useEffect } from 'react';

export default function DemoCallPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://go.getrevwise.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-light to-white py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-Day Free Trial
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Free Demo
            </h1>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              See how businesses like yours are getting 10x more Google reviews with RevWise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main booking widget */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                <div className="w-full" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://go.getrevwise.com/widget/booking/P7dxcssqKuxJWgO0LykB"
                    style={{
                      width: '100%',
                      height: '700px',
                      border: 'none',
                      overflow: 'hidden'
                    }}
                    scrolling="no"
                    id="P7dxcssqKuxJWgO0LykB_1768262742792"
                    title="Schedule a Demo"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar with trust signals */}
            <div className="space-y-6">
              {/* What you'll learn */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">What you&apos;ll learn:</h3>
                <ul className="space-y-4">
                  {[
                    'How RevWise automatically collects Google reviews',
                    'How to integrate with your existing systems',
                    'Best practices for maximizing review collection',
                    'Pricing that fits your business',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl border border-primary/10 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed mb-3">
                  &quot;RevWise made collecting reviews effortless. We went from #2 to #1 in our area!&quot;
                </p>
                <p className="text-sm font-semibold text-gray-900">Lea Davis</p>
                <p className="text-xs text-gray-500">Owner, Bella&apos;s Flower Shop</p>
              </div>

              {/* Quick stats */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">By the Numbers</h3>
                <div className="space-y-4">
                  {[
                    { value: '70+', label: 'Reviews in 74 days', color: 'text-primary' },
                    { value: '10%', label: 'Click-through rate', color: 'text-green-600' },
                    { value: '14x', label: 'ROI for clients', color: 'text-purple-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-baseline gap-3">
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                      <span className="text-gray-500 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* No commitment */}
              <div className="text-center text-sm text-gray-500 space-y-1">
                <p className="font-medium">No credit card required</p>
                <p>Free 14-day trial &middot; Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
