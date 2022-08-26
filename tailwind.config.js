const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // defaults to these values
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    extend: {
      colors: {
        gg: "#282828",
        main: "#DE0304",
        bb: "#5B5561",
        blue_b: "#240090",
        blue_c: "#190061",
        blue_d: "#0C0032",
        main_dark: "#DE0304",
        light_black: "#171717",
      },
      dropShadow: {
        light_shadow: "33px 61px 152px 20px rgba(255,255,255,0.45)",
        "3xl": "0 35px 35px rgba(225, 0, 0, 0.25)",
      },
      height: {
        "100v": "100vh",
      },
      width: {
        "100v": "100vh",
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        fancy: ["Caveat"],
        open_Sans: ["Open Sans"],
      },
    },
  },
  plugins: [
    require("tailwindcss-text-fill-stroke")(), // no options to configure
  ],
  variants: {
    // all the following default to ['responsive']
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
    extend: {
      opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    },
  },
};
