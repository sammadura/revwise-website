'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: number;
  type: 'business' | 'customer';
  text: string;
  delay: number;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'business',
    text: "Hi Sarah! Thanks for visiting Bella's Flower Shop today. We'd love to hear about your experience!",
    delay: 0,
  },
  {
    id: 2,
    type: 'business',
    text: 'How would you rate your visit? Tap a star below:',
    delay: 1500,
  },
  {
    id: 3,
    type: 'customer',
    text: '5 stars - Absolutely loved it!',
    delay: 4000,
  },
  {
    id: 4,
    type: 'business',
    text: "Wonderful! We're so glad you had a great experience. Would you mind sharing a quick review on Google? It helps other flower lovers find us!",
    delay: 5500,
  },
  {
    id: 5,
    type: 'business',
    text: '[Leave a Review on Google]',
    delay: 6500,
  },
];

export default function SMSDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showStars, setShowStars] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resetDemo = () => {
    setVisibleMessages([]);
    setSelectedRating(null);
    setShowStars(false);
    setIsPlaying(true);
    setHasStarted(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timers: NodeJS.Timeout[] = [];

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message.id]);

        // Show stars after second message
        if (message.id === 2) {
          setTimeout(() => setShowStars(true), 500);
        }

        // Auto-select 5 stars before customer response
        if (message.id === 2) {
          setTimeout(() => setSelectedRating(5), 3000);
        }
      }, message.delay);
      timers.push(timer);
    });

    // Stop playing after all messages
    const stopTimer = setTimeout(() => {
      setIsPlaying(false);
    }, 8000);
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
          <div className="h-80 bg-gray-100 px-4 py-4 space-y-3 overflow-hidden">
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

            {messages.map((message) => (
              <div
                key={message.id}
                className={`transition-all duration-500 ${
                  visibleMessages.includes(message.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                }`}
              >
                <div
                  className={`max-w-[85%] ${
                    message.type === 'business'
                      ? 'bg-white text-gray-800 rounded-2xl rounded-tl-sm'
                      : 'bg-primary text-white rounded-2xl rounded-tr-sm ml-auto'
                  } px-4 py-2.5 shadow-sm`}
                >
                  {message.id === 5 ? (
                    <span className="text-primary font-semibold underline text-sm">
                      Leave a Review on Google
                    </span>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Star rating UI */}
            {showStars && visibleMessages.includes(2) && (
              <div className={`transition-all duration-500 ${showStars ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          selectedRating && star <= selectedRating
                            ? 'bg-yellow-400 scale-110'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        aria-label={`Rate ${star} stars`}
                      >
                        <svg
                          className={`w-6 h-6 ${
                            selectedRating && star <= selectedRating
                              ? 'text-white'
                              : 'text-gray-400'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
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
