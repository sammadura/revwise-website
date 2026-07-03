'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollAnimations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Will this run itself during Valentine\'s and Mother\'s Day week?',
    answer: 'Yes — that\'s the point. The rushes are exactly when review requests matter most and when you have the least time to send them. RevWise is set up once, then keeps asking after every order, whether it\'s a quiet Tuesday or the Saturday before Mother\'s Day. You never touch it during a rush.',
  },
  {
    question: 'What about wedding and sympathy orders?',
    answer: 'Every eligible customer gets the same friendly request — that\'s what keeps it compliant with Google\'s policies. But you stay in control of who\'s eligible: if there are customers you\'d rather we never text, sympathy orders for example, we can mark them do-not-contact during setup or any time after.',
  },
  {
    question: 'How quickly will I start seeing new reviews?',
    answer: 'Most shops see their first new reviews within the first week after onboarding. We reach customers via text and email (52% email open rate), and 8-12% click through to leave a review. Most reviews come in within 24-48 hours of the request.',
  },
  {
    question: 'What happens if a customer leaves a negative review?',
    answer: 'Every eligible customer gets the same review request — we don\'t filter who gets asked, because review gating violates Google\'s policies and the businesses that get caught lose trust fast. The honest strategy works better anyway: a steady stream of genuine reviews means the occasional negative one disappears under dozens of positives. When a negative review does appear, respond professionally and take the conversation offline — future customers judge you more by how you handle a complaint than by the complaint itself.',
  },
  {
    question: 'Do I need any technical skills to set up RevWise?',
    answer: 'None at all. We handle everything during a 45-minute onboarding call — connecting your Google Business Profile, configuring automations, and writing the messages in your shop\'s voice. You just show up, and you\'re live within 48 hours.',
  },
  {
    question: 'How is RevWise different from other review tools?',
    answer: 'It\'s built for flower shops, and it\'s done for you. Texts, not just email — your customers are on their phones. Friendly follow-ups that catch busy people a few days later. A white-glove setup so you never have to figure software out alone. And every request is policy-safe: no gating, no filtering, fully compliant with Google\'s review policies.',
  },
  {
    question: 'How much time will RevWise save me?',
    answer: 'Manually asking for reviews and chasing follow-ups eats hours every month — and it\'s the first thing that gets dropped when you\'re busy. RevWise automates all of it: the first request, the friendly follow-up, and the timing. Review collection runs itself while you run the shop.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. There are no long-term contracts. You can cancel your subscription at any time with no penalties or hidden fees. We also offer a 14-day free trial so you can see the results before committing.',
  },
  {
    question: 'Do you have a dashboard to track my reviews?',
    answer: 'We\'re building a live dashboard that will give you real-time analytics — track new reviews, response rates, and your Google ranking progress all in one place. It\'s coming soon. In the meantime, you\'ll receive regular email reports and can always reach Sam directly for updates.',
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors pr-8">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 bg-paper group-hover:bg-moss rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-cream">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <span className="accent-text text-lg">Common questions</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            What flower-shop owners ask before getting started.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-border shadow-lg px-8">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
