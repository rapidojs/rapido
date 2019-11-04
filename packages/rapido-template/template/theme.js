// @remove-file-if-no-components
// default theme
const theme = {
  colors: {
    primary: '#FDD023',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    default: 4,
    circle: 99999,
  },
  // variants
  text: {
    default: {
      fontSize: 2,
      color: 'black',
    },
    bold: {
      variant: 'text.default',
      fontWeight: 'bold',
    },
    heading: {
      variant: 'text.default',
      fontSize: 4,
      fontWeight: 'bold',
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 'default',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
    },
  },
};

export default theme;
