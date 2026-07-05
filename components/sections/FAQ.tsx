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
    question: 'What do reviews have to do with beating wire services?',
    answer: 'Wire services pour money into the top search ads and take a cut of orders that were really yours. The place you can beat them is the map results: the local listings customers actually trust and click, ranked largely by Google reviews. Fresh, genuine reviews are one of the biggest factors there, so the more you have, the easier you are to find and order from directly, at full price. RevWise builds that steady stream of reviews for you.',
  },
  {
    question: 'Will this actually move my ranking?',
    answer: 'We won\'t promise you a specific ranking, because Google weighs dozens of factors and nobody honestly can. What we can tell you is that review volume and freshness are among the factors you can actually influence, and most shops are sitting on hundreds of past customers who were never asked. One Bronx flower shop went from 431 to 501 reviews in 74 days with RevWise. Getting those reviews flowing is the part we handle.',
  },
  {
    question: 'Is this legit, or will Google penalize me?',
    answer: 'It stays fully within Google\'s rules. What Google penalizes is review gating: filtering so only happy customers get asked. RevWise never does that. Every eligible customer gets the same friendly request, which is exactly what keeps you compliant. No fake reviews, no incentives, no filtering - just asking the customers you already served.',
  },
  {
    question: 'How much work is this for me?',
    answer: 'Almost none. We set everything up on one onboarding call - connecting your system, writing the messages in your shop\'s voice, and setting the timing. You\'re live within 48 hours. After that it runs on its own: every order triggers the ask automatically, follow-ups included. You never have to remember it, you never touch it during a rush, and there\'s no technical skill required on your end.',
  },
  {
    question: 'Why can\'t I just ask for reviews myself?',
    answer: 'You can, and most owners mean to. The problem is timing - the ask gets dropped exactly when you\'re slammed, which is also when you\'re serving the most customers. RevWise asks every single one, automatically, right after their order. By text, not just email, because that\'s where people actually respond, then a friendly follow-up for the ones who meant to and forgot. It\'s the difference between a handful of reviews a year and a steady stream.',
  },
  {
    question: 'What does it cost, and what if it doesn\'t work?',
    answer: '$15 a month, everything included, no contract, cancel anytime. There\'s a 14-day free trial, and reactivating your past customers is free too - the $15 doesn\'t start until that\'s done. Not seeing results? Full refund. The pricing is built so the risk sits with us, not you.',
  },
  {
    question: 'Does it work with the software I already use?',
    answer: 'Almost always, yes. We connect to pretty much whatever you run. Most point-of-sale systems, CRMs, and databases let apps talk to each other, and when yours does, we build the integration for it. A few older or walled-off platforms don\'t allow it, which is the one thing we confirm on your setup call. Either way, we can reactivate your past customers from day one.',
  },
  {
    question: 'How will I know it\'s working?',
    answer: 'You get a live dashboard. It shows review-page clicks as they happen, your recent wins, and how much you\'ve grown since you last checked. Connect your Google Business Profile (optional) and it goes further, tracking your review growth over time and matching new reviewers back to the customers RevWise reached out to. No guessing, no waiting on a monthly report.',
  },
  {
    question: 'What if I get a bad review?',
    answer: 'It happens to every shop, and it matters less than you\'d think. Because RevWise keeps a steady stream of genuine reviews coming in, the occasional negative one gets buried under dozens of positives. When one does show up, respond professionally and take it offline - future customers judge you more by how you handle a complaint than by the complaint itself.',
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
