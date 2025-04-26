/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        thailand: ["Gloss And Bloom", "cursive"],
      },
      colors: {
        primary: "#3EC8AC",
        "custom-white-title": "#E9F0F7",
        "custom-white-text": "#B6BCC4",
        "custom-dark": "#21242D",
        "card-background": "#272B39",
        "related-work-orange": "#E84F48",
        "related-work-green": "#4BC764",
        "related-work-white": "#F0F0F0",
        "related-work-teal": "#4BCFA5",
        "related-work-gray": "#808080",
        "related-work-yellow": "#F9D923",
        "related-work-purple": "#9C4BEB",
        "related-work-dark": "#292F3D",
      },
      backgroundSize: {
        "70%": "70%",
      },
      backgroundImage: {
        aboutMeImage: 'url("./assets/images/aboutme.jpg")',
      },
      boxShadow: {
        "card-shadow": "0 0 40px rgba(0, 0, 0, 0.5)",
        "img-shadow": "0 0 20px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        slideIn: "slideIn 1s ease forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      inset: {
        "-30%": "-30%",
      },
    },
  },
  plugins: [],
};
