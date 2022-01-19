import { useEffect, useState } from 'react';

import { IUseThemes } from '../interfaces/hooks';
import themes from '../styles/themes';
import { useConfig } from './useCases';

export function useThemes(): IUseThemes {
  const { getConfig, setConfig } = useConfig();
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  useEffect(() => {
    async function getTheme(): Promise<void> {
      const geral = (await getConfig('geral')) as { theme: 'light' | 'dark' };

      const theme = geral ? themes[geral.theme] : themes.light;
      setCurrentTheme(theme);
    }
    getTheme();
  }, []);

  async function setTheme(theme: 'light' | 'dark'): Promise<void> {
    await setConfig('geral', { theme });
    setCurrentTheme(themes[theme]);
  }

  return { theme: currentTheme, setTheme };
}
