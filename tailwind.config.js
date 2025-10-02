/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0c0c0c',
        'space-purple': '#1a1a2e',
        'space-blue': '#16213e',
        'mystery-red': '#ff6b6b',
        'discovery-teal': '#4ecdc4',
        'tech-blue': '#45b7d1',
        'location-green': '#96ceb4',
        'character-yellow': '#feca57',
      },
      fontFamily: {
        'space': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'nebula': 'nebula 20s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.8' },
        },
        'nebula': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}