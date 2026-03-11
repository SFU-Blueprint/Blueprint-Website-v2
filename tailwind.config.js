const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: "1025px",
      tablet: "630px",
      ...defaultTheme.screens,  
    },
    darkMode: "false",
    extend: {
      colors: {
        blueprint: {
          // Brand
          blue: "#0177E8",
          black: "#2A2A2A",
          white: "#FFFFFF",
          offwhite: "#FCFCFC",
          deepblue: "#0D579F",
          navyblue: "#0146BE",
          orange: "#F49F00",
          // Link states (nav, footer, buttons)
          linkHover: "#0146BE",
          linkActive: "#002F80",
          hoverBlue: "#00389B",
          // Accent (palette: bp-accent-*)
          accent: {
            lightBlue: "#A5C6FF",
            veryLightBlue: "#D3E3FF",
            mediumBlue: "#5387E3",
            purple: "#D2A6FB",
          },
          orange: "#F49F00",
          // Neutrals / grey scale (palette: bp-light-grey, bp-grey, bp-dark-grey, bp-lightest-grey)
          gray: {
            dark: "#B8B8B8",
            light: "#F3F3F3",
            lightest: "#F3F3F3",
          },
          lightGrey: "#D9D9D9",
          grey: "#AAAAAA",
          darkGrey: "#777777",
          // Text (body / secondary copy)
          textGray: "#6A6A6A",
          neutral: {
            dark: "#2A2A2A",
            muted: "#D9D9D9",
            mutedAlt: "#AAAAAA",
            mid: "#777777",
          },
          // Open Role Card: bp-darkest-grey (default/hover fill), bp-black (pressed fill)
          darkestGrey: "#383838",
          // Role accent colors: dev green, pm orange, designer purple, executive light blue
          roleAccent: {
            dev: "#71EC59",
            pm: "#F59E0B",
            designer: "#A855F7",
            executive: "#38BDF8",
          },
        },
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        poppins: ["Poppins", "sans-serif"],
        anek: ["Anek Bangla", "sans-serif"],
        sketch: ["Just Me Again Down Here", "sans-serif"],
      },
      fontSize: {
        "footer-legal": ["14px", { lineHeight: "1", fontWeight: "500" }],
        "footer-link": ["16px", { lineHeight: "1.3" }],
        "footer-link-mobile": ["14px", { lineHeight: "1.3" }],
        "footer-section-title": ["24px", { lineHeight: "1.3", letterSpacing: "-0.48px" }],
        "footer-section-title-mobile": ["18px", { lineHeight: "1.3", letterSpacing: "-0.36px" }],
        "footer-headline": ["48px", { lineHeight: "1.2", letterSpacing: "-0.96px", fontWeight: "700" }],
        "footer-headline-mobile": ["28px", { lineHeight: "1.2", letterSpacing: "-0.56px", fontWeight: "700" }],
        "footer-logo-desktop": ["24.35px", { letterSpacing: "-0.24px", fontWeight: "500" }],
        "footer-logo-mobile": ["18px", { letterSpacing: "-0.18px", fontWeight: "500" }],
        "nav-link": ["14px", { lineHeight: "100%", fontWeight: "500" }],
      },
      spacing: {
        "footer-px-desktop": "140px",
        "footer-px-tablet": "90px",
        "footer-px-mobile": "34px",
        "footer-py-desktop": "60px",
        "footer-py-mobile": "54px",
        "footer-gap-section": "46px",
        "footer-gap-block": "48px",
        "footer-gap-stack": "24px",
        "footer-gap-title": "18px",
        "footer-gap-link": "12px",
        "footer-gap-social": "22.74px",
        "footer-gap-grid-x": "60px",
        "footer-gap-grid-y": "30px",
        "footer-gap-mobile-section": "30px",
        "footer-gap-mobile-block": "36px",
        "footer-gap-legal": "18px",
        "footer-gap-legal-inner": "6px",
        "footer-gap-tablet": "56px",
        "nav-container-max": "80rem",
        "nav-px-desktop": "5rem",
        "nav-space-x": "3rem",
        "nav-mobile-h": "50px",
        "nav-mobile-px": "24px",
        "nav-mobile-py": "12px",
        "nav-desktop-h": "60px",
        "nav-desktop-px": "36px",
        "nav-desktop-py": "12px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Disable dark mode
    themes: [],
  },
};
