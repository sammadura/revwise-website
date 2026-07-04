'use client';

import Button from '@/components/ui/Button';
import SMSDemoV2 from '@/components/ui/SMSDemoV2';
import FAQ from '@/components/sections/FAQ';
import { Stem, Sprig, Petals } from '@/components/ui/BotanicalAccents';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/ScrollAnimations';

export default function HomeContent() {
  return (
    <>
      {/* S1 — Hero (matches the og card: copy left, tall stem right) */}
      <section className="relative overflow-hidden bg-cream">
        {/* Botanical accents */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] lg:right-[8%] w-44 md:w-60 lg:w-72 text-sage opacity-80 pointer-events-none hidden sm:block">
          <Stem />
        </div>
        <div className="absolute bottom-6 left-[40%] w-44 text-petal opacity-80 pointer-events-none hidden lg:block">
          <Petals />
        </div>

        <div className="container-custom relative pt-16 pb-14 sm:pt-24 sm:pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h1 className="heading-xl mb-10 md:mb-12">
                You arrange the flowers.
                <br className="hidden sm:block" />{' '}
                <em className="italic font-normal text-primary">We ask for the review.</em>
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                  Book a call with Sam
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-lg hover:text-secondary transition-colors px-2 py-4"
                >
                  See how it works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Mobile flower — in flow so it never overlaps the headline */}
          <div className="sm:hidden mt-10 flex justify-end pr-4 text-sage opacity-80 pointer-events-none" aria-hidden="true">
            <div className="w-36">
              <Stem />
            </div>
          </div>
        </div>
      </section>

      {/* S2 — The florist pain */}
      <section className="section bg-paper relative overflow-hidden">
        <div className="absolute -top-6 right-[6%] w-36 text-sage opacity-30 pointer-events-none rotate-180 hidden md:block">
          <Sprig />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="accent-text text-lg">The rush problem</span>
              <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-8 tracking-tight leading-[1.1]">
                Your busiest weeks are exactly when nobody asks for reviews.
              </h2>
              <p className="text-lg text-gray-medium leading-relaxed">
                Valentine&apos;s week. Mother&apos;s Day. A three-wedding
                Saturday.{' '}
                <strong className="text-dark font-semibold">
                  RevWise asks every customer — even when the shop is slammed.
                </strong>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S3 — How it works */}
      <section id="how-it-works" className="section bg-cream relative overflow-hidden">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <span className="accent-text text-lg">How it works</span>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'First, we reach out to your past customers',
                body: 'Live within 48 hours. Every past customer who was never asked gets a friendly review request.',
              },
              {
                step: '2',
                title: 'Every new customer, automatically',
                body: 'After each order, a one-tap link to your Google review page. Email too (52% open rate).',
              },
              {
                step: '3',
                title: 'Reviews roll in, even during the rush',
                body: 'Friendly follow-ups catch busy customers. Same polite ask to everyone — policy-safe.',
              },
            ].map((item) => (
              <StaggerItem
                key={item.step}
                className="bg-white rounded-2xl border border-gray-border p-8 shadow-sm card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-moss text-primary font-heading font-semibold text-xl flex items-center justify-center mb-6">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-dark">{item.title}</h3>
                <p className="text-gray-medium leading-relaxed">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* S4 — Proof strip (unnamed, factual) */}
      <section id="results" className="section bg-petal/60 relative overflow-hidden">
        <div className="absolute -bottom-10 left-[4%] w-32 text-secondary opacity-15 pointer-events-none hidden md:block">
          <Stem />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-heading font-semibold text-4xl md:text-6xl text-dark mb-6 tracking-tight">
                70 new Google reviews in 74 days.
              </h2>
              <p className="text-xl text-gray-medium leading-relaxed">
                One Bronx flower shop, 431 to 501. Your numbers depend on your
                volume —{' '}
                <a href="/contact" className="text-primary font-semibold hover:text-secondary transition-colors">
                  that&apos;s what the call is for.
                </a>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S5 — Features bento */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10">
            <span className="accent-text text-lg">What you get</span>
            <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
              Built to run while you&apos;re building arrangements
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Texts that get read */}
            <StaggerItem className="flex items-center gap-4 bg-white rounded-xl border border-gray-border p-5 shadow-sm">
              <div className="w-10 h-10 bg-moss rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dark">Texts that actually get read</h3>
                <p className="text-sm text-gray-medium">
                  <span className="font-semibold text-primary">8-12%</span> click-through ·{' '}
                  <span className="font-semibold text-secondary">52%</span> email opens
                </p>
              </div>
            </StaggerItem>

            {/* Policy-safe */}
            <StaggerItem className="flex items-center gap-4 bg-white rounded-xl border border-gray-border p-5 shadow-sm">
              <div className="w-10 h-10 bg-moss rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-dark">Policy-safe by design</h3>
            </StaggerItem>

            {/* Timing */}
            <StaggerItem className="flex items-center gap-4 bg-white rounded-xl border border-gray-border p-5 shadow-sm">
              <div className="w-10 h-10 bg-petal rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-dark">Timed to land right</h3>
            </StaggerItem>

            {/* White-glove */}
            <StaggerItem className="flex items-center gap-4 bg-white rounded-xl border border-gray-border p-5 shadow-sm">
              <div className="w-10 h-10 bg-petal rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-dark">White-glove onboarding</h3>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* S6 — Pricing teaser */}
      <section id="pricing" className="section bg-paper relative overflow-hidden">
        <div className="absolute top-6 left-[5%] w-28 text-sage opacity-25 pointer-events-none hidden md:block">
          <Sprig />
        </div>

        <div className="container-custom relative">
          <div className="max-w-xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <span className="accent-text text-lg">Pricing</span>
              <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
                One plan. $25 a month. Everything included.
              </h2>
              <p className="text-xl text-gray-medium">One arrangement a month covers it.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-border shadow-lg p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    'Texts + emails after every order',
                    'Messages in your shop’s voice',
                    'Friendly follow-ups',
                    'Done-for-you setup — live in 48 hours',
                    'No contract. Cancel anytime. 14-day free trial.',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-medium">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="primary" className="w-full text-lg py-4 font-bold">
                  Book a call with Sam
                </Button>
                <p className="text-center mt-4">
                  <a href="/contact" className="text-sm text-gray-medium underline underline-offset-4 hover:text-primary transition-colors">
                    Questions? Talk to Sam first
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S7 — Live demo */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-10">
            <span className="accent-text text-lg">See it in action</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SMSDemoV2 />
          </ScrollReveal>
        </div>
      </section>

      {/* S8 — FAQ */}
      <FAQ />

      {/* S9 — Final CTA */}
      <section className="section bg-footer-green text-white relative overflow-hidden">
        <div className="absolute -top-10 right-[8%] w-40 text-moss opacity-15 pointer-events-none rotate-12">
          <Stem />
        </div>
        <div className="absolute bottom-0 left-[3%] w-44 text-moss opacity-10 pointer-events-none">
          <Petals />
        </div>

        <ScrollReveal className="container-custom text-center relative z-10">
          <h2 className="font-heading font-semibold text-4xl md:text-6xl mb-6 tracking-tight">
            Talk to Sam. Fifteen minutes,{' '}
            <em className="italic font-normal text-petal">whenever works.</em>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-moss/90 max-w-2xl mx-auto leading-relaxed">
            If RevWise isn&apos;t right for your shop, he&apos;ll tell you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              href="/contact"
              variant="primary"
              className="bg-secondary hover:bg-secondary-dark text-lg px-10 py-5 font-bold"
            >
              Book a call with Sam
            </Button>
            <a
              href="mailto:sam@getrevwise.com?subject=Book%20a%20call%20about%20my%20flower%20shop"
              className="text-moss/90 hover:text-white transition-colors font-medium underline underline-offset-4"
            >
              or email sam@getrevwise.com
            </a>
          </div>
          <p className="text-moss/70 text-sm">
            14-day free trial · No contract · Cancel anytime
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
