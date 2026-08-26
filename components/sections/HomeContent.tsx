'use client';

import Button from '@/components/ui/Button';
import SMSDemoV2 from '@/components/ui/SMSDemoV2';
import FAQ from '@/components/sections/FAQ';
import PricingCard from '@/components/sections/PricingCard';
import SupportedSystems from '@/components/sections/SupportedSystems';
import { Stem, Sprig, Petals } from '@/components/ui/BotanicalAccents';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/ScrollAnimations';
import { CTA_LABEL, PRICE_HEADLINE, SIGNUP_URL } from '@/lib/offer';

interface ShopProof {
  name: string;
  stat: string;
  detail: string;
}

/**
 * Named proof only. Do not add Maps totals or invented deltas.
 * Bella's: the already-published 431→501 jump only (not a later live total).
 * Lake Charles: new-review count since first ask only — no Maps start/end.
 */
const NAMED_PROOFS: ShopProof[] = [
  {
    name: "Bella's Flower Shop, Bronx",
    stat: '70 new Google reviews in 74 days',
    detail: '431 to 501 · 288 W Fordham Rd',
  },
  {
    // Austin Ramos — first ask July 21, 2026. Count Sam sent 2026-08-25.
    name: 'The Flower Shop of Lake Charles',
    stat: '16 new Google reviews since July 21',
    detail: '',
  },
];

function ProofLines({ proofs }: { proofs: ShopProof[] }) {
  return (
    <div id="results" className="space-y-5 scroll-mt-28">
      {proofs.map((proof) => (
        <div key={proof.name}>
          <p className="font-heading font-semibold text-xl md:text-2xl text-dark tracking-tight leading-snug text-pretty">
            {proof.stat}
          </p>
          <p className="mt-1 text-gray-medium leading-relaxed">{proof.name}</p>
          {proof.detail ? (
            <p className="text-sm text-gray-medium leading-relaxed">{proof.detail}</p>
          ) : null}
        </div>
      ))}
      <p className="text-sm text-gray-medium leading-relaxed">
        Customers who&apos;ll order direct next time —{' '}
        <a href={SIGNUP_URL} className="text-primary font-semibold hover:text-secondary transition-colors">
          no middleman&apos;s cut.
        </a>
      </p>
    </div>
  );
}

export default function HomeContent() {
  const proofs = NAMED_PROOFS;

  return (
    <>
      {/* S1 — Hero: copy left, phone demo + named proof right */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-custom relative pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">
            <ScrollReveal>
              <h1 className="font-heading font-semibold tracking-tight leading-[1.1] text-[1.7rem] sm:text-4xl md:text-5xl mb-8 md:mb-10">
                <span className="block">You arrange the flowers.</span>
                <em className="italic font-normal text-primary">We ask for the review.</em>
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button href={SIGNUP_URL} variant="primary" className="text-lg px-8 py-4">
                  {CTA_LABEL}
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

              <p className="mt-8 text-lg text-gray-medium leading-relaxed text-pretty max-w-xl">
                Wire orders pay you cents on the dollar. RevWise builds the reviews
                that make customers order from you directly — full price.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex flex-col gap-6">
              <ProofLines proofs={proofs} />
              <div className="pt-2">
                <SMSDemoV2 compact />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S2 — How it works */}
      <section id="how-it-works" className="section bg-cream relative overflow-hidden">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <span className="accent-text text-lg">How it works</span>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Copy your shop address',
                body: 'We give you a unique email. Add it as a staff or order-notification recipient on the system that already emails you new orders.',
              },
              {
                step: '2',
                title: 'Every new order, automatically',
                body: 'When that order email has a phone number, the review text goes out. Email too (52% open rate).',
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

          <ScrollReveal className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-gray-medium leading-relaxed text-pretty">
              Your busiest weeks are exactly when nobody asks. RevWise asks every
              customer — even when the shop is slammed.
            </p>
            <p className="mt-5 text-sm text-gray-medium">
              <span className="font-semibold text-primary">8–12%</span> click-through
              {' · '}
              <span className="font-semibold text-secondary">52%</span> email opens
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SupportedSystems />

      {/* S3 — Pricing teaser */}
      <section id="pricing" className="section bg-paper relative overflow-hidden">
        <div className="absolute top-6 left-[5%] w-28 text-sage opacity-25 pointer-events-none hidden md:block">
          <Sprig />
        </div>

        <div className="container-custom relative">
          <div className="max-w-xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <span className="accent-text text-lg">Pricing</span>
              <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight text-balance">
                {PRICE_HEADLINE}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <PricingCard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S4 — FAQ */}
      <FAQ />

      {/* S5 — Final CTA */}
      <section className="section bg-footer-green text-white relative overflow-hidden">
        <div className="absolute -top-10 right-[8%] w-40 text-moss opacity-15 pointer-events-none rotate-12">
          <Stem />
        </div>
        <div className="absolute bottom-0 left-[3%] w-44 text-moss opacity-10 pointer-events-none">
          <Petals />
        </div>

        <ScrollReveal className="container-custom text-center relative z-10">
          <h2 className="font-heading font-semibold text-4xl md:text-6xl mb-6 tracking-tight text-balance">
            Start tonight. One step,{' '}
            <em className="italic font-normal text-petal">whenever works.</em>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-moss/90 max-w-2xl mx-auto leading-relaxed">
            Copy your shop address. No call needed. And if RevWise isn&apos;t
            right for your shop, Sam will tell you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              href={SIGNUP_URL}
              variant="primary"
              className="bg-secondary hover:bg-secondary-dark text-lg px-10 py-5 font-bold"
            >
              {CTA_LABEL}
            </Button>
            <a
              href="mailto:sam@getrevwise.com?subject=Question%20about%20RevWise"
              className="text-moss/90 hover:text-white transition-colors font-medium underline underline-offset-4"
            >
              or email sam@getrevwise.com
            </a>
          </div>
          <p className="text-moss/70 text-sm">
            No contract · Cancel anytime
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
