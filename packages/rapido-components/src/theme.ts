/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      muted: string;
      gray: string;
      highlight: string;
    };
    fonts: {
      body: string;
      monospace: string;
    };
    fontSizes: number[];
    fontWeights: {
      body: number;
      heading: number;
      bold: number;
    };
    space: number[];
    sizes: {
      avatar: number;
    };
    radii: {
      default: number;
      circle: number;
    };
    text: any;
    variants: any;
    buttons: any;
  }
}

// default theme preset
const preset: DefaultTheme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#61dbfb',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  // variants
  text: {
    heading: {
      fontWeight: 'heading',
    },
    display: {
      fontWeight: 'heading',
      fontSize: 5,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
    link: {
      color: 'primary',
    },
  },
};

export default preset;
