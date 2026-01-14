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

export default function SMSDemo() {
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
      {/* Phone frame */}
      <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Phone notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />

        {/* Phone screen */}
        <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-white px-6 py-2 flex justify-between items-center text-xs text-gray-500">
            <span className="font-medium">9:41</span>
            <div className="flex gap-1 items-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="w-6 h-3 bg-gray-400 rounded-sm relative">
                <div className="absolute inset-0.5 bg-green-500 rounded-sm" style={{ width: '80%' }} />
              </div>
            </div>
          </div>

          {/* Chat header */}
          <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">BF</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Bella&apos;s Flowers</p>
              <p className="text-xs text-gray-500">Text Message</p>
            </div>
          </div>

          {/* Messages area */}
          <div className="h-64 bg-gray-100 px-4 py-4 space-y-2.5">
            {!hasStarted && (
              <div className="flex items-center justify-center h-full">
                <button
                  onClick={resetDemo}
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </button>
              </div>
            )}

            {hasStarted && messages.map((message) => {
              if (message.type === 'system') {
                return (
                  <div
                    key={message.id}
                    className={`transition-all duration-500 ${
                      visibleMessages.includes(message.id)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                    }`}
                  >
                    <div className="flex justify-center mt-3">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {message.text}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={message.id}
                  className={`transition-all duration-500 ${
                    visibleMessages.includes(message.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                  }`}
                >
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-2.5 shadow-sm max-w-[85%]">
                    {message.isLink ? (
                      <span className="text-primary font-medium text-sm underline">
                        {message.text}
                      </span>
                    ) : (
                      <p className="text-sm leading-relaxed text-gray-800">{message.text}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom bar / Replay */}
          {hasStarted && !isPlaying && (
            <div className="bg-white px-4 py-3 border-t border-gray-200">
              <button
                onClick={resetDemo}
                className="w-full bg-gray-100 text-gray-600 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Replay Demo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
        Live Demo
      </div>
    </div>
  );
}
