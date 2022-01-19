import { DefaultTheme } from 'styled-components';

export interface IUseThemes {
  theme: DefaultTheme;
  setTheme: (theme: 'light' | 'dark') => Promise<void>;
  isThemeLoaded: boolean;
}
