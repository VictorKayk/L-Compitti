import { useContext } from 'react';
import { themeContext } from '../context/theme';
import { IUseThemes } from '../interfaces/hooks';

export function useThemes(): IUseThemes {
  const { theme, themeStyle, setTheme, isThemeLoaded } =
    useContext(themeContext);

  return { theme, themeStyle, setTheme, isThemeLoaded };
}
