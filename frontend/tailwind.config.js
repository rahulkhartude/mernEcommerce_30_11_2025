// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
// };


// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f3f4f6",   // your light color
          DEFAULT: "#1d4ed8", // optional
          dark: "#1e3a8a",    // optional
        }
      }
    },
  },
  plugins: [],
}
