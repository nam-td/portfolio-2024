/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter'],
        'abel': ['Abel', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif']
      },
      keyframes: {
        'border-spin':{
          '100%': {
            transform: 'rotate(-360deg)',
          }
        },
        'loop-scroll-left': {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
        'loop-scroll-right': {
          from: {transform: "translateX(-100%)"},
          to: {transform: "translateX(0%)"}
        }
      },
      animation: {
        'loop-scroll-left':'loop-scroll-left 40s linear infinite',
        'loop-scroll-right':'loop-scroll-right 40s linear infinite',
        'border-spin': 'border-spin 4s linear infinite'
      },
      transitionDuration:{
        '1250': '1250ms'
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(50px, 1fr))'
      }
    },
    screens: {
      'xs': '400px',
      '3cols': '600px',
      'sm': '640px',
      'md': '768px',
      '4cols': '1000px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}

