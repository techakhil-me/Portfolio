module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#0b0b0b",
        light: "#f7f7f7"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      },
      letterSpacing: {
        tightest: '-.075em',
         tighter: '-.05em',
        tight: '-.025em',
         normal: '0',
        wide: '.025em',
         wider: '.05em',
        widest: '.1em',
        widest: '.25em',
       }

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
