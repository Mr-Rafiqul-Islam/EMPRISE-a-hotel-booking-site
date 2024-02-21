/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        banner: "url('/src/assets/images/BG Image.png')",
        banner2: "url('/src/assets/images/BG Image2.png')",
        banner3: "url('/src/assets/images/BG Image3.png')",
        promotionBanner: "url('/src/assets/images/CTA.png')",
      },
      colors: {
        primary: '#1D293F',
        para: '#546179',
        third:'#E81A46',
      },
    },
  },
  plugins: [],
}

