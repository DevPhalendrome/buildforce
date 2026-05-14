/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D0D0D',
        'primary-soft': '#1A1A1A',
        'accent': '#B87333',
        'accent-light': '#CD8F4A',
        'accent-dark': '#9A622A',
        'gold': '#D4A857',
        'gold-light': '#E0C07A',
        'charcoal': '#0D0D0D',
        'charcoal-800': '#141414',
        'charcoal-700': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '64px',
        '2xl': '128px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 4px 16px rgba(0,0,0,0.10)',
        'lg': '0 12px 40px rgba(0,0,0,0.15)',
        'glow': '0 8px 32px rgba(184,115,51,0.25)',
      },
    },
  },
  plugins: [],
}