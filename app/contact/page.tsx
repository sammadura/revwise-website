import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Sprig, Stem } from '@/components/ui/BotanicalAccents';
import { ScrollReveal } from '@/components/ui/ScrollAnimations';

export const metadata: Metadata = {
  title: 'Book a Call — RevWise for Flower Shops',
  description:
    'A note from Sam: email me about your flower shop and I reply the same day. $15/mo, everything included.',
};

const EMAIL_CTA =
  'mailto:sam@getrevwise.com?subject=Book%20a%20call%20about%20my%20flower%20shop';

const included = [
  'Texts + emails after every order',
  'Direct Google review links (one tap)',
  'Friendly follow-ups',
  'Weekly review digest',
  'Done-for-you setup, live in 48 hours',
  'A direct line to me',
  'No contract. Cancel anytime.',
];

const comparisons = [
  { name: 'RevWise', price: '$15/mo', setup: 'Done for you (48 hrs)', contract: 'Month-to-month', highlight: true },
  { name: 'Podium', price: '$399/mo', setup: 'Self-serve', contract: 'Annual', highlight: false },
  { name: 'Birdeye', price: '$349/mo', setup: 'Self-serve', contract: 'Annual', highlight: false },
];

export default function ContactPage() {
  return (
    <>
      {/* A note from Sam — headshot, intro, the one CTA */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute top-6 right-[6%] w-28 text-sage opacity-40 pointer-events-none hidden md:block">
          <Stem />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-24">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <Image
              src="/sam-headshot.jpg"
              alt="Sam Madura, founder of RevWise"
              width={160}
              height={160}
              priority
              className="rounded-full border-4 border-white shadow-lg mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-6 tracking-tight">
              Hi, I&apos;m Sam.
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-10">
              I run RevWise, and it&apos;s just me. No sales team, no call
              center. If you run a flower shop, I&apos;d love 15 minutes to
              hear how reviews are going for you. And if RevWise isn&apos;t
              right for your shop, I&apos;ll tell you that too.
            </p>
            <Button href={EMAIL_CTA} variant="primary" className="text-lg px-10 py-5 font-bold">
              Email me
            </Button>
            <p className="text-sm text-gray-medium mt-4">
              sam@getrevwise.com. I read every message and reply the same day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Price card */}
      <section className="section bg-paper relative">
        <div className="container-custom">
          <ScrollReveal className="max-w-xl mx-auto">
            <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-border overflow-hidden">
              <div className="bg-footer-green text-white p-10 text-center relative overflow-hidden">
                <div className="absolute -right-6 -bottom-10 w-32 text-moss opacity-20 pointer-events-none">
                  <Stem />
                </div>
                <p className="relative text-sm font-medium uppercase tracking-widest mb-2 text-moss/80">
                  One plan, everything included
                </p>
                <div className="relative flex items-baseline justify-center gap-1">
                  <span className="text-6xl md:text-7xl font-heading font-semibold">$15</span>
                  <span className="text-2xl text-moss/80">/month</span>
                </div>
                <p className="relative mt-4 text-moss/80">One arrangement a month covers it.</p>
              </div>

              <div className="p-10">
                <ul className="space-y-4">
                  {included.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <div className="w-7 h-7 bg-moss rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-medium font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button href={EMAIL_CTA} variant="primary" className="w-full text-lg py-5 font-bold">
                    Email me to get started
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-moss/60 border border-sage/30 rounded-2xl p-6 text-center">
              <p className="text-primary font-semibold text-lg">
                70 new Google reviews in 74 days. One Bronx flower shop&apos;s
                real count on RevWise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="absolute top-6 left-[4%] w-28 text-sage opacity-25 pointer-events-none hidden lg:block">
          <Sprig />
        </div>

        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              How RevWise Compares
            </h2>
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
                {comparisons.map((comp) => (
                  <tr
                    key={comp.name}
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
              Published starting prices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-footer-green text-white relative overflow-hidden">
        <div className="absolute -top-8 right-[8%] w-36 text-moss opacity-15 pointer-events-none rotate-12">
          <Stem />
        </div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6 tracking-tight">
              Give me 15 minutes.
            </h2>
            <p className="text-xl text-moss/90 max-w-xl mx-auto mb-10">
              Happy to work around your schedule. I know your weekends belong
              to weddings.
            </p>
            <Button
              href={EMAIL_CTA}
              variant="primary"
              className="bg-secondary hover:bg-secondary-dark text-lg px-10 py-5 font-bold"
            >
              Email me
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
