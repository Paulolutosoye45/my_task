/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        'oswald':["Oswald", "sans-serif"],
        "Nerko":[ "Nerko One", "cursive"],
        "Roboto": ["Roboto Slab", "serif"],
        "Inter": ["Inter", "sans-serif"],
        "josefin": ["Josefin Sans", "sans-serif"],
        "Italianno": ["Italianno", "cursive"],
        "Inconsolata":["Inconsolata", "monospace"],
        "poppins":["Poppins", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
