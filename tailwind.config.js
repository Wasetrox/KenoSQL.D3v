/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        xz: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      backgroundColor: {
       twak15: "#202020", 
       danger: "#c0243c",
      },
      fontFamily: {
        ubuntu: ["Ubuntu Mono", "monospace"],
        francois: ["Francois One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      margin: {
        marginLeftC1: "-100rem",
        marginLeftXS: "-8rem",
        instalinkName: "-20rem",
        tailwindcssMargin: "10rem",
        softwaredescr: "22rem",
        image2: "20rem",
      },
      colors: {
        gri: "#808080",
        acikgri: "#cccccc",
        ilz: "#800080",
      },
    },
  },
  plugins: [],
}

