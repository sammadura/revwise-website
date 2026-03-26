'use client';

import Button from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimations';

const features = [
  {
    name: 'Automated SMS & Email Review Requests',
    description: 'After every job, your customer gets a personalized text and email asking for a Google review. One tap, done.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Direct Google Review Links',
    description: 'No friction. Your customers tap one link and go straight to your Google review page. No searching, no confusion.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    name: 'Smart Timing & Follow-ups',
    description: 'Messages go out when customers are most likely to respond. If they don\'t, a gentle follow-up does the work for you.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Real-Time Dashboard',
    description: 'See exactly how many reviews you\'re getting, your response rates, and how you stack up against competitors. Updated daily.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Weekly Performance Digest',
    description: 'Every week, you get a summary of new reviews, review velocity, and how your online reputation is trending.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Done-For-You Setup',
    description: 'We connect to your customer database, configure your messaging, and get you live within 48 hours. You don\'t touch a thing.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'How does RevWise get my customers to leave reviews?',
    a: 'After you complete a job, RevWise automatically sends your customer a personalized text message and email with a direct link to your Google review page. It takes them about 30 seconds to leave a review. If they don\'t respond, we send a friendly follow-up a few days later.',
  },
  {
    q: 'Do I need to do anything after setup?',
    a: 'Nope. Once we connect to your customer database, everything runs automatically. You\'ll get a weekly digest showing your new reviews and how your reputation is growing. The only thing you need to do is keep completing jobs.',
  },
  {
    q: 'How long until I start seeing results?',
    a: 'Most businesses see their first new reviews within the first week. Over 30 days, our average customer gets 15-25 new Google reviews. One of our clients, Bella\'s Flower Shop, got 70 new 5-star reviews in 74 days.',
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'No contracts. Month-to-month. Cancel anytime with no fees. We keep you because RevWise works, not because you\'re locked in.',
  },
  {
    q: 'What if my customers don\'t like being texted?',
    a: 'Our messages are personalized and sent at the right time (shortly after job completion, when satisfaction is highest). Response rates are typically 8-12%. Customers can opt out at any time. We\'ve never had a complaint.',
  },
  {
    q: 'How does this compare to Podium or Birdeye?',
    a: 'Podium starts at $399/month. Birdeye starts at $349/month. Both are designed for larger businesses with multiple locations. RevWise gives you the same core functionality (automated SMS + email review requests) at $99/month with done-for-you setup included. No bloatware, no enterprise pricing.',
  },
  {
    q: 'What types of businesses does RevWise work for?',
    a: 'Any local service business that completes jobs and wants more Google reviews. We work with HVAC companies, plumbers, roofers, electricians, landscapers, pest control, cleaning services, flower shops, and more.',
  },
  {
    q: 'Can I see it in action before signing up?',
    a: 'Yes! Get a free review audit first. We\'ll analyze your current Google reviews, show you how you compare to competitors in your area, and walk you through exactly how RevWise would work for your business.',
  },
];

const comparisons = [
  { name: 'RevWise', price: '$99/mo', setup: 'Done for you (48 hrs)', contract: 'Month-to-month', sms: true, email: true, dashboard: true, support: 'Email + phone', highlight: true },
  { name: 'Podium', price: '$399/mo', setup: 'Self-serve', contract: 'Annual', sms: true, email: true, dashboard: true, support: 'Email', highlight: false },
  { name: 'Birdeye', price: '$349/mo', setup: 'Self-serve', contract: 'Annual', sms: true, email: true, dashboard: true, support: 'Email', highlight: false },
  { name: 'NiceJob', price: '$125/mo', setup: 'Self-serve', contract: 'Monthly', sms: true, email: true, dashboard: true, support: 'Chat', highlight: false },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              One Plan. Everything Included.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              No hidden fees. No complicated tiers. Just more Google reviews for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="container-custom">
          <ScrollReveal className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-[2.5rem] blur-2xl opacity-25" />
              <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden">
                {/* Price header */}
                <div className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
                  <p className="relative text-sm font-medium uppercase tracking-widest mb-2 text-white/80">Everything You Need</p>
                  <div className="relative flex items-baseline justify-center gap-1">
                    <span className="text-6xl md:text-7xl font-bold">$99</span>
                    <span className="text-2xl text-white/80">/month</span>
                  </div>
                  <p className="relative mt-4 text-white/70">14-day free trial. No credit card required. Cancel anytime.</p>
                </div>

                {/* Features list */}
                <div className="p-10">
                  <ul className="space-y-5">
                    {[
                      'Unlimited automated review requests',
                      'SMS + email campaigns',
                      'Direct Google review links (one tap)',
                      'Smart timing & follow-ups',
                      'Real-time analytics dashboard',
                      'Weekly performance digest',
                      'Done-for-you setup (live in 48 hours)',
                      'Dedicated email + phone support',
                      'No contracts, cancel anytime',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 space-y-4">
                    <Button
                      href="/audit"
                      variant="primary"
                      className="w-full text-lg py-5 font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    >
                      Get Your Free Review Audit
                    </Button>
                    <Button
                      href="/demo-call"
                      variant="secondary"
                      className="w-full text-lg py-5 font-bold"
                    >
                      Book a Demo Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI callout */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="text-green-800 font-semibold text-lg">
                <span className="text-green-600">Bella&apos;s Flower Shop saved $1,400/month</span> in labor costs alone.
              </p>
              <p className="text-green-700 mt-1">
                70 new 5-star reviews in 74 days. RevWise pays for itself 14x over.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included - Detailed */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Here&apos;s Exactly What You Get
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              No surprises. No add-ons. Everything below is included in your $99/month.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              How RevWise Compares
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Same core features as the big players. A fraction of the price.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-6 text-gray-500 font-medium text-sm uppercase tracking-wide">Platform</th>
                  <th className="py-4 px-4 text-gray-500 font-medium text-sm uppercase tracking-wide">Price</th>
                  <th className="py-4 px-4 text-gray-500 font-medium text-sm uppercase tracking-wide">Setup</th>
                  <th className="py-4 px-4 text-gray-500 font-medium text-sm uppercase tracking-wide">Contract</th>
                  <th className="py-4 px-4 text-gray-500 font-medium text-sm uppercase tracking-wide text-center">SMS</th>
                  <th className="py-4 px-4 text-gray-500 font-medium text-sm uppercase tracking-wide text-center">Email</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      comp.highlight
                        ? 'bg-blue-50/50'
                        : ''
                    }`}
                  >
                    <td className={`py-5 pr-6 font-semibold ${comp.highlight ? 'text-primary' : 'text-gray-900'}`}>
                      {comp.name}
                      {comp.highlight && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className={`py-5 px-4 font-bold ${comp.highlight ? 'text-primary' : 'text-gray-900'}`}>{comp.price}</td>
                    <td className="py-5 px-4 text-gray-600">{comp.setup}</td>
                    <td className="py-5 px-4 text-gray-600">{comp.contract}</td>
                    <td className="py-5 px-4 text-center">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-light">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <details className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-primary transition-colors">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-yellow-400/15 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Get More Reviews?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Start with a free review audit. We&apos;ll show you exactly where you stand and how RevWise can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/audit"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-50 text-lg px-10 py-5 font-bold shadow-2xl"
              >
                Get Your Free Review Audit
              </Button>
              <Button
                href="/demo-call"
                variant="secondary"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-5 font-bold"
              >
                Book a Demo Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
