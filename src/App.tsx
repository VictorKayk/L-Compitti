import { ReactElement, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/ui/molecules';
import { useDefaultConfig, useThemes } from './hooks';

import { AppRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

export function App(): ReactElement {
  const { setDefaultConfig } = useDefaultConfig();
  const { themeStyle } = useThemes();

  useEffect(() => {
    async function setConfigs(): Promise<void> {
      await setDefaultConfig();
    }
    setConfigs();
  }, []);

  return (
    <ThemeProvider theme={themeStyle}>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
