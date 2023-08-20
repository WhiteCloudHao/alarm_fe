/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        bgLayout: '#EDEDED',
        overlay: 'rgba(0,0,0,0.1)',
        primary: '#E2E0D4',
        secondary: '#CEBEB9',
        neutral: '#959595',
        grey: '#8F8F8F',
        textColor: '#000000',
        highPriority: '#DF756E',
        mediumPriority: '#DFC74A',
        lowPriority: '#BDD1ED',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '800px',
      // => @media (min-width: 800px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('flowbite/plugin')],
};
