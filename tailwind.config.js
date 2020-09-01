const colors = {
  'primary-blue': '#0e2730'
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
