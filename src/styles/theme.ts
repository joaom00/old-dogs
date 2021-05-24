const theme = {
  grid: {
    container: '97.5rem'
  },
  border: {
    radius: '0.8rem'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: 'Spectral, serif',
    normal: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.4rem',
      xlarge: '3.6rem',
      xxlarge: '5.4rem'
    }
  },
  colors: {
    gray: {
      titleActive: '#14142B',
      body: '#4E4B66',
      label: '#6E7191',
      placeholder: '#A0A3BD',
      line: '#D9DBE9',
      inputBackground: '#EFF0F6',
      background: '#F7F7FC',
      offWhite: '#D9DBE9'
    },
    primary: {
      '100': '#FFF1D0',
      '200': '#FFE4A0',
      '300': '#FFD671',
      '400': '#FFC941',
      '500': '#FFBB12',
      '600': '#CC960E',
      '700': '#99700B',
      '800': '#664B07',
      '900': '#332504'
    }
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;

export default theme;
