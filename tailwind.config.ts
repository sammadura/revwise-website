import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm botanical system (florist rebrand, 2026-07). The owl logo keeps its
        // blue — reserved as `brand`; UI color is the fern/terracotta/cream family.
        primary: "#3F5D44", // fern green — buttons, links
        "primary-dark": "#334C38", // hover state for primary
        secondary: "#B5562F", // terracotta — accents, eyebrows (large text only on cream)
        "secondary-dark": "#9C4826",
        dark: "#2A2620", // warm ink
        cream: "#FAF6EF", // page ground
        paper: "#F3EBDD", // card / alternate section fill
        sage: "#77855D", // icons, chips, botanical line-art
        petal: "#EFDCD3", // blush wash
        moss: "#E7EAD9", // pale green wash
        "footer-green": "#25301F", // footer / dark CTA ground
        brand: "#359CFF", // owl blue — logo affinity only
        gray: {
          light: "#FAF6EF",
          medium: "#6B6257",
          border: "#E8E0D2",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "Satoshi", "sans-serif"],
        heading: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-up-delayed": "fade-in-up 0.6s ease-out 0.2s forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(52, 156, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(52, 156, 255, 0.6)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
