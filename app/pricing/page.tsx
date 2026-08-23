import { Metadata } from 'next';
import PricingCard from '@/components/sections/PricingCard';
import SupportedSystems from '@/components/sections/SupportedSystems';
import { Stem, Sprig } from '@/components/ui/BotanicalAccents';
import { ScrollReveal } from '@/components/ui/ScrollAnimations';
import { PRICE_HEADLINE } from '@/lib/offer';

export const metadata: Metadata = {
  title: 'Pricing — $49/mo for Flower Shops | RevWise',
  description:
    'One plan. $49 a month. About a dollar an order. Never more than $49 a month. Copy your shop address, add a card, cancel anytime.',
};

export default function PricingPage() {
  return (
    <>
      <section id="pricing" className="section bg-paper relative overflow-hidden">
        <div className="absolute top-6 left-[5%] w-28 text-sage opacity-25 pointer-events-none hidden md:block">
          <Sprig />
        </div>
        <div className="absolute -bottom-8 right-[6%] w-32 text-sage opacity-20 pointer-events-none hidden md:block">
          <Stem />
        </div>

        <div className="container-custom relative">
          <div className="max-w-xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <span className="accent-text text-lg">Pricing</span>
              <h1 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
                {PRICE_HEADLINE}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <PricingCard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SupportedSystems />
    </>
  );
}
