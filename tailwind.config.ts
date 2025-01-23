import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          inverse: 'var(--bg-inverse)',
          error: 'var(--bg-error)',
          success: 'var(--bg-success)',
          info: 'var(--bg-info)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
          error: 'var(--text-error)',
          success: 'var(--text-success)',
          info: 'var(--text-info)',
        },
        border: {
          default: 'var(--border-default)',
          muted: 'var(--border-muted)',
          error: 'var(--border-error)',
          success: 'var(--border-success)',
          info: 'var(--border-info)',
        },
        accent: {
          magenta: {
            DEFAULT: 'var(--accent-magenta)',
            vibrant: 'var(--accent-magenta-vibrant)',
          },
          forest: {
            DEFAULT: 'var(--accent-forest)',
            vibrant: 'var(--accent-forest-vibrant)',
          },
          orange: {
            DEFAULT: 'var(--accent-orange)',
            vibrant: 'var(--accent-orange-vibrant)',
          },
          cyan: {
            DEFAULT: 'var(--accent-cyan)',
            vibrant: 'var(--accent-cyan-vibrant)',
          },
          yellow: {
            DEFAULT: 'var(--accent-yellow)',
            vibrant: 'var(--accent-yellow-vibrant)',
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
