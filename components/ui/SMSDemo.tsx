'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: number;
  type: 'business' | 'system';
  text: string;
  delay: number;
  isLink?: boolean;
  hasImage?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'business',
    text: "Hi Sarah! It's Bella's Flower Shop 💐",
    delay: 0,
    hasImage: true,
  },
  {
    id: 2,
    type: 'business',
    text: "Hope you loved your florals! If you did, could you do us a quick favor and leave us a review on Google? It helps us a lot and it's super fast, just click the link 👇",
    delay: 1500,
  },
  {
    id: 3,
    type: 'business',
    text: '⭐ Leave a Review on Google',
    delay: 2500,
    isLink: true,
  },
  {
    id: 4,
    type: 'system',
    text: 'Sarah clicked the link and left a 5-star review!',
    delay: 5000,
  },
];

export default function SMSDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resetDemo = () => {
    setVisibleMessages([]);
    setShowConfetti(false);
    setIsPlaying(true);
    setHasStarted(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timers: NodeJS.Timeout[] = [];

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message.id]);

        // Show confetti when the success message appears
        if (message.id === 4) {
          setShowConfetti(true);
        }
      }, message.delay);
      timers.push(timer);
    });

    // Stop playing after all messages
    const stopTimer = setTimeout(() => {
      setIsPlaying(false);
    }, 7000);
    timers.push(stopTimer);

    return () => timers.forEach((t) => clearTimeout(t));
  }, [isPlaying]);

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      resetDemo();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Phone notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />

        {/* Phone screen */}
        <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-white px-6 py-2 flex justify-between items-center text-xs text-gray-500">
            <span>9:41</span>
            <div className="flex gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>

          {/* Chat header */}
          <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Bella&apos;s Flower Shop</p>
              <p className="text-xs text-gray-500">Automated Review Request</p>
            </div>
          </div>

          {/* Messages area */}
          <div className="h-80 bg-gray-100 px-4 py-4 space-y-3 overflow-hidden relative">
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

            {/* Flower image - shown with first message */}
            {visibleMessages.includes(1) && (
              <div className="transition-all duration-500 opacity-100">
                <div className="bg-white rounded-2xl rounded-tl-sm p-2 shadow-sm max-w-[75%]">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden bg-pink-100">
                    <Image
                      src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_400/u_https://assets.cdn.filesafe.space/C6x7wJOrgkTTDc0htJ2D/media/67860d7d9d12d0e17da74f0d.jpeg"
                      alt="Beautiful flower arrangement"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-gray-700">
                      Sarah!
                    </div>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => {
              if (message.hasImage) {
                // First message text (after image)
                return (
                  <div
                    key={message.id}
                    className={`transition-all duration-500 ${
                      visibleMessages.includes(message.id)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                    }`}
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%]">
                      <p className="text-sm leading-relaxed text-gray-800">{message.text}</p>
                    </div>
                  </div>
                );
              }

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
                    <div className="flex justify-center">
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
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
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%]">
                    {message.isLink ? (
                      <span className="text-primary font-semibold text-sm underline">
                        {message.text}
                      </span>
                    ) : (
                      <p className="text-sm leading-relaxed text-gray-800">{message.text}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Confetti effect */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-bounce"
                    style={{
                      left: `${10 + (i * 7)}%`,
                      top: `${20 + (i % 3) * 10}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1s',
                    }}
                  >
                    <span className="text-lg">
                      {['⭐', '🎉', '✨', '💐'][i % 4]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Replay button */}
          {hasStarted && !isPlaying && (
            <div className="bg-white px-4 py-3 border-t border-gray-200">
              <button
                onClick={resetDemo}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
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
      <div className="absolute -top-4 -right-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
        Live Demo
      </div>
    </div>
  );
}
