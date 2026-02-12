'use client';

import { motion } from 'framer-motion';

export default function FloatingStars3D() {
  return (
    <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
      {/* Main floating star cluster */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central large star */}
        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 10, 0, -10, 0],
          }}
          transition={{
            rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Star shape */}
          <div className="relative w-32 h-32">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {/* Inner glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-300/50 rounded-full blur-xl" />
            </div>
          </div>
        </motion.div>

        {/* Orbiting smaller stars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute"
            style={{
              width: '200px',
              height: '200px',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              className="absolute"
              style={{
                top: '0',
                left: '50%',
                transform: `translateX(-50%) rotateX(${i * 15}deg)`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400/80 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-yellow-400/40 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* "5.0" rating display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white">5.0</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + star * 0.1, type: 'spring', stiffness: 200 }}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
              ))}
            </div>
          </div>
          <p className="text-white/60 text-sm mt-1">Average Rating</p>
        </div>
      </motion.div>
    </div>
  );
}
