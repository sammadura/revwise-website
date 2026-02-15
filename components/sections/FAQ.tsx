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
    question: 'How quickly will I start seeing new reviews?',
    answer: 'Most businesses see their first new reviews within the first week after onboarding. Our automated SMS system has a 98% open rate (and our emails hit 52%), so your requests actually get seen. Customers typically leave reviews within 24-48 hours of receiving the request.',
  },
  {
    question: 'What happens if a customer leaves a negative review?',
    answer: 'Our smart routing system detects unhappy customers before they reach Google. They\'re directed to a private feedback form instead, giving you a chance to resolve the issue. If a negative review does appear on Google, our AI response writer crafts a professional, empathetic reply within minutes.',
  },
  {
    question: 'Do I need any technical skills to set up RevWise?',
    answer: 'None at all. We handle everything during a 45-minute onboarding call — connecting your Google Business Profile, configuring automations, and customizing your messaging. You just show up.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. There are no long-term contracts. You can cancel your subscription at any time with no penalties or hidden fees. We also offer a 14-day free trial so you can see the results before committing.',
  },
  {
    question: 'How is RevWise different from other review tools?',
    answer: 'RevWise is built specifically for local service businesses — plumbers, HVAC, roofers, florists, and more. We combine automated SMS outreach (not just email), AI-powered review responses, smart routing to protect your rating, and a white-glove setup so you never have to figure it out alone.',
  },
  {
    question: 'Will this work for my industry?',
    answer: 'RevWise works for any local service business that depends on Google reviews. Our clients span home services (plumbing, HVAC, roofing, landscaping), retail (florists, salons, auto shops), and professional services (dentists, lawyers, accountants). If your customers find you on Google, RevWise will help.',
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
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
          className="flex-shrink-0 w-8 h-8 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
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
    <section id="faq" className="section bg-white">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Everything you need to know about getting started with RevWise.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-8">
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
