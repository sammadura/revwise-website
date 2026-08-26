'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollAnimations';

interface FAQItem {
  question: string;
  answer: string;
}

const primaryFaqs: FAQItem[] = [
  {
    question: 'Is this legit, or will Google penalize me?',
    answer: 'Fair worry. Google penalizes review gating: filtering so only happy customers get asked. RevWise never does that. Every eligible customer gets the same request. No fake reviews, no incentives, no filtering.',
  },
  {
    question: 'How much work is this for me?',
    answer: 'One step. We give you a unique email address. Add it as a staff or order-notification recipient on the system that already emails you new orders. Then it runs itself, every order triggering the ask, follow-ups included. Stuck? Email Sam and he\'ll sort it out.',
  },
  {
    question: 'Does it work with the software I already use?',
    answer: 'If your website or wire orders already email you, add our unique address as a staff or order-notification recipient. That works with Floranext, Shopify (staff new-order notifications), Square Online (not register-only), BloomNation, FTD Mercury (BCC on the Email screen, not WOI), WooCommerce, Wix Stores, and Ecwid / GoDaddy Online Store. Square or a customer-list upload is a fallback, not the usual path.',
  },
  {
    question: 'What does it cost, and what if it doesn\'t work?',
    answer: 'One plan. $49 a month. About a dollar an order. Never more than $49 a month. Add a card after you copy your shop address. Charged on the first captured order, or day 7. If you don\'t get a new Google review, we refund the first month. Cancel anytime. No contract. Shops already on the founding $15 / 60-day terms keep them.',
  },
];

const moreFaqs: FAQItem[] = [
  {
    question: 'What do reviews have to do with beating order gatherers?',
    answer: 'Order gatherers buy the top search ads and take a cut of orders that were yours. The place you can beat them is the map results - local listings ranked largely by reviews, which customers trust more than ads. The more you have, the easier you are to find and order direct, at full price. RevWise builds the reviews.',
  },
  {
    question: 'Will this actually move my ranking?',
    answer: 'Fair question. We won\'t promise a ranking - Google weighs dozens of factors nobody can honestly guarantee. Volume and freshness are ones you can influence, and most shops have hundreds of past customers never asked. Getting them flowing is our job.',
  },
  {
    question: 'Who is this for?',
    answer: 'Flower shops whose new website or wire orders already email them. Not walk-in or paper-only shops.',
  },
  {
    question: 'Why can\'t I just ask for reviews myself?',
    answer: 'You can. The problem is timing: the ask gets dropped when you\'re slammed, exactly when you\'re serving the most customers. RevWise asks every one automatically, right after the order, by text and email, then follows up.',
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

type OpenKey = `primary-${number}` | `more-${number}` | null;

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
  const [openKey, setOpenKey] = useState<OpenKey>('primary-0');
  const [showMore, setShowMore] = useState(false);

  const toggle = (key: Exclude<OpenKey, null>) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <section id="faq" className="section bg-cream">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <span className="accent-text text-lg">Common questions</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            What flower-shop owners ask before getting started.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-border shadow-lg px-8">
            {primaryFaqs.map((faq, index) => (
              <FAQAccordionItem
                key={faq.question}
                item={faq}
                isOpen={openKey === `primary-${index}`}
                onToggle={() => toggle(`primary-${index}`)}
              />
            ))}

            <div className={showMore ? 'border-b border-gray-border' : ''}>
              <button
                type="button"
                onClick={() => setShowMore((open) => !open)}
                className="w-full py-6 text-left group"
                aria-expanded={showMore}
              >
                <span className="accent-text text-lg group-hover:text-secondary-dark transition-colors">
                  {showMore ? 'Fewer questions' : 'More questions'}
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {moreFaqs.map((faq, index) => (
                    <FAQAccordionItem
                      key={faq.question}
                      item={faq}
                      isOpen={openKey === `more-${index}`}
                      onToggle={() => toggle(`more-${index}`)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
