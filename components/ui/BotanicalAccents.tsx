/**
 * Hand-drawn-feel botanical line art for section accents. Inline SVG only —
 * no external assets. Color comes from `currentColor`: set a text color
 * (usually text-sage or text-petal) and an opacity on the wrapper.
 *
 * Decorative by design — always rendered aria-hidden.
 */

interface AccentProps {
  className?: string;
}

/** A single tall stem with two leaves and a small five-petal bloom. */
export function Stem({ className = '' }: AccentProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M62 198 C 60 150, 58 110, 60 74" />
      <path d="M60 150 C 40 142, 30 128, 28 112 C 46 114, 56 128, 60 150 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M59 120 C 78 114, 90 100, 92 84 C 74 86, 63 100, 59 120 Z" fill="currentColor" fillOpacity="0.08" />
      <circle cx="60" cy="56" r="18" fill="currentColor" fillOpacity="0.1" />
      <path d="M60 38 C 50 44, 50 56, 60 56 C 70 56, 70 44, 60 38 Z" />
      <path d="M42 56 C 50 50, 60 52, 60 56 C 60 60, 50 64, 42 56 Z" />
      <path d="M78 56 C 70 50, 60 52, 60 56 C 60 60, 70 64, 78 56 Z" />
      <path d="M60 74 C 50 68, 50 60, 60 56 C 70 60, 70 68, 60 74 Z" />
      <circle cx="60" cy="56" r="4.5" fill="currentColor" fillOpacity="0.55" stroke="none" />
    </svg>
  );
}

/** A small arcing sprig with alternating leaves — good beside headings. */
export function Sprig({ className = '' }: AccentProps) {
  return (
    <svg
      viewBox="0 0 160 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 72 C 50 68, 110 48, 152 12" />
      <path d="M44 66 C 38 52, 42 40, 52 32 C 56 44, 54 56, 44 66 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M78 55 C 68 44, 66 32, 72 21 C 82 30, 84 44, 78 55 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M112 38 C 106 26, 108 14, 116 5 C 122 16, 120 29, 112 38 Z" fill="currentColor" fillOpacity="0.08" />
    </svg>
  );
}

/** Loose falling petals — scatter behind stat bands or card corners. */
export function Petals({ className = '' }: AccentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M30 24 C 22 30, 22 42, 32 42 C 40 38, 38 28, 30 24 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M92 62 C 84 68, 86 80, 96 78 C 103 73, 100 64, 92 62 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M160 30 C 152 36, 154 48, 164 46 C 171 41, 168 32, 160 30 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M130 96 C 124 101, 126 110, 134 108 C 139 104, 137 98, 130 96 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M58 92 C 52 97, 54 106, 62 104 C 67 100, 65 94, 58 92 Z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}
