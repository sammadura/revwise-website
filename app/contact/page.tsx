'use client';

import { useEffect } from 'react';

export default function ContactPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-medium max-w-xl mx-auto">
              Have questions about RevWise? We&apos;d love to hear from you. Fill out the form or reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
                <div className="w-full" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://go.getrevwise.com/widget/form/5gnC27c0aQmke3F6tFQY"
                    style={{
                      width: '100%',
                      height: '700px',
                      border: 'none',
                      borderRadius: '15px'
                    }}
                    id="inline-5gnC27c0aQmke3F6tFQY"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form"
                    data-height="undefined"
                    data-layout-iframe-id="inline-5gnC27c0aQmke3F6tFQY"
                    data-form-id="5gnC27c0aQmke3F6tFQY"
                    title="Website Form"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Reach Out Directly</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sam@getrevwise.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-sm">sam@getrevwise.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">Quick Response</p>
                    <p className="text-sm text-green-600">Usually within a few hours</p>
                  </div>
                </div>
              </div>

              {/* CTA to demo */}
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white text-center">
                <h3 className="font-bold text-lg mb-2">Want to see it in action?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Book a free demo and we&apos;ll walk you through everything.
                </p>
                <a
                  href="/demo-call"
                  className="inline-block bg-white text-primary px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
