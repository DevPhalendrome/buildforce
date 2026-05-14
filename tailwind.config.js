/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#C8854F',
          light: '#E8B88A',
          dark: '#8B5E3C',
          50: '#FAF3ED',
          100: '#F0DDCC',
          200: '#E0BA91',
          300: '#D0985E',
          400: '#C8854F',
          500: '#B06E3E',
          600: '#8B5E3C',
          700: '#6B4A30',
          800: '#4B3524',
          900: '#2B1F18',
          950: '#1A1210',
        },
        surface: {
          DEFAULT: '#050505',
          50: '#FAFAFA',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#2A2A2A',
          800: '#1A1A1A',
          850: '#111111',
          900: '#0A0A0A',
          950: '#050505',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
