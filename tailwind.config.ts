import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "#c4a1ff",
        mainAccent: "#9e66ff", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)",
        // background color overlay for alert dialogs, modals, etc.
        // light mode
        bg: "#daf5f0",
        text: "#000",
        border: "#000",
        // dark mode
        darkBg: "#0f3730",
        darkText: "#eeefe9",
        darkBorder: "#000"
      },
      borderRadius: {
        base: "5px"
      },
      boxShadow: {
        light: "4px 4px 0px 0px #000",
        dark: "4px 4px 0px 0px #000"
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px"
      },
      fontWeight: {
        base: "500",
        heading: "700"
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config
