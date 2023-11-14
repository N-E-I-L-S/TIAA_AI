// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      title: ['Hammersmith One', 'sans-serif'],
      body:[ 'Inter', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': {
        100: '#2eade2', 
        900: '#093b60',
      },
      plugins: [
        require('@tailwindcss/forms'),
      ],
    },
  },
}