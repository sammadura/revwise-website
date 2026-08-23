import { SUPPORTED_SYSTEMS, WHO_ITS_FOR } from '@/lib/offer';
import { ScrollReveal } from '@/components/ui/ScrollAnimations';

interface SupportedSystemsProps {
  id?: string;
}

export default function SupportedSystems({ id = 'systems' }: SupportedSystemsProps) {
  return (
    <section id={id} className="section bg-white relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-10">
          <span className="accent-text text-lg">Who it&apos;s for</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
            Shops whose new orders already email them
          </h2>
          <p className="text-lg text-gray-medium leading-relaxed max-w-2xl mx-auto">
            {WHO_ITS_FOR}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-medium text-center mb-5">
            Works with
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {SUPPORTED_SYSTEMS.map((system) => (
              <li
                key={system.name}
                className="bg-cream border border-gray-border rounded-full px-4 py-2 text-sm text-dark"
              >
                <span className="font-medium">{system.name}</span>
                {system.note && (
                  <span className="text-gray-medium"> ({system.note})</span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-medium text-center mt-6 leading-relaxed">
            Square or a customer-list upload is a fallback, not the usual path.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
