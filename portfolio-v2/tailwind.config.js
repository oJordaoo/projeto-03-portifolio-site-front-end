/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#C80000',
        'brand-black': '#111111',
        'brand-white': '#F5F5F5',
        'brand-gray': '#1D1D1D',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  // Adicione a linha abaixo
  plugins: [require('@tailwindcss/typography')],
};