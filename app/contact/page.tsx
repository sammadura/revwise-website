'use client';

import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // Reload the form embed script after component mounts
    const script = document.createElement('script');
    script.src = 'https://go.getrevwise.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-light py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-medium">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Contact Form Embed */}
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

          <div className="mt-12 text-center">
            <p className="text-gray-medium mb-4">
              Or reach out directly:
            </p>
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
