import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        'light-blue': "#4EA8DE",
        'medium-blue': "#1E6F9F",
        'light-purple': "#5E60CE",
        'light-gray': "#808080",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
} satisfies Config;
