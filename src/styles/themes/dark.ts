import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

export const dark: DefaultTheme = {
  ...defaultTheme,

  background: {
    colors: {
      primary: '#181826',
      secondary: '#303342',
    },
  },
  colors: {
    primary: '#fcfcfc',
    secondary: '#EEE6E6',
    gradient: {
      primary: '#C22ED0',
      secondary: '#5FFAE0',
    },
  },
};
