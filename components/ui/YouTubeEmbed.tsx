'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-700/90 flex flex-col items-center justify-center transition-opacity duration-300 group-hover/video:from-primary/80 group-hover/video:to-blue-700/80">
        {/* Play Button */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 group-hover/video:scale-110 transition-transform duration-300 shadow-2xl">
          <svg
            className="w-12 h-12 text-primary ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>

        {/* Text */}
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 text-center px-4">
          See Revwise in Action
        </h3>
        <p className="text-white/90 text-base md:text-lg text-center px-4">
          Watch how we help businesses get 10x more reviews
        </p>

        {/* Duration Badge */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white font-semibold">2:30 Demo Video</span>
        </div>

        {/* Click hint */}
        <p className="text-white/70 text-sm mt-4">Click to play</p>
      </div>
    </div>
  );
}
