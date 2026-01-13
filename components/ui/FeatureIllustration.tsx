interface FeatureIllustrationProps {
  variant: 'reviews' | 'responses';
}

export default function FeatureIllustration({ variant }: FeatureIllustrationProps) {
  if (variant === 'reviews') {
    return (
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-80 flex items-center justify-center">
        <div className="relative w-full max-w-xs">
          {/* Phone mockup */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-200">
            {/* Phone header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm text-dark">Review Request</span>
              </div>
              <span className="text-xs text-gray-medium">now</span>
            </div>

            {/* Message bubble */}
            <div className="bg-primary/10 rounded-2xl rounded-tl-none p-4 mb-3">
              <p className="text-sm text-dark leading-relaxed">
                Hi Sarah! Thanks for choosing us. We&apos;d love to hear about your experience.
                <span className="text-primary font-medium"> Leave a review?</span>
              </p>
            </div>

            {/* Star rating buttons */}
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label={`Rate ${star} stars`}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Tap to rate text */}
            <p className="text-center text-xs text-gray-medium">Tap to rate your experience</p>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            +127%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-8 h-80 flex items-center justify-center">
      <div className="relative w-full max-w-xs space-y-3">
        {/* Incoming review notification */}
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 transform -rotate-1">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-dark">John D.</span>
                <div className="flex" aria-label="5 stars" role="img">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-medium truncate">&quot;Amazing service! Highly recommend...&quot;</p>
            </div>
          </div>
        </div>

        {/* AI Response card */}
        <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-secondary transform rotate-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-secondary">AI Response Generated</span>
          </div>
          <p className="text-xs text-gray-medium leading-relaxed">
            &quot;Thank you so much, John! We&apos;re thrilled to hear you had an amazing experience. Your support means the world to us!&quot;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Auto-posted</span>
            <span className="text-xs text-gray-medium">2 min ago</span>
          </div>
        </div>

        {/* 24/7 badge */}
        <div className="absolute -bottom-2 -right-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          24/7 Active
        </div>
      </div>
    </div>
  );
}
