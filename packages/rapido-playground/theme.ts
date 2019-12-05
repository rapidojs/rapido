import 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
    fontSizes: number[];
    space: number[];
    radii: {
      primary: number;
      circle: number;
    };
    hover: any;
    text: any;
    textinput: any;
    button: any;
  }
}

// default theme
const theme: DefaultTheme = {
  colors: {
    primary: '#FDD023',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    primary: 4,
    circle: 99999,
  },
  // variants
  hover: {
    button: {
      bg: 'pink',
    },
  },
  text: {
    primary: {
      fontSize: 2,
      color: 'primary',
    },
    bold: {
      variant: 'text.primary',
      fontWeight: 'bold',
    },
    heading: {
      variant: 'text.primary',
      fontSize: 4,
      fontWeight: 'bold',
    },
  },
  textinput: {
    primary: {
      color: 'primary',
      fontSize: 2,
      borderWidth: 1,
      borderColor: 'primary',
      borderRadius: 'primary',
    },
  },
  button: {
    primary: {
      bg: {
        borderRadius: 'primary',
        borderWidth: 1,
        borderColor: 'primary',
      },
      text: {
        fontSize: 2,
        color: 'black',
        bg: 'primary',
      },
    },
    outline: {
      bg: {
        variant: 'button.primary.bg',
      },
      text: {
        variant: 'button.primary.text',
        color: 'primary',
        bg: 'transparent',
      },
    },
  },
};

export default theme;
