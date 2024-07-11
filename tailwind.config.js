/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: {
          500: '#ef4444',
        },
        blue: {
          500: '#3b82f6',
        },
        green: {
          500: '#10b981',
        },
        yellow: {
          500: '#f59e0b',
        },
        purple: {
          500: '#8b5cf6',
        },
        pink: {
          500: '#ec4899',
        },
        orange: {
          500: '#f97316',
        },
        teal: {
          500: '#14b8a6',
        },
        indigo: {
          500: '#6366f1',
        },
        gray: {
          500: '#6b7280',
        },
      },
    },
  },
  plugins: [],
};
