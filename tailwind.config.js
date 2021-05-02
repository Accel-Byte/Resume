module.exports = {
  purge: [],
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
      colors: {
        primary: '#67C58A',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        'custom-white-title': '#d9e1e8',
        'custom-white-text': '#a8afc4',
        'card-background': '#363c52',
      },
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        thailand: ['Gloss And Bloom'],
      },
      backgroundImage: (theme) => ({
        aboutMeImage: "url('images/about-me-font.png')",
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
