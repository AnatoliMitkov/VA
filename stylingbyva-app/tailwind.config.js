/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1a1a',    // High-fashion off-black
          light: '#f4f4f0',   // Editorial stone/cream
          accent: '#c8a98b',  // Warm earthy terracotta/beige
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        eyebrow: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      }
    },
  },
  plugins: [],
}