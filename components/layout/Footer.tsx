import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Revwise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Turn happy customers into raving fans with automated Google review collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <p className="text-gray-300 text-sm mb-4">
              Ready to boost your online reputation?
            </p>
            <Link
              href="/demo-call"
              className="inline-block bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms and Conditions
            </Link>
          </div>
          <p>© {currentYear} Revwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
