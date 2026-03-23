'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

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
  reviewHealthScore: number;
  quickWins: string[];
  insights: string[];
  velocityInsight: string;
  ratingImpact: {
    ratingGap: number;
    topCompetitorRating: number;
    topCompetitorName: string;
    revenueImpactPercent: number;
    estimatedMonthlyLoss: number;
    insight: string;
  };
  rankingEstimate: {
    estimatedPosition: number;
    totalCompared: number;
    rankings: { name: string; score: number; position: number }[];
    insight: string;
  };
  profileCheck: {
    hasWebsite: boolean;
    websiteUrl: string | null;
    hasPhotos: boolean;
    photoCount: number;
    hasHours: boolean;
    missingFields: string[];
    completenessScore: number;
    insight: string;
  };
}

function ScoreGauge({ score }: { score: number }) {
  const color = score >= 70 ? 'text-green-500' : score >= 40 ? 'text-amber-500' : 'text-red-500';
  const bgColor = score >= 70 ? 'bg-green-50 border-green-200' : score >= 40 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200';
  const label = score >= 70 ? 'Good' : score >= 40 ? 'Needs Work' : 'Critical';

  return (
    <div className={`${bgColor} border-2 rounded-2xl p-8 text-center`}>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Review Health Score</p>
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle
            cx="60" cy="60" r="50" fill="none"
            stroke="currentColor"
            className={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${(score / 100) * 314} 314`}
          />
        </svg>
        <span className={`absolute text-4xl font-bold ${color}`}>{score}</span>
      </div>
      <p className={`text-lg font-bold mt-3 ${color}`}>{label}</p>
      <p className="text-sm text-gray-500 mt-1">out of 100</p>
    </div>
  );
}

function ProfileCheckBadge({ present, label }: { present: boolean; label: string }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border ${present ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
      {present ? (
        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
      <span className={`text-sm font-medium ${present ? 'text-green-700' : 'text-red-700'}`}>{label}</span>
    </div>
  );
}

interface PlaceSuggestion {
  placeId: string;
  name: string;
  address: string;
  fullText: string;
}

export default function AuditPage() {
  const [step, setStep] = useState<'form' | 'email' | 'loading' | 'results'>('form');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceSuggestion | null>(null);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.trim().length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    setIsSearching(true);
    try {
      const res = await fetch('/api/audit/autocomplete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      setSuggestions(data.suggestions ?? []);
      setShowDropdown((data.suggestions ?? []).length > 0);
    } catch {
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setSelectedPlace(null);
    setError('');

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  const handleSelectPlace = (place: PlaceSuggestion) => {
    setSelectedPlace(place);
    setSearchQuery(place.fullText);
    setShowDropdown(false);
    setSuggestions([]);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmitBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlace) {
      setError('Please select a business from the dropdown');
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
        body: JSON.stringify({
          placeId: selectedPlace?.placeId,
          businessName: selectedPlace?.name,
          city: selectedPlace?.address,
          email,
          firstName,
        }),
      });
      const data = await res.json();
      setResult(data);
      setStep('results');
    } catch {
      setError('Something went wrong. Please try again.');
      setStep('email');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-light to-white py-16 print:bg-white print:py-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header - shown on form/email/loading steps */}
          {step !== 'results' && (
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
          )}

          {/* Step 1: Business Search */}
          {step === 'form' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Find your business</h2>
              <form onSubmit={handleSubmitBusiness} className="space-y-5">
                <div ref={dropdownRef} className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Search for your business on Google</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                      placeholder="e.g. Johnson's HVAC Services Dallas"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-10"
                      autoComplete="off"
                    />
                    {isSearching && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Autocomplete dropdown */}
                  {showDropdown && suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion.placeId}
                          type="button"
                          onClick={() => handleSelectPlace(suggestion)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          <p className="font-medium text-gray-900 text-sm">{suggestion.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{suggestion.address}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Selected place confirmation */}
                  {selectedPlace && (
                    <div className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-green-800 truncate">{selectedPlace.name}</p>
                        <p className="text-xs text-green-600 truncate">{selectedPlace.address}</p>
                      </div>
                    </div>
                  )}
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={!selectedPlace}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
              <p className="text-gray-medium">Scanning Google reviews for {selectedPlace?.name ?? 'your business'} and local competitors</p>
            </div>
          )}

          {/* Results - Report Style */}
          {step === 'results' && result && (
            <div className="space-y-6" id="audit-report">
              {/* Report Header */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden print:shadow-none print:border-0">
                <div className="bg-gradient-to-r from-gray-900 to-slate-800 px-8 py-6 md:px-10 md:py-8 print:bg-gray-900">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-1">Google Review Audit Report</p>
                      <h1 className="text-2xl md:text-3xl font-bold text-white">{result.business.name}</h1>
                      <p className="text-gray-400 mt-1">{result.business.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Report generated</p>
                      <p className="text-white font-medium">{today}</p>
                    </div>
                  </div>
                </div>

                {/* Score + Key Metrics */}
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <ScoreGauge score={result.reviewHealthScore} />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-xl p-5 text-center">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Reviews</p>
                        <p className="text-3xl font-bold text-primary">{result.business.reviewCount}</p>
                        <div className="flex items-center justify-center gap-0.5 mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(result.business.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">{result.business.rating}</span>
                        </div>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-5 text-center">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Competitor Avg</p>
                        <p className="text-3xl font-bold text-amber-600">{result.competitorAvg}</p>
                        <p className="text-xs text-gray-500 mt-2">reviews</p>
                      </div>
                      <div className={`${result.gap > 0 ? 'bg-red-50' : 'bg-green-50'} rounded-xl p-5 text-center`}>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Review Gap</p>
                        <p className={`text-3xl font-bold ${result.gap > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {result.gap > 0 ? `-${result.gap}` : `+${Math.abs(result.gap)}`}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">{result.gap > 0 ? 'behind' : 'ahead'}</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-5 text-center">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Est. Missed Calls</p>
                        <p className="text-3xl font-bold text-secondary">{result.estimatedMissedCalls}</p>
                        <p className="text-xs text-gray-500 mt-2">per month</p>
                      </div>
                    </div>
                  </div>

                  {/* Competitor Table */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Competitor Comparison
                    </h2>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <th className="px-5 py-3">Business</th>
                            <th className="px-5 py-3 text-right">Reviews</th>
                            <th className="px-5 py-3 text-right">Rating</th>
                            <th className="px-5 py-3 text-right">vs You</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {/* User's business row */}
                          <tr className="bg-blue-50/50">
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                <span className="font-semibold text-gray-900">{result.business.name}</span>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">You</span>
                              </div>
                            </td>
                            <td className="px-5 py-3.5 text-right font-bold text-gray-900">{result.business.reviewCount}</td>
                            <td className="px-5 py-3.5 text-right">
                              <span className="text-yellow-500">★</span> {result.business.rating}
                            </td>
                            <td className="px-5 py-3.5 text-right text-gray-400">—</td>
                          </tr>
                          {result.competitors.map((comp, i) => {
                            const diff = comp.reviewCount - result.business.reviewCount;
                            return (
                              <tr key={i} className="hover:bg-gray-50/50">
                                <td className="px-5 py-3.5">
                                  <span className="font-medium text-gray-700">{comp.name}</span>
                                </td>
                                <td className="px-5 py-3.5 text-right font-bold text-gray-900">{comp.reviewCount}</td>
                                <td className="px-5 py-3.5 text-right">
                                  <span className="text-yellow-500">★</span> {comp.rating}
                                </td>
                                <td className="px-5 py-3.5 text-right">
                                  {diff > 0 ? (
                                    <span className="inline-flex items-center gap-1 text-red-600 font-semibold text-sm">
                                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                      </svg>
                                      +{diff}
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm">
                                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      {diff}
                                    </span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Review Velocity */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Review Velocity
                    </h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
                      <p className="text-gray-700 text-sm leading-relaxed">{result.velocityInsight}</p>
                    </div>
                  </div>

                  {/* Rating Gap Impact */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      Rating Gap Revenue Impact
                    </h2>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 p-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{result.ratingImpact.insight}</p>
                      {result.ratingImpact.ratingGap > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white/80 rounded-lg p-3 text-center">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Rating Gap</p>
                            <p className="text-xl font-bold text-amber-600">{result.ratingImpact.ratingGap} ★</p>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3 text-center">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Click Impact</p>
                            <p className="text-xl font-bold text-red-600">-{result.ratingImpact.revenueImpactPercent}%</p>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3 text-center">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Est. Lost/Mo</p>
                            <p className="text-xl font-bold text-red-600">${result.ratingImpact.estimatedMonthlyLoss.toLocaleString()}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Google Maps Ranking Estimate */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Google Maps Ranking Estimate
                    </h2>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 p-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{result.rankingEstimate.insight}</p>
                      <div className="space-y-2">
                        {result.rankingEstimate.rankings.map((entry, i) => {
                          const isUser = entry.name === result.business.name;
                          const isTop3 = entry.position <= 3;
                          return (
                            <div
                              key={i}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg ${
                                isUser
                                  ? 'bg-blue-100 border border-blue-200'
                                  : isTop3
                                    ? 'bg-green-100/60 border border-green-200/60'
                                    : 'bg-white/80 border border-gray-100'
                              }`}
                            >
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                entry.position === 1 ? 'bg-yellow-400 text-yellow-900'
                                  : entry.position === 2 ? 'bg-gray-300 text-gray-700'
                                    : entry.position === 3 ? 'bg-amber-600 text-white'
                                      : 'bg-gray-100 text-gray-500'
                              }`}>
                                {entry.position}
                              </span>
                              <span className={`flex-1 text-sm font-medium ${isUser ? 'text-blue-800' : 'text-gray-700'}`}>
                                {entry.name}
                                {isUser && <span className="ml-2 text-xs bg-blue-200 text-blue-700 px-1.5 py-0.5 rounded-full">You</span>}
                              </span>
                              <span className="text-xs text-gray-500">Score: {entry.score}</span>
                            </div>
                          );
                        })}
                      </div>
                      {result.rankingEstimate.estimatedPosition > 3 && (
                        <p className="text-xs text-gray-500 mt-3 italic">
                          Only positions 1-3 appear in Google&apos;s local 3-pack. Businesses outside the 3-pack see significantly fewer clicks.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Google Business Profile Check */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Google Business Profile Check
                    </h2>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <ProfileCheckBadge present={result.profileCheck.hasWebsite} label="Website" />
                        <ProfileCheckBadge present={result.profileCheck.hasPhotos} label={`Photos${result.profileCheck.hasPhotos ? ` (${result.profileCheck.photoCount})` : ''}`} />
                        <ProfileCheckBadge present={result.profileCheck.hasHours} label="Business Hours" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{result.profileCheck.insight}</p>
                      {result.profileCheck.hasWebsite && result.profileCheck.websiteUrl && (
                        <p className="text-xs text-gray-500 mt-2">
                          Website: <span className="text-purple-600 font-medium">{result.profileCheck.websiteUrl}</span>
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase">Profile Completeness</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              result.profileCheck.completenessScore >= 80 ? 'bg-green-500'
                                : result.profileCheck.completenessScore >= 60 ? 'bg-amber-500'
                                  : 'bg-red-500'
                            }`}
                            style={{ width: `${result.profileCheck.completenessScore}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-600">{result.profileCheck.completenessScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* What This Means */}
                  <div className="mb-10">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      What This Means For Your Business
                    </h2>
                    <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-xl border border-red-100 p-6">
                      <ul className="space-y-4">
                        {result.insights.map((insight, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5">
                              {i + 1}
                            </span>
                            <p className="text-gray-700 text-sm leading-relaxed">{insight}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quick Wins */}
                  <div className="mb-6">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      3 Quick Wins to Improve Your Reviews
                    </h2>
                    <div className="space-y-3">
                      {result.quickWins.map((win, i) => (
                        <div key={i} className="flex gap-4 bg-green-50 rounded-xl border border-green-100 p-5">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed pt-1">{win}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download + CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white print:hidden">
                <div className="text-center mb-8">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Full PDF Report
                  </button>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Close the Gap?</h3>
                  <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                    RevWise automatically sends review requests after every job — no extra work for you or your team. Most customers see 3-5x more reviews within 60 days.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/demo-call" className="btn bg-primary text-white hover:bg-blue-600 px-8 py-4 text-lg rounded-xl">
                      Book a Free Demo Call
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">No credit card required. See RevWise in action in 15 minutes.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
