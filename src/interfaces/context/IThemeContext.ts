import { DefaultTheme } from 'styled-components';

export interface IThemeContext {
  theme: 'light' | 'dark';
  themeStyle: DefaultTheme;
  setTheme: (theme: 'light' | 'dark') => Promise<void>;
  isThemeLoaded: boolean;
}
