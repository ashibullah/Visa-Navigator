import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        yuji: ['"Yuji Boku"', 'serif'],  
        rakkas: ['"Rakkas"', 'cursive'], 
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], 
  },
}
