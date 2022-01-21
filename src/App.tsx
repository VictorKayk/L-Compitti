import { ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/ui/molecules';
import { useDefaultConfig, useThemes, useLanguage } from './hooks';

import { GlobalStyle } from './styles/global';

export function App(): ReactElement {
  const { setDefaultConfig } = useDefaultConfig();
  const { themeStyle } = useThemes();
  const { getLanguage } = useLanguage();

  useEffect(() => {
    async function setConfigs(): Promise<void> {
      await setDefaultConfig();
      await getLanguage();
    }
    setConfigs();
  }, []);

  return (
    <ThemeProvider theme={themeStyle}>
      <Header logoLink="/" menuLink="/menu" />
      <Outlet />
      <GlobalStyle />
    </ThemeProvider>
  );
}
