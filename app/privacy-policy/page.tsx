import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Revwise',
  description: 'Revwise Privacy Policy - Learn how we collect, use, and protect your information',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-light py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-medium">Last Updated: March 15, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Important Notice */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-bold mb-2 mt-0">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h2>
              <p className="mb-0">REVWISE LLC does not share customer opt-in information with affiliates or third parties, and all text messaging opt-in data is kept strictly confidential.</p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Interpretation and Definitions</h2>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li><strong>Account:</strong> A unique account created for you to access our Service</li>
                <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party</li>
                <li><strong>Company:</strong> Refers to REVWISE LLC</li>
                <li><strong>Cookies:</strong> Small files placed on your device</li>
                <li><strong>Device:</strong> Any device that can access the Service</li>
                <li><strong>Personal Data:</strong> Information that relates to an identified or identifiable individual</li>
                <li><strong>Service:</strong> Refers to the Website and related services</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Email address</li>
                <li>Name (first and last)</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Payment information</li>
                <li>Text message opt-in records</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Non-Personal Information</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Usage patterns and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Customer Communication</h3>
              <p>We collect information from:</p>
              <ul>
                <li>Service requests and inquiries</li>
                <li>Appointment bookings</li>
                <li>Customer feedback and reviews</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To manage your Account</li>
                <li>To process transactions</li>
                <li>To send automated review requests</li>
                <li>To contact you with updates and communications</li>
                <li>To provide customer support</li>
                <li>To analyze usage and improve our Service</li>
                <li>For security and fraud prevention</li>
                <li>To comply with legal obligations</li>
                <li>For business transfers (mergers, acquisitions)</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. SMS Messaging & Compliance</h2>

              <h3 className="text-xl font-semibold mb-3">Text Message Program Terms</h3>
              <p>By opting in to receive text messages, you consent to receive automated appointment reminders, review requests, and service-related communications.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-In & Consent (TCPA Compliance)</h3>
              <p>We collect explicit consent before sending any text messages. Your consent is documented and stored securely.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-Out Instructions</h3>
              <p>You may opt out at any time by replying <strong>STOP</strong> to any text message. You will receive a confirmation of your opt-out request.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Message Frequency & Content</h3>
              <p>Message frequency varies based on your service usage. Messages may include appointment confirmations, reminders, and review requests.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Help & Support</h3>
              <p>For assistance, reply <strong>HELP</strong> or email us at <a href="mailto:sam@getrevwise.com" className="text-primary hover:text-blue-600">sam@getrevwise.com</a></p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Carrier Information</h3>
              <p>Message and data rates may apply. Our service works with all major U.S. carriers.</p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Information Sharing & Disclosure</h2>
              <p>We may share your information in the following situations:</p>

              <h3 className="text-xl font-semibold mb-3 mt-4">Service Providers</h3>
              <p>We work with third-party service providers for payment processing, scheduling, and SMS delivery.</p>

              <h3 className="text-xl font-semibold mb-3 mt-4">Legal Compliance</h3>
              <p>We may disclose information when required by law or to protect our rights.</p>

              <h3 className="text-xl font-semibold mb-3 mt-4">Business Transfers</h3>
              <p>If we are involved in a merger or acquisition, your information may be transferred.</p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p>We implement security measures including:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach protocols</li>
                <li>Regular backups and disaster recovery systems</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Cookies & Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies for:</p>
              <ul>
                <li>Analytics and usage patterns</li>
                <li>User preferences</li>
                <li>Service functionality</li>
                <li>Marketing effectiveness measurement</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Your Rights & Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request corrections to your data</li>
                <li>Withdraw consent for data processing</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p>Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none pl-0">
                <li><strong>Email:</strong> <a href="mailto:sam@getrevwise.com" className="text-primary hover:text-blue-600">sam@getrevwise.com</a></li>
                <li><strong>Website:</strong> <a href="https://www.getrevwise.com" className="text-primary hover:text-blue-600">www.getrevwise.com</a></li>
              </ul>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="text-primary hover:text-blue-600 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
