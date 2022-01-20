import { DefaultTheme } from 'styled-components';

export interface IUseThemes {
  theme: 'light' | 'dark';
  themeStyle: DefaultTheme;
  setTheme: (theme: 'light' | 'dark') => Promise<void>;
  isThemeLoaded: boolean;
}
