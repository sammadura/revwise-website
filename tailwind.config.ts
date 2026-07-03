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
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
