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
          // Filter pills on white/light surfaces (Figma: default border + translucent gray fill)
          filterOnWhite: {
            border: "#CACACA",
            bgDefault: "rgba(213, 213, 213, 0.30)",
          },
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
          /** Desktop heading / m-reg (Figma) */
          heading: "#2E2E2E",
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
        /** Projects & pages — desktop/heading/m-reg */
        "heading-m-reg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.96px", fontWeight: "400" }],
        "heading-m-reg-mobile": ["28px", { lineHeight: "1.2", letterSpacing: "-0.56px", fontWeight: "400" }],
        "footer-logo-desktop": ["24.35px", { letterSpacing: "-0.24px", fontWeight: "500" }],
        "footer-logo-mobile": ["18px", { letterSpacing: "-0.18px", fontWeight: "500" }],
        "nav-link": ["14px", { lineHeight: "100%", fontWeight: "500" }],

        // Desktop heading (desktop/heading/*)
        "heading-xl-reg": ["96px", { lineHeight: "1", letterSpacing: "-1.92px", fontWeight: "400" }],
        "heading-xl-bold": ["96px", { lineHeight: "1", letterSpacing: "-1.92px", fontWeight: "700" }],
        "heading-l-reg": ["78px", { lineHeight: "0.85", letterSpacing: "-1.56px", fontWeight: "500" }],
        "heading-l-bold": ["78px", { lineHeight: "0.85", letterSpacing: "-1.56px", fontWeight: "700" }],
        "heading-m-reg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.96px", fontWeight: "400" }],
        "heading-m-bold": ["48px", { lineHeight: "1.2", letterSpacing: "-0.96px", fontWeight: "700" }],
        "heading-s-reg": ["36px", { lineHeight: "1.4", letterSpacing: "-0.72px", fontWeight: "400" }],
        "heading-s-bold": ["36px", { lineHeight: "1.4", letterSpacing: "-0.72px", fontWeight: "600" }],
        "heading-xs-reg": ["30px", { lineHeight: "1.4", letterSpacing: "-0.6px", fontWeight: "400" }],
        "heading-xs-bold": ["30px", { lineHeight: "1", letterSpacing: "-0.6px", fontWeight: "600" }],
        "heading-hand": ["34px", { lineHeight: "1", letterSpacing: "0", fontWeight: "400" }],

        // Desktop body (desktop/body/*)
        "body-l-reg": ["24px", { lineHeight: "1.3", letterSpacing: "-0.48px", fontWeight: "400" }],
        "body-l-bold": ["24px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "body-m-reg": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-m-bold": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],
        "body-m-bold-link": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
        "body-s-reg": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],

        // Mobile heading (mobile/heading/*)
        "mobile-heading-xl-reg": ["56px", { lineHeight: "1", letterSpacing: "-1.12px", fontWeight: "400" }],
        "mobile-heading-xl-bold": ["56px", { lineHeight: "1", letterSpacing: "-1.12px", fontWeight: "700" }],
        "mobile-heading-l-reg": ["42px", { lineHeight: "0.85", letterSpacing: "-0.84px", fontWeight: "500" }],
        "mobile-heading-l-bold": ["42px", { lineHeight: "0.85", letterSpacing: "-0.84px", fontWeight: "700" }],
        "mobile-heading-m-reg": ["28px", { lineHeight: "1.2", letterSpacing: "-0.56px", fontWeight: "400" }],
        "mobile-heading-m-bold": ["28px", { lineHeight: "1.2", letterSpacing: "-0.56px", fontWeight: "700" }],
        "mobile-heading-s-reg": ["24px", { lineHeight: "1.4", letterSpacing: "-0.48px", fontWeight: "400" }],
        "mobile-heading-s-bold": ["24px", { lineHeight: "1.1", letterSpacing: "-0.48px", fontWeight: "600" }],
        "mobile-heading-xs-reg": ["20px", { lineHeight: "1.4", letterSpacing: "-0.4px", fontWeight: "400" }],
        "mobile-heading-xs-bold": ["20px", { lineHeight: "1.4", letterSpacing: "-0.4px", fontWeight: "600" }],
        "mobile-heading-hand": ["24px", { lineHeight: "1", letterSpacing: "0", fontWeight: "400" }],

        // Mobile body (mobile/body/*)
        "mobile-body-l-reg": ["18px", { lineHeight: "1.3", letterSpacing: "-0.36px", fontWeight: "400" }],
        "mobile-body-l-bold": ["18px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "mobile-body-m-reg": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "mobile-body-m-bold": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],
        "mobile-body-m-bold-link": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
        "mobile-body-s-reg": ["10px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
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
        "main-desktop-top": "40px",
        "main-mobile-top": "28px",
        ppcard:{
           bottom: "111px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Disable dark mode
    themes: [],
  },
};
