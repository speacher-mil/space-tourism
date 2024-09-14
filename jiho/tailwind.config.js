/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    colors: {
      'blue-900': '#0B0D17',
      'blue-300': '#D0D6F9',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      spacing: {
        1600: '128px',
        1200: '96px',
        1000: '80px',
        800: '64px',
        600: '48px',
        500: '40px',
        400: '32px',
        300: '24px',
        200: '16px',
        150: '12px',
        100: '8px',
        50: '4px',
        25: '2px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
