import { ReactElement } from 'react';
import { IconThemed } from '../../atoms';

// Icons
import lightIcon from '../../../../assets/icons/return-light.svg';
import darkIcon from '../../../../assets/icons/return-dark.svg';

interface IReturnIcon {
  handleReturnClick: () => void;
}

export function ReturnIcon({ handleReturnClick }: IReturnIcon): ReactElement {
  return (
    <button type="button" aria-hidden onClick={handleReturnClick}>
      <IconThemed
        altIcon="Return Icon"
        lightTheme={lightIcon}
        darkTheme={darkIcon}
        clickable
      />
    </button>
  );
}
