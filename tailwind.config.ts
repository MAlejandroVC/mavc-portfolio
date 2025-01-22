import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        // Backgrounds
        bg_black: "#121212", // Slightly off-black for better aesthetics
        bg_white: "#F5F5F5", // Slightly off-white to avoid harshness
        bg_grey: "#2E2E2E", // Neutral dark grey

        // Foregrounds
        fg_white: "#FFFFFF", // White for dark backgrounds
        fg_black: "#1A1A1A", // Off-black for light backgrounds
        fg_accent: "#FF5733", // Accent color for text

        // Accents
        accent_1: { // Orange
          DEFAULT: "#FF5733",
          bright: "#FF7F50",
          muted: "#CC462A",
        },
        accent_2: { // Magenta
          DEFAULT: "#86198f",
          bright: "#e879f9",
          muted: "#6d1e7f",
        },
        accent_3: { // Cyan
          DEFAULT: "#155e75",
          bright: "#1b7a92",
          muted: "#104a5c",
        },
        accent_4: { // Forest Green
          DEFAULT: "#19881e",
          bright: "#81C784",
          muted: "#2E7D32",
        },

        // Messages, alerts and notifications
        error: {
          DEFAULT: "#FF3333",
          bright: "#FF6666",
          muted: "#CC2929",
        },
        success: {
          DEFAULT: "#33FF57",
          bright: "#66FF7A",
          muted: "#29CC46",
        },
        warning: {
          DEFAULT: "#FFCC33",
          bright: "#FFDD66",
          muted: "#CCAA29",
        },

        // Other
        border: "#444444",     // Subtle border color
      },
    },
  },
  plugins: [],
} satisfies Config;
