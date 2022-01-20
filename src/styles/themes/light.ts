import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

export const light: DefaultTheme = {
  ...defaultTheme,

  background: {
    colors: {
      primary: '#fcfcfc',
      secondary: '#EEE6E6',
    },
  },
  colors: {
    primary: '#181826',
  },
};
