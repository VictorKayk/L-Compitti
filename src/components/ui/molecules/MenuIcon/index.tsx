import { ReactElement } from 'react';
import { IconThemed } from '../../atoms';

// Icons
import lightIcon from '../../../../assets/icons/menu-light.svg';
import darkIcon from '../../../../assets/icons/menu-dark.svg';

export function MenuIcon(): ReactElement {
  return (
    <button type="button" aria-hidden>
      <IconThemed
        altIcon="Menu Icon"
        lightTheme={lightIcon}
        darkTheme={darkIcon}
        clickable
      />
    </button>
  );
}
