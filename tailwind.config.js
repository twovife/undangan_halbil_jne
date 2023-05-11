const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cover-hero": "url('/img/jnebg2.png')",
        "cover-welcome": "url('/img/jnebg1.png')",
        "cover-end": "url('/img/bg-end.jpg')",
        "cover-dates": "url('/img/jneimg1.png')",
        "card-ovi": "url('/img/bg-ovi.png')",
        "card-wildan": "url('/img/bg-wildan.png')",
      },
    },
    colors: {
      ...colors,
      grey: {
        900: "#343434",
      },
      primary: {
        200: "#E38387",
        300: "#BF8C8C",
        400: "#E49497",
        900: "#8D3333",
      },
      brand: {
        biru: "#589bdc",
        birutua: "#032393",
        macha: "#a0be38",
        ijo: "#4b834a",
        orange: "#e3ab3f",
        putih: "#eae5df",
      },
    },
  },
  plugins: [],
};
