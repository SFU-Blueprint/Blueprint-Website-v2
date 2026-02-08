module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "false",
    extend: {
      colors: {
        blueprint: {
          blue: "#0177E8",
          black: "#292A3B",
          gray: {
            dark: "#B8B8B8",
            light: "#F3F3F3",
          },
          white: "#FFFFFF",
          offwhite: "#FCFCFC",
          deepblue: "#0D579F"
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anek: ["Anek Bangla", "sans-serif"],
        sketch: ["Just Me Again Down Here", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Disable dark mode
    themes: [],
  },
};
