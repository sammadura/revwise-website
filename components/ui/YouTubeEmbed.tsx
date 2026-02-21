'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  overlayHeading?: string;
  overlaySubtext?: string;
  duration?: string;
  thumbnailOnly?: boolean;
}

export default function YouTubeEmbed({ videoId, title, overlayHeading, overlaySubtext, duration, thumbnailOnly }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleClick = () => {
    setIsLoaded(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsLoaded(true);
    }
  };

  if (isLoaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full absolute inset-0"
      />
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="absolute inset-0 cursor-pointer group/video"
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={`Video thumbnail for ${title}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
        priority={false}
      />

      {thumbnailOnly ? (
        /* Thumbnail-only mode: just a play button over the thumbnail */
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover/video:bg-black/40 transition-colors duration-300">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-300 shadow-lg">
            <svg
              className="w-5 h-5 text-primary ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      ) : (
        /* Full overlay mode */
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-700/90 flex flex-col items-center justify-center transition-opacity duration-300 group-hover/video:from-primary/80 group-hover/video:to-blue-700/80 p-4">
          {/* Play Button */}
          <div className="w-14 h-14 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-2 md:mb-6 group-hover/video:scale-110 transition-transform duration-300 shadow-2xl flex-shrink-0">
            <svg
              className="w-7 h-7 md:w-12 md:h-12 text-primary ml-0.5 md:ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>

          {/* Text */}
          <h3 className="text-white text-base md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-center leading-tight">
            {overlayHeading || 'See Revwise in Action'}
          </h3>
          {overlaySubtext && (
            <p className="text-white/90 text-xs md:text-base lg:text-lg text-center leading-tight">
              {overlaySubtext}
            </p>
          )}

          {/* Duration Badge */}
          <div className="mt-2 md:mt-6 bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
            <span className="text-white font-semibold text-xs md:text-base">{duration || '0:45 Demo Video'}</span>
          </div>

          {/* Click hint - hidden on mobile */}
          <p className="text-white/70 text-sm mt-4 hidden md:block">Click to play</p>
        </div>
      )}
    </div>
  );
}
