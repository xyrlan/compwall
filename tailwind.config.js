import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    // {
    //   themes: {
    //     light: {
    //       colors: {
    //         background: "#273343", // or DEFAULT
    //         foreground: "#94949c", // or 50 to 900 DEFAULT
    //         primary: {
    //           //... 50 to 900
    //           foreground: "#94949c",
    //           DEFAULT: "#9fbf38",
    //           100: "#F6FBD8",
    //           200: "#EDF8B2",
    //           300: "#D9EB87",
    //           400: "#C0D865",
    //           500: "#9FBF38",
    //           600: "#83A428",
    //           700: "#6A891C",
    //           800: "#516E11",
    //           900: "#405B0A",
    //         },
    //         default: {
    //           DEFAULT: "#94949c",
    //           foreground: "#9fbf38",
    //           100: "#F6FBD8",
    //           200: "#EDF8B2",
    //           300: "#D9EB87",
    //           400: "#C0D865",
    //           500: "#9FBF38",
    //           600: "#83A428",
    //           700: "#6A891C",
    //           800: "#516E11",
    //           900: "#405B0A",
    //         },
    //         focus: "#ffffff",
    //         // ... rest of the colors
    //       },
    //     },
    //   },
    // }
  )],
}
