/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkerBlue: "#100B20",
        darkBlue: "#150E28",
        royalBlue: "#903AFF",
        purple: "#D434FE",
        pink: "#FF26B9",
      },
    },
  },
  plugins: [],
};
