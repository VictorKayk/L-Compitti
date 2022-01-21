import { StrictMode } from 'react';
import { render } from 'react-dom';

import { AppRoutes } from './Routes';

import './config/localforage';
import './config/i18n';

render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
  document.getElementById('root')
);
