/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkolivegreen: "#426b1f",
        black: "#000",
        gainsboro: "#e6e6e6",
        silver: "#c2c2c2",
        whitesmoke: "#fafaf5",
        dimgray: "#6d6d6d",
        gray: "rgba(0, 0, 0, 0.06)",
        mediumseagreen: "#0fa958",
        salmon: "#ff8577",
        blueviolet: {
          "100": "#a259ff",
          "200": "#5551ff",
        },
        gold: "#ffc700",
        orangered: "#f24e1e",
      },
      fontFamily: {
        inter: "Inter",
        newsreader: "Newsreader",
        "whyte-inktrap": "'Whyte Inktrap'",
        whyte: "Whyte",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      sm: "14px",
      "45xl": "64px",
      xs: "12px",
      "29xl": "48px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
