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
      {/* S1 — Hero */}
      <section className="relative overflow-hidden bg-cream">
        {/* Botanical accents */}
        <div className="absolute top-8 right-[4%] w-24 md:w-32 text-sage opacity-60 pointer-events-none hidden sm:block">
          <Stem />
        </div>
        <div className="absolute bottom-4 left-[2%] w-40 text-petal opacity-70 pointer-events-none hidden lg:block">
          <Petals />
        </div>

        <div className="container-custom relative pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
            {/* Copy */}
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 border border-sage/40 bg-moss/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
                  <svg className="w-3.5 h-3.5 text-sage" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 2c1.8 2.2 1.8 4.8 0 7-1.8-2.2-1.8-4.8 0-7zM4 8c2.8.4 4.6 2.2 5.2 5C6.4 12.6 4.6 10.8 4 8zm12 0c-.6 2.8-2.4 4.6-5.2 5 .6-2.8 2.4-4.6 5.2-5zM9 14h2v4H9v-4z" />
                  </svg>
                  Review automation for flower shops
                </span>

                <h1 className="heading-xl mb-8">
                  You arrange the flowers.{' '}
                  <em className="italic font-normal text-primary">We ask for the review.</em>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
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

                <p className="text-sm text-gray-medium tracking-wide">
                  <span className="font-semibold text-dark">$99/mo</span>
                  <span className="mx-2 text-sage">·</span>
                  everything included
                  <span className="mx-2 text-sage">·</span>
                  14-day free trial
                </p>
              </ScrollReveal>
            </div>

            {/* Phone demo */}
            <ScrollReveal delay={0.15} className="relative">
              <SMSDemoV2 />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S2 — The florist pain */}
      <section className="section bg-paper relative overflow-hidden">
        <div className="absolute -top-6 right-[6%] w-36 text-sage opacity-30 pointer-events-none rotate-180 hidden md:block">
          <Sprig />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl">
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
                title: 'One 45-minute setup call',
                body: 'We connect your customer list and write your messages. Live within 48 hours.',
              },
              {
                step: '2',
                title: 'Every customer gets a friendly text',
                body: 'A one-tap link to your Google review page. Email too (52% open rate).',
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
          <ScrollReveal className="text-center mb-16">
            <span className="accent-text text-lg">What you get</span>
            <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
              Built to run while you&apos;re building arrangements
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Texts that get read — wide */}
            <StaggerItem className="md:col-span-2 bg-white rounded-2xl border border-gray-border p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-moss rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-dark">Texts that actually get read</h3>
                  <p className="text-gray-medium leading-relaxed mb-4">
                    Short, warm, one tap to Google — right on their phone.
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-2xl font-heading font-semibold text-primary">8-12%</p>
                      <p className="text-xs text-gray-medium font-medium">Click-through rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-semibold text-secondary">52%</p>
                      <p className="text-xs text-gray-medium font-medium">Email open rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Policy-safe */}
            <StaggerItem className="bg-white rounded-2xl border border-gray-border p-8 shadow-sm">
              <div className="w-14 h-14 bg-moss rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-dark">Policy-safe by design</h3>
              <p className="text-gray-medium leading-relaxed">
                Every eligible customer gets the same request. No gating, no filtering.
              </p>
            </StaggerItem>

            {/* Timing */}
            <StaggerItem className="bg-white rounded-2xl border border-gray-border p-8 shadow-sm">
              <div className="w-14 h-14 bg-petal rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-dark">Timed to land right</h3>
              <p className="text-gray-medium leading-relaxed">
                Tuned at setup, so the ask lands while the delight is fresh.
              </p>
            </StaggerItem>

            {/* White-glove — wide */}
            <StaggerItem className="md:col-span-2 bg-footer-green rounded-2xl p-8 shadow-sm text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-8 w-28 text-moss opacity-20 pointer-events-none">
                <Stem />
              </div>
              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">White-glove onboarding</h3>
                  <p className="text-moss/90 leading-relaxed">
                    One 45-minute call. We handle everything — live within 48 hours.
                  </p>
                </div>
              </div>
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
                One plan. $99 a month. Everything included.
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
                  <a href="/pricing" className="text-sm text-gray-medium underline underline-offset-4 hover:text-primary transition-colors">
                    See full pricing
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S7 — FAQ */}
      <FAQ />

      {/* S8 — Final CTA */}
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
            <em className="italic font-normal text-petal">no pitch deck.</em>
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
