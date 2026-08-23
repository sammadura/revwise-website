export const SIGNUP_URL = 'https://app.revwise.us/signup';

export const CTA_LABEL = 'Get your shop address';

export const PRICE_HEADLINE = 'One plan. $49 a month.';

export const PRICE_PITCH =
  'About a dollar an order. Never more than $49 a month.';

export const CHARGE_COPY =
  'Add a card after you copy your shop address. Charged on the first captured order, or day 7. If you don\u2019t get a new Google review, we refund the first month.';

export const FOUNDING_NOTE =
  'Shops already on the founding $15 / 60-day terms keep them.';

export const WHO_ITS_FOR =
  'For flower shops whose new website or wire orders already email them. Not walk-in or paper-only shops.';

export const PLAN_FEATURES = [
  'Review texts after every order when the email has a phone number',
  'Messages in your shop\u2019s voice',
  'Friendly follow-ups',
  'One-step setup: copy your shop address',
  'No contract. Cancel anytime.',
] as const;

export interface SupportedSystem {
  name: string;
  note?: string;
}

export const SUPPORTED_SYSTEMS: SupportedSystem[] = [
  { name: 'Floranext' },
  { name: 'Shopify', note: 'staff new-order notifications' },
  { name: 'Square Online', note: 'not register-only' },
  { name: 'BloomNation' },
  { name: 'FTD Mercury', note: 'BCC on the Email screen, not WOI' },
  { name: 'WooCommerce' },
  { name: 'Wix Stores' },
  { name: 'Ecwid / GoDaddy Online Store' },
];
