module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    fontFamily: {
      'body': ['Inter', 'Helvetica', 'sans-serif'],
      'sans': ['Inter', 'Helvetica', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'jefu-blue': {
          50: '#F4F2FC',
          100: '#EAE6FA',
          200: '#C9C0F2',
          300: '#A99AEA',
          400: '#694FDA',
          500: '#2803CA',
          600: '#2403B6',
          700: '#180279',
          800: '#12015B',
          900: '#0C013D'
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    opacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
