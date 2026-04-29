module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          600: '#ea580c',
          700: '#c2410c',
        },
        stone: {
          900: '#1c1917',
        }
      },
    },
  },
  plugins: [],
}
