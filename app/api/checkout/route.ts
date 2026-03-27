import { NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const PRICE_ID = 'price_1Se187P9fkdjV1OiXrlOJwH7';
const TRIAL_DAYS = 14;

export async function POST() {
  if (!STRIPE_SECRET_KEY) {
    console.error('[CHECKOUT] Missing STRIPE_SECRET_KEY env var');
    return NextResponse.json({ error: 'Payment system not configured' }, { status: 500 });
  }

  try {
    const params = new URLSearchParams();
    params.append('mode', 'subscription');
    params.append('success_url', 'https://getrevwise.com/checkout/success');
    params.append('cancel_url', 'https://getrevwise.com/pricing');
    params.append('line_items[0][price]', PRICE_ID);
    params.append('line_items[0][quantity]', '1');
    params.append('subscription_data[trial_period_days]', String(TRIAL_DAYS));
    params.append('allow_promotion_codes', 'true');

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await response.json();

    if (session.error) {
      console.error('[CHECKOUT] Stripe error:', session.error.message);
      return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[CHECKOUT] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
