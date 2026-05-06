/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#38bdf8',
          violet: '#a78bfa',
          pink: '#f472b6',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(17, 12, 46, 0.35)',
      },
    },
  },
  plugins: [],
}
