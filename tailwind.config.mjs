/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#00171F",
        "sky-blue": "#00A8E8",
        "light-white": "#FEFEFE",
        "dark-blue":"#003459",
      },
      fontSize: {
        "custom-xl": "64px",
        "custom-3xl":"38px"
      },
      screens: {
        "custom-lg":"992px"
      },
      lineHeight: {
        110: "110%",
        115: "115%",
        112: "112%",
        150: "150%",
        160: "160%",
        163: "163%",
        171: "171%",
        140: "140%",
      },
      container: {
        center: true,
        padding: "20px",
      },
      backgroundImage: {
        "hero": "url('/assets/images/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
};
