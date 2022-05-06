module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      
      'white':      '#FFFFFF',
      'black1':     '#000000',
      'blue':       '#0055FF',
      'light-blue': '#1FB6FF',
      'dark-blue':  '#0D1117',
      'light-aqua': '#00FFFF',
      'dark-aqua':  '#007F7F',
      'dark-aqua2':  '#00BFBF',
      'grey':       '#7F7F7F',
      'dark-grey1':  '#3F3F3F',
      'dark-grey2':  '#595959',
      'light-grey': '#BFBFBF',
      


    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      RobotoMono: ['Roboto Mono', 'sans-serif'],
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}