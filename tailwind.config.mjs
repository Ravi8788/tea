/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        'gold': '#C9A227',
        'gold-luxury': '#D4AF37',
        'gold-light': '#E8C85A',
        'gold-dark': '#9B7A1A',
        'cream': '#FAF8F3',
        'cream-dark': '#F0EBE0',
        'dark': '#1E1E1E',
        'dark-rich': '#0D0D0D',
        'dark-warm': '#2A2218',
        'accent': '#7A5C1E',
        'royal-maroon': '#6B1A1A',
        'saffron': '#FF9933',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A227 0%, #D4AF37 50%, #9B7A1A 100%)',
        'gradient-royal': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 55%, #F5F0E8 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
        'shine': 'shine 0.6s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-60px) scaleX(1.5)', opacity: '0' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
      },
    },
  },
  plugins: [],
};
