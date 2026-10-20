/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black/graphite background — D-03
        bg: '#0b0e12',
        // Slightly lighter surface for cards / panels
        surface: '#141820',
        // Near-white body text — contrast ratio ~16:1 on bg (#0b0e12) — WCAG AAA
        text: '#e8edf2',
        // Dimmer secondary text — contrast ratio ~7.5:1 on bg — WCAG AA
        'text-muted': '#8b949e',
        // Electric-cyan accent — contrast ratio ~6.5:1 on bg — WCAG AA (D-03)
        accent: '#22d3ee',
      },
    },
  },
  plugins: [],
}
