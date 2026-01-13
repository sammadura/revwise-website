import Button from '@/components/ui/Button';
import SMSDemo from '@/components/ui/SMSDemo';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';

export default function Home() {
  return (
    <>
      {/* Hero Section - Lead with Results */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <div className="text-center lg:text-left">
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm font-medium">Trusted by Local Businesses</span>
              </div>

              {/* Main headline with stats */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">84 New 5-Star Reviews</span>
                <br />
                in Just 74 Days
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                See how Bella&apos;s Flower Shop went from #2 to #1 on Google with automated review collection. No extra work. Just results.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button href="/demo-call" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-xl">
                  Start Free Trial
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  See How It Works
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-400">70+</p>
                  <p className="text-sm text-white/70">Hours Saved</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-400">$1,400</p>
                  <p className="text-sm text-white/70">Labor Saved</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-400">#1</p>
                  <p className="text-sm text-white/70">Google Rank</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive SMS Demo */}
            <div className="relative">
              <SMSDemo />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section id="case-study" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Good to <span className="text-primary">Unstoppable</span>
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              See the transformation that happened in just 74 days
            </p>
          </div>

          {/* Before/After Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Before */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative">
              <div className="absolute -top-4 left-8 bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                BEFORE
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Bella&apos;s Flower Shop</h3>
                    <p className="text-gray-500 text-sm">Bronx, NY</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Google Reviews</span>
                    <span className="font-bold text-xl text-gray-900">431</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Local Ranking</span>
                    <span className="font-bold text-xl text-gray-900">#2</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Review Responses</span>
                    <span className="font-bold text-xl text-gray-500">Manual</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Time Spent/Month</span>
                    <span className="font-bold text-xl text-gray-900">20+ hrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-primary/5 to-green-50 rounded-2xl p-8 border-2 border-primary relative shadow-lg">
              <div className="absolute -top-4 left-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                AFTER 74 DAYS
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Bella&apos;s Flower Shop</h3>
                    <p className="text-primary text-sm font-semibold">Powered by Revwise</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-primary/20">
                    <span className="text-gray-600">Google Reviews</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-gray-900">501</span>
                      <span className="text-green-600 text-sm font-semibold">+70</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary/20">
                    <span className="text-gray-600">Local Ranking</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-primary">#1</span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary/20">
                    <span className="text-gray-600">Review Responses</span>
                    <span className="font-bold text-xl text-green-600">Automated</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Time Spent/Month</span>
                    <span className="font-bold text-xl text-green-600">~0 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 text-center">
            <svg className="w-12 h-12 text-primary/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-700 italic mb-6">
              &quot;Revwise made collecting reviews effortless. We went from #2 to #1 in our area without lifting a finger. Now we&apos;re the most-reviewed florist in the Bronx!&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">LD</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Lea Davis</p>
                <p className="text-gray-500 text-sm">Owner, Bella&apos;s Flower Shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              White-Glove Setup
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Revwise Works
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              We handle everything. You just show up to a quick onboarding call.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Book Your Setup Call</h3>
                <p className="text-gray-600">
                  Schedule a quick onboarding call. We&apos;ll walk you through everything and connect your business.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">We Connect Everything</h3>
                <p className="text-gray-600">
                  On the call, we link your Google Business Profile, set up automations, and customize your messaging.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Watch Reviews Roll In</h3>
                <p className="text-gray-600">
                  Automated SMS requests go out. 5-star reviews come in. You focus on running your business.
                </p>
              </div>
            </div>
          </div>

          {/* CTA under How It Works */}
          <div className="text-center mt-12">
            <Button href="/demo-call" variant="primary" className="text-lg px-8 py-4">
              Book Your Free Setup Call
            </Button>
            <p className="text-gray-500 text-sm mt-3">Takes about 15 minutes. We do the heavy lifting.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Revwise in Action
              </h2>
              <p className="text-lg text-gray-medium">
                Watch a quick demo of how we help businesses get more reviews
              </p>
            </div>
            <div className="bg-gray-light p-4 md:p-8 rounded-2xl border border-gray-border">
              <div className="aspect-video bg-gradient-to-br from-primary to-blue-700 rounded-lg overflow-hidden relative">
                <YouTubeEmbed
                  videoId="GGNqGZ0AUo4"
                  title="Revwise Demo - See how we help businesses get more Google reviews"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Simple Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One Plan. Everything Included.
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              No hidden fees. No complicated tiers. Just results.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-primary overflow-hidden">
              {/* Price header */}
              <div className="bg-primary text-white p-8 text-center">
                <p className="text-sm font-medium uppercase tracking-wide mb-2 opacity-90">Everything You Need</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold">$99</span>
                  <span className="text-xl opacity-90">/month</span>
                </div>
                <p className="mt-3 text-white/80">14-day free trial. Cancel anytime.</p>
              </div>

              {/* Features list */}
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    'Unlimited review requests',
                    'Automated SMS & email campaigns',
                    'AI-powered review responses',
                    'Smart review routing',
                    'Real-time dashboard & analytics',
                    'Google Business Profile integration',
                    'Dedicated support',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/demo-call" variant="primary" className="w-full text-lg py-4 font-bold">
                    Start Your Free Trial
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>

            {/* ROI callout */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <p className="text-green-800 font-semibold">
                <span className="text-green-600">Bella&apos;s saved $1,400/month</span> in labor costs alone.
                <br />
                Revwise pays for itself 14x over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Dominate Local Search
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Powerful features designed to boost your online reputation automatically
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">SMS Review Requests</h3>
              <p className="text-gray-600 text-sm">
                Personalized text messages that get responses. 98% open rate vs 20% for email.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">AI Response Writer</h3>
              <p className="text-gray-600 text-sm">
                Every review gets a personalized response. Positive or negative, we&apos;ve got you covered 24/7.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Smart Routing</h3>
              <p className="text-gray-600 text-sm">
                Happy customers go to Google. Unhappy ones come to you first, privately.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Live Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Real-time analytics. Track reviews, responses, and your ranking progress.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Perfect Timing</h3>
              <p className="text-gray-600 text-sm">
                Send requests at the optimal moment when customers are happiest with your service.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">One-Click Setup</h3>
              <p className="text-gray-600 text-sm">
                Connect your Google Business Profile in minutes. No technical skills needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-primary via-primary to-blue-700 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Be #1 in Your Area?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join businesses like Bella&apos;s Flower Shop who went from good to unstoppable with Revwise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/demo-call" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-xl">
              Start Your Free Trial
            </Button>
          </div>
          <p className="text-white/70 text-sm">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </>
  );
}
