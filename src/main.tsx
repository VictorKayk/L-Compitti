import { StrictMode } from 'react';
import { render } from 'react-dom';

import { ThemeContext } from './context/theme';
import { LanguageContext } from './context/language';
import { AppRoutes } from './Routes';

import './config/localforage';
import './config/i18n';

render(
  <StrictMode>
    <ThemeContext>
      <LanguageContext>
        <AppRoutes />
      </LanguageContext>
    </ThemeContext>
  </StrictMode>,
  document.getElementById('root')
);
