'use client';

import { useState } from 'react';

interface AuditResult {
  business: {
    name: string;
    city: string;
    reviewCount: number;
    rating: number;
  };
  competitors: {
    name: string;
    reviewCount: number;
    rating: number;
  }[];
  gap: number;
  competitorAvg: number;
  estimatedMissedCalls: number;
}

export default function AuditPage() {
  const [step, setStep] = useState<'form' | 'email' | 'loading' | 'results'>('form');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('hvac');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  const categories = [
    { value: 'hvac', label: 'HVAC' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'roofing', label: 'Roofing' },
    { value: 'landscaping', label: 'Landscaping' },
    { value: 'pest_control', label: 'Pest Control' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'flooring', label: 'Flooring' },
    { value: 'painting', label: 'Painting' },
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'florist', label: 'Florist' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmitBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !city.trim()) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setStep('email');
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !firstName.trim()) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setStep('loading');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, city, category, email, firstName }),
      });
      const data = await res.json();
      setResult(data);
      setStep('results');
    } catch {
      setError('Something went wrong. Please try again.');
      setStep('email');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-light to-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Free — No Credit Card Required
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Free Google Review Audit
            </h1>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              See how your Google reviews stack up against your local competitors — and how many calls you might be losing.
            </p>
          </div>

          {/* Step 1: Business Info */}
          {step === 'form' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Tell us about your business</h2>
              <form onSubmit={handleSubmitBusiness} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Johnson's HVAC Services"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Dallas, TX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  See My Review Score →
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Email Capture */}
          {step === 'email' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-2">Almost there!</h2>
              <p className="text-gray-medium mb-6">Enter your details and we&apos;ll generate your personalized review audit.</p>
              <form onSubmit={handleSubmitEmail} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Generate My Free Audit →
                </button>
                <p className="text-center text-xs text-gray-400">We&apos;ll never spam you. Unsubscribe anytime.</p>
              </form>
            </div>
          )}

          {/* Loading */}
          {step === 'loading' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
              <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-2">Analyzing your reviews...</h2>
              <p className="text-gray-medium">Scanning Google reviews for {businessName} and competitors in {city}</p>
            </div>
          )}

          {/* Results */}
          {step === 'results' && result && (
            <div className="space-y-6">
              {/* Your Score */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Your Google Review Audit</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <p className="text-sm font-semibold text-gray-500 mb-1">Your Reviews</p>
                    <p className="text-4xl font-bold text-primary">{result.business.reviewCount}</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= Math.round(result.business.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-1">{result.business.rating}</span>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 text-center">
                    <p className="text-sm font-semibold text-gray-500 mb-1">Competitor Average</p>
                    <p className="text-4xl font-bold text-amber-600">{result.competitorAvg}</p>
                    <p className="text-sm text-gray-500 mt-2">reviews</p>
                  </div>
                  <div className={`${result.gap > 0 ? 'bg-red-50' : 'bg-green-50'} rounded-xl p-6 text-center`}>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Review Gap</p>
                    <p className={`text-4xl font-bold ${result.gap > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {result.gap > 0 ? `-${result.gap}` : `+${Math.abs(result.gap)}`}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">{result.gap > 0 ? 'behind' : 'ahead'}</p>
                  </div>
                </div>

                {/* Competitor Breakdown */}
                <h3 className="font-bold text-lg mb-4">Your Local Competitors</h3>
                <div className="space-y-3 mb-8">
                  {result.competitors.map((comp, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          comp.reviewCount > result.business.reviewCount ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                        }`}>
                          #{i + 1}
                        </span>
                        <span className="font-medium">{comp.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{comp.reviewCount}</span>
                        <span className="text-gray-400 text-sm ml-1">reviews</span>
                        <span className="text-gray-400 mx-2">·</span>
                        <span className="text-sm">{comp.rating} ★</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Revenue Impact */}
                {result.gap > 0 && (
                  <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-6 mb-8 border border-red-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-bold text-gray-900">You&apos;re likely losing ~{result.estimatedMissedCalls} calls per month</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Businesses with more reviews get 44% more calls on average. Your review gap means potential customers are calling your competitors instead.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Close the Gap — Automatically</h3>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                  RevWise automatically sends review requests to your customers after every job. No new software to learn. It just runs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/demo-call" className="btn bg-primary text-white hover:bg-blue-600 px-8 py-4 text-lg rounded-xl">
                    Start Your Free Trial — $99/mo
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">Cancel anytime. No contracts. No setup fees.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
