/** @type {import('tailwindcss').Config} */
import { dark, light, gradients, boxShadow } from "./theme"

export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: light,
    backgroundImage: {
      ...gradients
    },
    boxShadow: {
      ...boxShadow,
    },
    screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1320px',
      // '3xl': '1312px',
      'full': '96%'
    },
    extend: {},
  },
  plugins: [],
}

