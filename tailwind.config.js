const { fontFamily } = require(`tailwindcss/defaultTheme`);
const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.current"),
            },
          },
        },
      }),
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.slate,
      primary: colors.indigo,
      secondary: colors.rose,
      tertiary: colors.emerald,
      brand: "#ffbc57",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    flowbite.plugin(),
  ],
};
