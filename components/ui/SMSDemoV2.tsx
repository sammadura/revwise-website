'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: number;
  type: 'business' | 'system';
  text: string;
  delay: number;
  isLink?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'business',
    text: "Hi Sarah! It's Bella's Flower Shop 💐",
    delay: 0,
  },
  {
    id: 2,
    type: 'business',
    text: "Hope you loved your florals! Mind leaving us a quick Google review? It means a lot 🙏",
    delay: 1200,
  },
  {
    id: 3,
    type: 'business',
    text: 'g.page/bellas-flowers/review',
    delay: 2200,
    isLink: true,
  },
  {
    id: 4,
    type: 'system',
    text: '⭐ New 5-star review!',
    delay: 4200,
  },
];

export default function SMSDemoV2() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resetDemo = () => {
    setVisibleMessages([]);
    setIsPlaying(true);
    setHasStarted(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timers: NodeJS.Timeout[] = [];

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message.id]);
      }, message.delay);
      timers.push(timer);
    });

    const stopTimer = setTimeout(() => {
      setIsPlaying(false);
    }, 6000);
    timers.push(stopTimer);

    return () => timers.forEach((t) => clearTimeout(t));
  }, [isPlaying]);

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      resetDemo();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Glow effect behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/20 to-primary/30 rounded-[4rem] blur-2xl opacity-60" />

      {/* Phone frame */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10">
        {/* Phone notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-gray-700 rounded-full" />
          <div className="w-3 h-3 bg-gray-800 rounded-full ring-1 ring-gray-700" />
        </div>

        {/* Phone screen */}
        <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-white px-6 py-2 flex justify-between items-center text-xs text-gray-500">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1.5 items-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="w-7 h-3.5 bg-gray-300 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0.5 bg-green-500 rounded-sm" style={{ width: '85%' }} />
              </div>
            </div>
          </div>

          {/* Chat header */}
          <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 shadow-sm">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
              <span className="text-white font-bold text-sm">BF</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Bella&apos;s Flowers</p>
              <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Active now
              </p>
            </div>
          </div>

          {/* Messages area - FIXED HEIGHT */}
          <div className="h-80 bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-4 flex flex-col">
            {!hasStarted && (
              <div className="flex items-center justify-center h-full">
                <button
                  onClick={resetDemo}
                  className="group bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Watch Demo
                </button>
              </div>
            )}

            {hasStarted && (
              <div className="space-y-3 flex-1">
                {/* Message 1 */}
                <div
                  className={`transition-opacity duration-300 ${
                    visibleMessages.includes(1) ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%] border border-gray-100">
                    <p className="text-sm leading-relaxed text-gray-800">Hi Sarah! It&apos;s Bella&apos;s Flower Shop 💐</p>
                  </div>
                </div>

                {/* Message 2 */}
                <div
                  className={`transition-opacity duration-300 ${
                    visibleMessages.includes(2) ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%] border border-gray-100">
                    <p className="text-sm leading-relaxed text-gray-800">Hope you loved your florals! Mind leaving us a quick Google review? It means a lot 🙏</p>
                  </div>
                </div>

                {/* Message 3 - Link */}
                <div
                  className={`transition-opacity duration-300 ${
                    visibleMessages.includes(3) ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%] border border-gray-100">
                    <span className="text-primary font-medium text-sm underline decoration-2 underline-offset-2">
                      Click to leave Google review
                    </span>
                  </div>
                </div>

                {/* Typing indicator */}
                {hasStarted && !visibleMessages.includes(4) && visibleMessages.length > 0 && visibleMessages.length < 4 && (
                  <div className="flex gap-1 px-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                )}

                {/* Success message - positioned at bottom */}
                <div
                  className={`transition-all duration-500 ${
                    visibleMessages.includes(4) ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex justify-center pt-2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-md">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      New 5-star review!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Floating badge - moved up and left so it doesn't cover status bar */}
      <div className="absolute -top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-green-500/30 flex items-center gap-1.5">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        Live Demo
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400/20 rounded-full blur-xl" />
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
    </div>
  );
}
