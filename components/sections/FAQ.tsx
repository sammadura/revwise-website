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
    question: 'What do reviews have to do with beating order gatherers?',
    answer: 'Order gatherers buy the top search ads and take a cut of orders that were yours. The place you can beat them is the map results - local listings ranked largely by reviews, which customers trust more than ads. The more you have, the easier you are to find and order direct, at full price. RevWise builds the reviews.',
  },
  {
    question: 'Will this actually move my ranking?',
    answer: 'Fair question. We won\'t promise a ranking - Google weighs dozens of factors nobody can honestly guarantee. Volume and freshness are ones you can influence, and most shops have hundreds of past customers never asked. Getting them flowing is our job.',
  },
  {
    question: 'Is this legit, or will Google penalize me?',
    answer: 'Fair worry. Google penalizes review gating: filtering so only happy customers get asked. RevWise never does that. Every eligible customer gets the same request. No fake reviews, no incentives, no filtering.',
  },
  {
    question: 'How much work is this for me?',
    answer: 'You set it up yourself in about 10 minutes: connect Square or upload your customer list, check the message, press start. Then it runs itself, every order triggering the ask, follow-ups included. Stuck? Email Sam and he\'ll sort it out.',
  },
  {
    question: 'Why can\'t I just ask for reviews myself?',
    answer: 'You can. The problem is timing: the ask gets dropped when you\'re slammed, exactly when you\'re serving the most customers. RevWise asks every one automatically, right after the order, by text and email, then follows up.',
  },
  {
    question: 'What does it cost, and what if it doesn\'t work?',
    answer: '$15 a month, everything included, no contract, cancel anytime. The first 25 shops get 60 days free (14 days after that), and reactivating past customers is free - the $15 starts only after. No results, full refund.',
  },
  {
    question: 'Does it work with the software I already use?',
    answer: 'Most point-of-sale systems, CRMs, and databases connect through their APIs, and when yours does, we build the integration. The rare exception is an older or walled-off platform, flagged on your setup call. We reactivate your past customers regardless.',
  },
  {
    question: 'How will I know it\'s working?',
    answer: 'You get a live dashboard: review-page clicks as they happen, your recent wins, growth since you last checked. Connect your Google Business Profile (optional) and it tracks review growth and matches new reviewers to customers you reached.',
  },
  {
    question: 'What if I get a bad review?',
    answer: 'It happens to every shop, and matters less than you think. With a steady stream of genuine reviews coming in, one negative sits among many positives. When one appears, respond professionally and take it offline.',
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
