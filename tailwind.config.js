module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        mali: ['Mali', 'cursive'],
        jost: ['Jost', 'sans-serif']
      },
      fontSize: {
        sm: ["13px", "auto"],
        base: ["25px", "auto"],
        lg: ["30px", "auto"],
        xl: ["40px", "auto"],
        "2xl": ["80px", "95%"],
      },
      colors: {
        "theme-blue": "#58CFFB",
        "theme-orange": "#EB961D",
        "theme-gray": "#E7E8FE",
      },
    },
  },
  plugins: [],
};
