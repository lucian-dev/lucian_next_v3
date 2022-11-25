/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      muli: ['Mulish', 'sans-serif'],
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      xl: '0.938rem',
      '2xl': '0.125rem',
      '3xl': '1.563rem',
      '4xl': '1.875rem',
      '5xl': '2.188rem',
    },
    extend: {
      colors: {
        bodyColor: '#191923',
        wrapperColor: '#1e1e28',
        baseColor: '#ebddcc',
        primaryColor: '#fffcf7',
        secondaryColor: '#dfd3c3',
        boxShadow: '0 3px 8px 0 rgb(15 15 20 / 25%)',
        boxShadowAlt: '0 6px 12px 1px rgb(15 15 20 / 50%)',
      },
      backgroundImage: {
        bgColorGradient: 'linear-gradient(159deg, #1e1e28 0%, #20202a 200%)',
      },
    },
  },
  plugins: [],
};
