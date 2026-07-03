'use client';

import Button from '@/components/ui/Button';
import { Sprig, Stem } from '@/components/ui/BotanicalAccents';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimations';

const features = [
  {
    name: 'Automated Text & Email Review Requests',
    description: 'After every order, your customer gets a personalized text and email asking for a Google review. One tap, done.',
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
    name: 'Tuned Timing & Follow-ups',
    description: 'The send delay is set to fit your shop during onboarding. If a customer doesn\'t respond, a gentle follow-up goes out a few days later.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Review Tracking & Reports',
    description: 'Regular email reports show exactly how many reviews you\'re getting and your response rates. Live dashboard coming soon.',
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
    description: 'We connect your customer list, write the messages in your shop\'s voice, and get you live within 48 hours. You don\'t touch a thing.',
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
    a: 'After every order, RevWise automatically sends your customer a personalized text message and email with a direct link to your Google review page. It takes them about 30 seconds to leave a review. If they don\'t respond, a friendly follow-up goes out a few days later.',
  },
  {
    q: 'Do I need to do anything after setup?',
    a: 'Nope. Once we connect your customer list, everything runs automatically. You\'ll get a weekly digest showing your new reviews and how your reputation is growing. The only thing you need to do is keep making beautiful arrangements.',
  },
  {
    q: 'How long until I start seeing results?',
    a: 'Most shops see their first new reviews within the first week. One flower shop we worked with in the Bronx added 70 new Google reviews in 74 days.',
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'No contracts. Month-to-month. Cancel anytime with no fees. We keep you because RevWise works, not because you\'re locked in.',
  },
  {
    q: 'What if my customers don\'t like being texted?',
    a: 'The messages are short, warm, and written in your shop\'s voice — a friendly ask, not a marketing blast. Customers can opt out anytime with one reply, and you can mark anyone do-not-contact. Click-through rates run 8-12%, which tells you most customers are happy to help a shop they love.',
  },
  {
    q: 'How does this compare to Podium or Birdeye?',
    a: 'Podium starts at $399/month. Birdeye starts at $349/month. Both are designed for larger businesses with multiple locations. RevWise gives you the same core functionality (automated text + email review requests) at $99/month with done-for-you setup included. No bloatware, no enterprise pricing.',
  },
  {
    q: 'Does RevWise only work for flower shops?',
    a: 'RevWise is built for flower shops — the messages, the timing, and the setup are shaped around how florists actually work. If you run a different kind of local business and think it could fit, email Sam and ask.',
  },
  {
    q: 'Can I see how my shop stands before signing up?',
    a: 'Yes. Get a free review audit first: we\'ll analyze your current Google reviews and show you how you compare to florists near you. Or just book a call with Sam and he\'ll walk you through it.',
  },
];

const comparisons = [
  { name: 'RevWise', price: '$99/mo', setup: 'Done for you (48 hrs)', contract: 'Month-to-month', highlight: true },
  { name: 'Podium', price: '$399/mo', setup: 'Self-serve', contract: 'Annual', highlight: false },
  { name: 'Birdeye', price: '$349/mo', setup: 'Self-serve', contract: 'Annual', highlight: false },
];

async function startTrialCheckout() {
  const res = await fetch('/api/checkout', { method: 'POST' });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-paper overflow-hidden">
        <div className="absolute top-4 right-[6%] w-28 text-sage opacity-40 pointer-events-none hidden md:block">
          <Stem />
        </div>
        <div className="absolute bottom-2 left-[4%] w-32 text-sage opacity-25 pointer-events-none hidden lg:block">
          <Sprig />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-24 text-center">
          <ScrollReveal>
            <span className="accent-text text-lg">Simple, transparent pricing</span>
            <h1 className="text-4xl md:text-6xl font-heading font-semibold mt-3 mb-6 tracking-tight">
              One Plan. Everything Included.
            </h1>
            <p className="text-xl md:text-2xl text-gray-medium max-w-2xl mx-auto">
              No hidden fees. No complicated tiers. Just more Google reviews for
              your flower shop.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="relative pb-20 bg-cream pt-12">
        <div className="container-custom">
          <ScrollReveal className="max-w-xl mx-auto">
            <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-border overflow-hidden">
              {/* Price header */}
              <div className="bg-footer-green text-white p-10 text-center relative overflow-hidden">
                <div className="absolute -right-6 -bottom-10 w-32 text-moss opacity-20 pointer-events-none">
                  <Stem />
                </div>
                <p className="relative text-sm font-medium uppercase tracking-widest mb-2 text-moss/80">Everything You Need</p>
                <div className="relative flex items-baseline justify-center gap-1">
                  <span className="text-6xl md:text-7xl font-heading font-semibold">$99</span>
                  <span className="text-2xl text-moss/80">/month</span>
                </div>
                <p className="relative mt-4 text-moss/80">One arrangement a month covers it.</p>
              </div>

              {/* Features list */}
              <div className="p-10">
                <ul className="space-y-5">
                  {[
                    'Unlimited automated review requests',
                    'Text + email, after every order',
                    'Direct Google review links (one tap)',
                    'Tuned timing & friendly follow-ups',
                    'Review tracking & email reports',
                    'Weekly performance digest',
                    'Done-for-you setup (live in 48 hours)',
                    'Direct line to Sam, the founder',
                    'No contracts, cancel anytime',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-7 h-7 bg-moss rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-medium font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button href="/contact" variant="primary" className="w-full text-lg py-5 font-bold">
                    Book a call with Sam
                  </Button>
                  <p className="text-center text-sm text-gray-medium mt-4">
                    Prefer to skip the call?{' '}
                    <button
                      onClick={startTrialCheckout}
                      className="underline underline-offset-4 font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      Start your 14-day free trial
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Proof callout */}
            <div className="mt-8 bg-moss/60 border border-sage/30 rounded-2xl p-6 text-center">
              <p className="text-primary font-semibold text-lg">
                70 new Google reviews in 74 days — one Bronx flower shop&apos;s real count on RevWise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included - Detailed */}
      <section className="section bg-paper">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Here&apos;s Exactly What You Get
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              No surprises. No add-ons. Everything below is included in your $99/month.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-border h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-dark">{feature.name}</h3>
                  <p className="text-gray-medium leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-cream">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              How RevWise Compares
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Same core features as the big players. A fraction of the price.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-border">
                  <th className="py-4 pr-6 text-gray-medium font-medium text-sm uppercase tracking-wide">Platform</th>
                  <th className="py-4 px-4 text-gray-medium font-medium text-sm uppercase tracking-wide">Price</th>
                  <th className="py-4 px-4 text-gray-medium font-medium text-sm uppercase tracking-wide">Setup</th>
                  <th className="py-4 px-4 text-gray-medium font-medium text-sm uppercase tracking-wide">Contract</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-border ${comp.highlight ? 'bg-moss/40' : ''}`}
                  >
                    <td className={`py-5 pr-6 font-semibold ${comp.highlight ? 'text-primary' : 'text-dark'}`}>
                      {comp.name}
                      {comp.highlight && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-white">
                          Built for florists
                        </span>
                      )}
                    </td>
                    <td className={`py-5 px-4 font-bold ${comp.highlight ? 'text-primary' : 'text-dark'}`}>{comp.price}</td>
                    <td className="py-5 px-4 text-gray-medium">{comp.setup}</td>
                    <td className="py-5 px-4 text-gray-medium">{comp.contract}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-medium mt-4 text-center">
              All three send review requests by text and email. Prices are published starting prices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-paper">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <details className="group bg-white rounded-2xl border border-gray-border shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-dark hover:text-primary transition-colors">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-medium group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-medium leading-relaxed border-t border-gray-border pt-4">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-footer-green text-white relative overflow-hidden">
        <div className="absolute -top-8 right-[8%] w-36 text-moss opacity-15 pointer-events-none rotate-12">
          <Stem />
        </div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6 tracking-tight">
              Ready to Get More Reviews?
            </h2>
            <p className="text-xl text-moss/90 max-w-2xl mx-auto mb-10">
              Fifteen minutes with Sam, the founder. If RevWise isn&apos;t right for
              your shop, he&apos;ll tell you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/contact"
                variant="primary"
                className="bg-secondary hover:bg-secondary-dark text-lg px-10 py-5 font-bold"
              >
                Book a call with Sam
              </Button>
              <button
                onClick={startTrialCheckout}
                className="text-moss/90 hover:text-white transition-colors font-medium underline underline-offset-4"
              >
                or start your 14-day free trial
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
