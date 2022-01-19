import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { IUseThemes } from '../interfaces/hooks';
import themes from '../styles/themes';
import { useConfig } from './useCases';

export function useThemes(): IUseThemes {
  const { getConfig, setConfig } = useConfig();
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  useEffect(() => {
    async function getTheme(): Promise<void> {
      const geral = await getConfig('geral');
      if (geral) {
        const theme = themes[geral.theme] as DefaultTheme;
        setCurrentTheme(theme);
      } else {
        setCurrentTheme(themes.light);
      }
    }
    getTheme();
  }, []);

  async function setTheme(theme: 'light' | 'dark'): Promise<void> {
    await setConfig('geral', { theme });
    setCurrentTheme(themes[theme]);
  }

  return { theme: currentTheme, setTheme };
}
