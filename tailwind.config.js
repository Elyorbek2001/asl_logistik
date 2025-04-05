/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        xs: '370px', // 480px va kichik ekranlar uchun
        sm: '640px',  // sm breakpointdan katta ekranlar uchun
        md: '768px',  // md breakpointdan katta ekranlar uchun
        lg: '1024px', // lg breakpointdan katta ekranlar uchun
        xl: '1280px', // xl breakpointdan katta ekranlar uchun
      },
    },
  },
  plugins: [],
}

