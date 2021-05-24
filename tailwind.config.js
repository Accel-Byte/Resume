module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'img-shadow': '0 10px 36px -16px #000',
      'card-shadow': '0 42px 0 -30px #67c58a, 0 10px 36px -16px #000',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '75%': '75%',
      16: '4rem',
    },
    
    extend: {
      inset: {
        '-30%': '-30%',
      },
      colors: {
        primary: '#67C58A',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        'custom-white-title': '#d9e1e8',
        'custom-white-text': '#a8afc4',
        'card-background': '#363c52',
        'related-work-orange': '#EB5027',
        'related-work-white': '#fff',
        'related-work-dark': '#505050',
        'related-work-green': '#66b366',
        'related-work-darkBlue': '#1d364a',
        'related-work-gray': '#56636d',
        'related-work-yellow': '#f1cf43',
        'related-work-purple': '#925FDA',
        'related-work-teal': '#00b5ad',
        'custom-dark': '#2B2E3E',
      },
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        operatormono: ['Operator Mono', 'Helvetica', 'Arial', 'sans-serif'],
        thailand: ['Gloss And Bloom', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        aboutMeImage: "url('Images/about-me-font.png')",
      }),
      animation: {
        slideIn: 'slideIn 500ms ease forwards',
      },
      keyframes: {
        slideIn: {
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
