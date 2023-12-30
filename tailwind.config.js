/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB128",
        secondary: "#0C3954",
      },
      backgroundImage: {
        category1: "url('/images/furniturestore-home-pic1.webp')",
        category2: "url('/images/furniturestore-home-pic2.webp')",
        category3: "url('/images/furniturestore-home-pic3.webp')",
      },
    },
  },
  plugins: [],
};
