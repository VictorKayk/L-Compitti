import { ReactElement, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDefaultConfig, useThemes } from './hooks';

import { AppRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

export function App(): ReactElement {
  const { setDefaultConfig } = useDefaultConfig();
  const { theme, setTheme } = useThemes();

  useEffect(() => {
    async function setConfigs(): Promise<void> {
      await setDefaultConfig();
    }
    setConfigs();
  }, []);

  setTheme('dark');
  return (
    <ThemeProvider theme={theme}>
      <h2>Header</h2>
      <main>
        <AppRoutes />
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
