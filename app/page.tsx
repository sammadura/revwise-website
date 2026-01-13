import Hero from '@/components/sections/Hero';
import Card, { CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';
import FeatureIllustration from '@/components/ui/FeatureIllustration';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Video/Demo Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-light p-8 rounded-lg border border-gray-border">
              <div className="aspect-video bg-gradient-to-br from-primary to-blue-700 rounded-lg overflow-hidden relative">
                <YouTubeEmbed
                  videoId="GGNqGZ0AUo4"
                  title="Revwise Demo - See how we help businesses get more Google reviews"
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <Button href="/demo-call" variant="primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Features Section */}
      <section id="about" className="section bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Revwise?
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              We make it easy to collect and manage Google reviews automatically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardTitle icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }>
                Automated Collection
              </CardTitle>
              <CardContent>
                Send personalized text or email review requests automatically after key customer moments. No manual work required.
              </CardContent>
            </Card>

            <Card>
              <CardTitle icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }>
                Smart Response Automation
              </CardTitle>
              <CardContent>
                Our system crafts and posts tailored responses to every review, maintaining your online presence 24/7.
              </CardContent>
            </Card>

            <Card>
              <CardTitle icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }>
                Intelligent Routing
              </CardTitle>
              <CardContent>
                Direct happy customers to Google while privately handling negative feedback before it goes public.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Powerful features designed to boost your online reputation
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get More 5-Star Reviews
                </h3>
                <p className="text-gray-medium text-lg leading-relaxed mb-6">
                  Automatically request reviews from satisfied customers at the perfect moment. Our timing algorithms ensure maximum response rates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">Personalized review invitations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">Multi-channel delivery (SMS & Email)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">Automated follow-up sequences</span>
                  </li>
                </ul>
              </div>
              <FeatureIllustration variant="reviews" />
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <FeatureIllustration variant="responses" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Respond to Every Review Instantly
                </h3>
                <p className="text-gray-medium text-lg leading-relaxed mb-6">
                  Never miss a review again. Our AI-powered system responds professionally to positive and negative reviews automatically.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">AI-generated personalized responses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">24/7 monitoring and responses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-medium">Brand voice customization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Join hundreds of businesses already using Revwise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <div className="flex items-center mb-4" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardContent>
                  "Revwise has transformed how we collect reviews. We've seen a 300% increase in Google reviews in just 2 months!"
                </CardContent>
                <div className="mt-4 pt-4 border-t border-gray-border">
                  <p className="font-semibold text-dark">Business Owner</p>
                  <p className="text-sm text-gray-medium">Local Service Company</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get More Reviews?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button href="/demo-call" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Start Free Trial
          </Button>
        </div>
      </section>
    </>
  );
}
