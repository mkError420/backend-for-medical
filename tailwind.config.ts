import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10651E",
          dark: "#0a4d12",
          light: "#1a7d2a",
        },
        accent: {
          DEFAULT: "#26AAED",
          dark: "#1e8bc4",
          light: "#4abcf4",
        },
        highlight: {
          DEFAULT: "#DDFFDE",
          dark: "#c8f0c9",
          light: "#e8ffe9",
        },
        medical: {
          green: "#10651E",
          blue: "#26AAED",
          light: "#DDFFDE",
          darkgreen: "#0a4d12",
          darkblue: "#1e8bc4",
        },
      },
      maxWidth: {
        '7xl': '80rem',
        'full': '100%',
        '6xl': '72rem',
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
}
export default config
