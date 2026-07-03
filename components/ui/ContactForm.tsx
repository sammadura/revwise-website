'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface ContactFormValues {
  name: string;
  shopName: string;
  email: string;
  phone: string;
  preferredTimes: string;
  message: string;
  website: string; // honeypot — hidden from real visitors
}

const inputClasses =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors';

const labelClasses = 'block text-sm font-semibold text-gray-700 mb-1.5';

export default function ContactForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      router.push('/contact/thank-you');
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — hidden from real visitors, bots fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Maria Lopez"
            className={inputClasses}
            aria-invalid={!!errors.name}
            {...register('name', { required: 'Please tell me your name.' })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1.5">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="shopName" className={labelClasses}>
            Shop name
          </label>
          <input
            id="shopName"
            type="text"
            placeholder="Your flower shop"
            className={inputClasses}
            {...register('shopName')}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={inputClasses}
            aria-invalid={!!errors.email}
            {...register('email', {
              required: 'I need an email to reach you.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'That email doesn’t look right.',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1.5">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 555-5555"
            className={inputClasses}
            {...register('phone')}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="preferredTimes" className={labelClasses}>
          Good times to talk <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <input
          id="preferredTimes"
          type="text"
          placeholder="Weekday mornings, Tuesday after 2pm..."
          className={inputClasses}
          {...register('preferredTimes')}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelClasses}>
          Tell me a little about your shop *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Where you're located, how long you've been open, what made you curious about RevWise..."
          className={inputClasses}
          aria-invalid={!!errors.message}
          {...register('message', { required: 'A sentence or two is plenty.' })}
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1.5">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Request a call'}
      </button>

      {submitError && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
          Something went wrong sending your message. Email Sam directly instead:{' '}
          <a
            href="mailto:sam@getrevwise.com?subject=Book%20a%20call%20about%20my%20flower%20shop"
            className="font-semibold underline"
          >
            sam@getrevwise.com
          </a>
        </div>
      )}
    </form>
  );
}
