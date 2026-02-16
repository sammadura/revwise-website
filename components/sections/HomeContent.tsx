'use client';

import Button from '@/components/ui/Button';
import SMSDemoV2 from '@/components/ui/SMSDemoV2';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';
import FloatingStars3D from '@/components/ui/FloatingStars3D';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
} from '@/components/ui/ScrollAnimations';
import FAQ from '@/components/sections/FAQ';

export default function HomeContent() {
  return (
    <>
      {/* Hero Section - V2 Design */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28">
          {/* Floating 3D Stars - decorative background element */}
          <div className="absolute top-10 right-0 w-64 h-64 opacity-30 hidden xl:block pointer-events-none">
            <FloatingStars3D />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Copy */}
            <div className="text-center lg:text-left">
              {/* Category tagline */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Local Reputation & Google Maps Growth for Service Businesses</span>
              </div>

              {/* Main headline */}
              <h1 className="heading-xl mb-8">
                Get More 5-Star Google Reviews and{' '}
                <span className="gradient-text">Rank Higher on Google Maps.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                RevWise helps plumbers, HVAC, roofers, florists and other local service businesses turn happy customers into 5-star reviews, rank higher on Google Maps, and drive more calls—without adding more software for your team to manage.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  href="/demo-call"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 font-bold shadow-2xl shadow-black/20 hover:shadow-white/20 hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </Button>
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center justify-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right - Interactive SMS Demo */}
            <div className="relative">
              <SMSDemoV2 />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Results Section - V2 */}
      <ParallaxSection className="section bg-white relative overflow-hidden" id="case-study">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Real Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              70 New 5-Star Reviews in Just <span className="text-primary">74 Days</span>
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              See how Bella&apos;s Flower Shop went from #2 to #1 on Google
            </p>
          </ScrollReveal>

          {/* Stats with animated appearance */}
          <StaggerContainer className="flex flex-wrap justify-center gap-6 md:gap-4 mb-16">
            {[
              { value: '70+', label: 'Hours Saved', color: 'from-primary to-blue-600' },
              { value: '$1,400', label: 'Labor Saved', color: 'from-green-500 to-emerald-500' },
              { value: '#1', label: 'Google Rank', color: 'from-yellow-500 to-orange-500' },
            ].map((stat) => (
              <StaggerItem
                key={stat.label}
                className="glass-card rounded-2xl p-6 md:p-8 text-center min-w-[140px] card-hover"
              >
                <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Before/After Cards - Upgraded */}
          <ScrollReveal className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Before */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="absolute -top-4 left-8 bg-gray-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  BEFORE
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Bella&apos;s Flower Shop</h3>
                      <p className="text-gray-500 text-sm">Bronx, NY</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Google Reviews', value: '431' },
                      { label: 'Local Ranking', value: '#2' },
                      { label: 'Review Responses', value: 'Manual', muted: true },
                      { label: 'Time Spent/Month', value: '20+ hrs' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{item.label}</span>
                        <span className={`font-bold text-xl ${item.muted ? 'text-gray-400' : 'text-gray-900'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-green-400/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 border-2 border-primary shadow-xl">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  AFTER 74 DAYS
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-green-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Bella&apos;s Flower Shop</h3>
                      <p className="text-primary text-sm font-semibold">Powered by RevWise</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Google Reviews', value: '501', change: '+70' },
                      { label: 'Local Ranking', value: '#1', isTop: true },
                      { label: 'Review Responses', value: 'Automated', isGreen: true },
                      { label: 'Time Spent/Month', value: '~0 hrs', isGreen: true },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0">
                        <span className="text-gray-600">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-xl ${item.isGreen ? 'text-green-600' : item.isTop ? 'text-primary' : 'text-gray-900'}`}>
                            {item.value}
                          </span>
                          {item.change && (
                            <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">{item.change}</span>
                          )}
                          {item.isTop && (
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Video Testimonial */}
          <ScrollReveal delay={0.2} className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white p-3 md:p-4 rounded-3xl border border-gray-200 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-blue-700 rounded-2xl overflow-hidden">
                <YouTubeEmbed
                  videoId="ikorkXepRnk"
                  title="Lea Davis testimonial - Bella's Flower Shop RevWise review"
                  overlayHeading="Hear It From Our Client"
                  overlaySubtext="Lea Davis, Owner of Bella's Flower Shop"
                  duration="0:35 Testimonial"
                />
              </div>
              <div className="flex items-center justify-center gap-3 mt-4 mb-2">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">LD</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Lea Davis</p>
                  <p className="text-sm text-gray-500">Owner, Bella&apos;s Flower Shop</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* How It Works - V2 */}
      <section id="how-it-works" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              White-Glove Setup
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              How RevWise Works
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              We handle everything. You just show up to a quick onboarding call.
            </p>
          </ScrollReveal>

          {/* Video - Enhanced */}
          <ScrollReveal className="max-w-4xl mx-auto mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white p-3 md:p-4 rounded-3xl border border-gray-200 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-blue-700 rounded-2xl overflow-hidden">
                <YouTubeEmbed
                  videoId="GGNqGZ0AUo4"
                  title="RevWise Demo - See how we help businesses get more Google reviews"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Steps - Upgraded with connecting line */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-primary via-purple-500 to-green-500" />

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '1',
                  title: 'Book a Demo',
                  desc: 'Schedule a quick demo to see how RevWise can help your business get more reviews.',
                  color: 'from-primary to-blue-600',
                },
                {
                  num: '2',
                  title: '45-Min Onboarding Call',
                  desc: 'We take care of everything — linking your Google Business Profile, setting up automations, and customizing your messaging.',
                  color: 'from-purple-500 to-indigo-600',
                },
                {
                  num: '3',
                  title: 'Watch Reviews Roll In',
                  desc: 'Automated SMS requests go out. 5-star reviews come in. You focus on running your business.',
                  color: 'from-green-500 to-emerald-600',
                },
              ].map((step) => (
                <StaggerItem key={step.num} className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full card-hover relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.num}
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="relative z-10 text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              href="/demo-call"
              variant="primary"
              className="text-lg px-10 py-5 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              Book Your Free Demo
            </Button>
            <p className="text-gray-500 mt-4">We take care of the rest.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section - V2 */}
      <section id="pricing" className="section bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Simple Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              One Plan. Everything Included.
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              No hidden fees. No complicated tiers. Just results.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="max-w-lg mx-auto relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-[2.5rem] blur-2xl opacity-20" />

            <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden">
              {/* Price header */}
              <div className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 text-white p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
                <p className="relative text-sm font-medium uppercase tracking-widest mb-2 text-white/80">Everything You Need</p>
                <div className="relative flex items-baseline justify-center gap-1">
                  <span className="text-6xl md:text-7xl font-bold">$99</span>
                  <span className="text-2xl text-white/80">/month</span>
                </div>
                <p className="relative mt-4 text-white/70">14-day free trial. Cancel anytime.</p>
              </div>

              {/* Features list */}
              <div className="p-10">
                <ul className="space-y-5">
                  {[
                    'Unlimited review requests',
                    'Automated SMS & email campaigns',
                    'AI-powered review responses',
                    'Smart review routing',
                    'Real-time dashboard & analytics',
                    'Google Business Profile integration',
                    'Dedicated support',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    href="/demo-call"
                    variant="primary"
                    className="w-full text-lg py-5 font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    Start Your Free Trial
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>

            {/* ROI callout */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="text-green-800 font-semibold text-lg">
                <span className="text-green-600">Bella&apos;s saved $1,400/month</span> in labor costs alone.
                <br />
                <span className="text-green-700">RevWise pays for itself 14x over.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid - V2 Bento Style */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Everything You Need to <span className="text-primary">Dominate</span> Local Search
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Powerful features designed to boost your online reputation automatically
            </p>
          </ScrollReveal>

          {/* Bento Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* SMS Review Requests - Featured wide card */}
            <StaggerItem className="md:col-span-2 group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100 card-hover">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">SMS Review Requests</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Personalized text messages that get responses. Your customers are on their phones — meet them there.</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">10%</p>
                      <p className="text-xs text-gray-500 font-medium">Click-through rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-600">52%</p>
                      <p className="text-xs text-gray-500 font-medium">Email open rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* AI Response Writer - Tall card */}
            <StaggerItem className="md:row-span-2 group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100 card-hover flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">AI Response Writer</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Every review gets a thoughtful, personalized response — positive or negative. 24/7 coverage.</p>
              <div className="mt-auto space-y-3">
                <div className="bg-white/80 rounded-xl p-3 border border-purple-100 shadow-sm">
                  <p className="text-xs text-purple-400 mb-1 font-medium">5-star response</p>
                  <p className="text-sm text-gray-600 italic">&quot;Thank you so much, Sarah! We loved working on your arrangements...&quot;</p>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-purple-100 shadow-sm">
                  <p className="text-xs text-purple-400 mb-1 font-medium">Recovery response</p>
                  <p className="text-sm text-gray-600 italic">&quot;We&apos;re sorry to hear that, Mike. We&apos;d love to make this right...&quot;</p>
                </div>
              </div>
            </StaggerItem>

            {/* Smart Routing */}
            <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Smart Routing</h3>
              <p className="text-gray-600 leading-relaxed">Happy customers go to Google. Unhappy ones come to you first, privately.</p>
            </StaggerItem>

            {/* Perfect Timing */}
            <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Perfect Timing</h3>
              <p className="text-gray-600 leading-relaxed">Send requests at the optimal moment when customers are happiest with your service.</p>
            </StaggerItem>

            {/* Live Dashboard - Featured wide card */}
            <StaggerItem className="md:col-span-2 group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100 card-hover">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    Live Dashboard
                    <span className="ml-2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full align-middle">Coming soon</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">Real-time analytics. Track reviews, responses, and your ranking progress — all in one place.</p>
                </div>
              </div>
            </StaggerItem>

            {/* White-Glove Onboarding */}
            <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">White-Glove Onboarding</h3>
              <p className="text-gray-600 leading-relaxed">One 45-minute call and we handle everything. No technical skills needed.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              Trusted by Local Businesses
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Businesses Love RevWise
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Here&apos;s what our clients say about their experience
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "RevWise made collecting reviews effortless. We went from #2 to #1 in our area without lifting a finger!",
                name: "Lea Davis",
                role: "Owner, Bella's Flower Shop",
                initials: "LD",
                gradient: "from-primary to-blue-600",
              },
              {
                quote: "We used to beg customers for reviews. Now they come in automatically. Best $99 we spend every month.",
                name: "Marcus Johnson*",
                role: "Owner, Johnson HVAC",
                initials: "MJ",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                quote: "The smart routing feature is genius. Unhappy customers reach us directly instead of blasting us on Google.",
                name: "Rachel Kim*",
                role: "Manager, Elite Plumbing Co.",
                initials: "RK",
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((testimonial) => (
              <StaggerItem key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-xs text-gray-400 mt-8">
            * Representative example based on typical results.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA - V2 */}
      <section className="section bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
        </div>

        <ScrollReveal className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to Be <span className="gradient-text">#1</span> in Your Area?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl mx-auto">
            Join businesses like Bella&apos;s Flower Shop who went from good to unstoppable with RevWise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              href="/demo-call"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-50 text-lg px-10 py-5 font-bold shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
            </Button>
          </div>
          <p className="text-white/60 text-sm">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
