import Link from 'next/link';
import { Stem } from '../ui/BotanicalAccents';
import Logo from '../ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-green text-white py-12 relative overflow-hidden">
      {/* Botanical accent, bottom-right */}
      <div className="absolute -bottom-8 right-6 w-28 text-moss opacity-20 pointer-events-none">
        <Stem />
      </div>

      <div className="container-custom relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="dark" markClassName="h-8 w-8" textClassName="text-xl" />
            </div>
            <p className="text-moss/80 text-sm leading-relaxed">
              Automatic Google review requests for flower shops. Done for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-moss/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-moss/80 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-moss/80 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#results" className="text-moss/80 hover:text-white transition-colors text-sm">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-moss/80 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-moss/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <p className="text-moss/80 text-sm mb-4">
              Ready to get more Google reviews?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a call with Sam
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-moss/60 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
          <p>© {currentYear} RevWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
