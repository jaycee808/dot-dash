/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Courier Prime', 'monospace'],
        body: ['Crimson Pro', 'serif']
      }
    },
  },
  plugins: [],
}

