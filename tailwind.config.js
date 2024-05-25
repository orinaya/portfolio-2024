/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["  Poppins", "sans-serif"],
        neueKaine: ["Neue Kaine", "sans-serif"],
      },
    },
    colors: {
      white: {
        998: "#fff",
      },
      beige: {
        100: "hsl(33, 35%, 10%)",
        200: "hsl(33, 35%, 20%)",
        300: "hsl(33, 35%, 30%)",
        400: "hsl(33, 35%, 40%)",
        500: "hsl(33, 35%, 50%)",
        600: "hsl(33, 35%, 60%)",
        700: "hsl(33, 35%, 70%)",
        800: "hsl(33, 35%, 80%)",
        850: "hsl(33, 35%, 85%)",
        900: "hsl(33, 35%, 90%)",
      },
      darkOlive: {
        100: "hsl(150,8,10)",
        200: "hsl(150,8,20)",
        230: "hsl(150,8,23)",
        300: "hsl(150,8,30)",
        400: "hsl(150,8,40)",
        500: "hsl(150,8,50)",
        600: "hsl(150,8,60)",
        700: "hsl(150,8,70)",
        800: "hsl(150,8,80)",
        900: "hsl(150,8,90)",
        980: "hsl(150,8,98)",
      },
      melon: {
        100: "hsl(7,64,10)",
        200: "hsl(7,64,20)",
        300: "hsl(7,64,30)",
        400: "hsl(7,64,40)",
        500: "hsl(7,64,50)",
        600: "hsl(7,64,60)",
        700: "hsl(7,64,70)",
        800: "hsl(7,64,80)",
        900: "hsl(7,64,90)",
      },
      verdigris: {
        100: "hsl(175,31,10)",
        200: "hsl(175,31,20)",
        300: "hsl(175,31,30)",
        400: "hsl(175,31,40)",
        500: "hsl(175,31,50)",
        600: "hsl(175,31,60)",
        700: "hsl(175,31,70)",
        800: "hsl(175,31,80)",
        900: "hsl(175,31,90)",
      },
    },
  },
  plugins: [],
}
