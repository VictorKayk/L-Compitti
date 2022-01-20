import { ReactElement } from 'react';
import { IconThemed } from '../../atoms';

// Icons
import lightIcon from '../../../../assets/icons/logo-light.svg';
import darkIcon from '../../../../assets/icons/logo-dark.svg';

export function Logo(): ReactElement {
  return (
    <IconThemed altIcon="Logo" lightTheme={lightIcon} darkTheme={darkIcon} />
  );
}
