import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { IThemeContext } from '../../interfaces/context';
import themes from '../../styles/themes';
import { useConfig } from '../../hooks/useCases';

export const themeContext = createContext({} as IThemeContext);

interface IThemeContextProvider {
  children: ReactNode;
}

export function ThemeContext({
  children,
}: IThemeContextProvider): ReactElement {
  const { getConfig, setConfig } = useConfig();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [currentThemeStyle, setCurrentThemeStyle] = useState(themes.light);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    async function getTheme(): Promise<void> {
      setIsThemeLoaded(false);
      const geral = (await getConfig('geral')) as { theme: 'light' | 'dark' };

      const theme = geral ? themes[geral.theme] : themes.light;
      setCurrentTheme(geral.theme);
      setCurrentThemeStyle(theme);
      setIsThemeLoaded(true);
    }
    getTheme();
  }, [currentTheme, getConfig]);

  const setTheme = useCallback(
    async (theme: 'light' | 'dark'): Promise<void> => {
      await setConfig('geral', { theme });
      setCurrentTheme(theme);
    },
    [setConfig]
  );

  const themeValue = useMemo(
    () => ({
      theme: currentTheme,
      themeStyle: currentThemeStyle,
      setTheme,
      isThemeLoaded,
    }),
    [currentTheme, currentThemeStyle, setTheme, isThemeLoaded]
  );

  return (
    <themeContext.Provider value={themeValue}>{children}</themeContext.Provider>
  );
}
