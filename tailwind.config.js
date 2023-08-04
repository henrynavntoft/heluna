const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#fff",
        accent: "#1b6679;",
        accent2: "#89b6c5;",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        500: "500ms",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "active", "group-hover"],
      translate: ["responsive", "hover", "focus", "active", "group-hover"],
      rotate: ["responsive", "hover", "focus", "active", "group-hover"],
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
