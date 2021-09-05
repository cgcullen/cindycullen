module.exports = {
  purge: ["./pages/**/*.{js, ts, tsx}", "./components/**/*.{js, ts, tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        map: "url('/map-min.jpg'); background-size: 100%; background-repeat: no-repeat",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
