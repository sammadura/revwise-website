import Button from '@/components/ui/Button';
import {
  CHARGE_COPY,
  CTA_LABEL,
  FOUNDING_NOTE,
  PLAN_FEATURES,
  PRICE_PITCH,
  SIGNUP_URL,
} from '@/lib/offer';

interface PricingCardProps {
  showQuestionsLink?: boolean;
}

export default function PricingCard({ showQuestionsLink = true }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-border shadow-lg p-8">
      <p className="text-center text-xl text-gray-medium leading-relaxed mb-6">
        {PRICE_PITCH}
      </p>
      <ul className="space-y-4 mb-6">
        {PLAN_FEATURES.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-medium">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="rounded-xl bg-moss/50 p-5 text-center mb-6">
        <p className="text-gray-medium leading-relaxed">{CHARGE_COPY}</p>
      </div>
      <Button href={SIGNUP_URL} variant="primary" className="w-full text-lg py-4 font-bold">
        {CTA_LABEL}
      </Button>
      {showQuestionsLink && (
        <p className="text-center mt-4">
          <a href="/contact" className="text-sm text-gray-medium underline underline-offset-4 hover:text-primary transition-colors">
            Questions? Email Sam first
          </a>
        </p>
      )}
      <p className="text-center text-sm text-gray-medium mt-5 leading-relaxed">
        {FOUNDING_NOTE}
      </p>
    </div>
  );
}
