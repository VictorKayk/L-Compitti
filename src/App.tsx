import { ReactElement } from 'react';
import { AppRoutes } from './Routes';

export function App(): ReactElement {
  return (
    <>
      <h2>Header</h2>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
