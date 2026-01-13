import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Revwise',
  description: 'Revwise Terms and Conditions - Read our terms of service and usage policies',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-light py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-medium">Last Updated: March 15, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Important Notice */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-bold mb-2 mt-0">IMPORTANT NOTICE</h2>
              <p className="mb-0">Please read these Terms and Conditions carefully before using our services. By accessing or using Revwise, you agree to be bound by these terms.</p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Revwise service ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use this Service.</p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. SMS Text Messaging Program Terms</h2>

              <h3 className="text-xl font-semibold mb-3">Program Description</h3>
              <p>Revwise offers an automated text messaging service to send appointment reminders, review requests, and service-related communications to customers who have opted in to receive such messages.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-In Requirement</h3>
              <p>By providing your mobile phone number and opting in, you consent to receive automated text messages from Revwise or on behalf of our clients. Consent is not a condition of purchase.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Message Frequency</h3>
              <p>Message frequency varies depending on your interaction with our clients' services. You may receive appointment confirmations, reminders, follow-up messages, and review requests.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Message and Data Rates</h3>
              <p>Message and data rates may apply. Please check with your mobile carrier for details on your plan.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Supported Carriers</h3>
              <p>Our service works with all major U.S. mobile carriers including AT&T, T-Mobile, Verizon, Sprint, and others.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">How to Opt-Out</h3>
              <p>You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message you receive. You will receive a confirmation message acknowledging your opt-out request.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Help and Support</h3>
              <p>For help or more information, reply <strong>HELP</strong> to any text message, or contact us at <a href="mailto:sam@getrevwise.com" className="text-primary hover:text-blue-600">sam@getrevwise.com</a></p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
              <p>Revwise provides automated review collection and reputation management services including:</p>
              <ul>
                <li>Automated SMS and email review requests</li>
                <li>Review monitoring and analytics</li>
                <li>Customer communication management</li>
                <li>Appointment scheduling and reminders</li>
                <li>Integration with Google Business Profile and other platforms</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. User Accounts and Registration</h2>
              <p>To use certain features of our Service, you may be required to create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Acceptable Use Policy</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Send unsolicited messages or spam</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Harass, abuse, or harm others</li>
                <li>Collect user information without consent</li>
                <li>Impersonate others or misrepresent your affiliation</li>
                <li>Interfere with the Service's operation</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Subscription and Payment Terms</h2>

              <h3 className="text-xl font-semibold mb-3">Billing</h3>
              <p>Subscription fees are billed in advance on a recurring basis (monthly or annually, depending on your plan). You authorize us to charge your payment method for all fees.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Price Changes</h3>
              <p>We reserve the right to modify our pricing with 30 days' notice. Continued use of the Service after price changes constitutes acceptance.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Refunds</h3>
              <p>Refunds are handled on a case-by-case basis. Please contact us at <a href="mailto:sam@getrevwise.com" className="text-primary hover:text-blue-600">sam@getrevwise.com</a> to discuss refund requests.</p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Cancellation and Termination</h2>

              <h3 className="text-xl font-semibold mb-3">Your Right to Cancel</h3>
              <p>You may cancel your subscription at any time through your account settings or by contacting us. Cancellation will take effect at the end of your current billing period.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Our Right to Terminate</h3>
              <p>We reserve the right to suspend or terminate your access to the Service if you violate these Terms, engage in fraudulent activity, or for any other reason at our discretion.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Effect of Termination</h3>
              <p>Upon termination, your right to use the Service will cease immediately. We may delete your account data in accordance with our data retention policies.</p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property Rights</h2>
              <p>The Service and its original content, features, and functionality are owned by REVWISE LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              <p className="mt-4">You may not copy, modify, distribute, sell, or lease any part of our Service without express written permission.</p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. User-Generated Content</h2>
              <p>By submitting content to the Service (including reviews, feedback, and communications), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content for the purpose of providing and improving our Service.</p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Third-Party Services and Links</h2>
              <p>Our Service may contain links to third-party websites or services (including Google, payment processors, and communication platforms). We are not responsible for the content, privacy policies, or practices of any third-party sites.</p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-xl font-semibold mb-3">Service "As Is"</h3>
              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">No Guarantee of Results</h3>
              <p>While we strive to help you collect more reviews, we do not guarantee specific results, review volumes, or business outcomes.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, REVWISE LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless REVWISE LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Service or violation of these Terms.</p>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Compliance with Laws</h2>
              <p>You agree to comply with all applicable laws and regulations, including:</p>
              <ul>
                <li>Telephone Consumer Protection Act (TCPA)</li>
                <li>CAN-SPAM Act</li>
                <li>General Data Protection Regulation (GDPR) if applicable</li>
                <li>California Consumer Privacy Act (CCPA) if applicable</li>
                <li>Other federal, state, and local laws regarding communications and privacy</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Dispute Resolution and Governing Law</h2>

              <h3 className="text-xl font-semibold mb-3">Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Dispute Resolution</h3>
              <p>Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules, except where prohibited by law.</p>
            </section>

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
              <p className="mt-4">Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.</p>
            </section>

            {/* Section 16 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
            </section>

            {/* Section 17 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">17. Age Restrictions</h2>
              <p>The Service is intended for users who are at least 18 years of age. By using the Service, you represent that you are at least 18 years old.</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
              <p>If you have questions about these Terms and Conditions, please contact us:</p>
              <ul className="list-none pl-0">
                <li><strong>Email:</strong> <a href="mailto:sam@getrevwise.com" className="text-primary hover:text-blue-600">sam@getrevwise.com</a></li>
                <li><strong>Website:</strong> <a href="https://www.getrevwise.com" className="text-primary hover:text-blue-600">www.getrevwise.com</a></li>
              </ul>
            </section>

            {/* Agreement */}
            <section className="mb-8">
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Agreement</h3>
                <p className="text-sm text-gray-medium mb-0">
                  By using Revwise, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
                </p>
              </div>
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
