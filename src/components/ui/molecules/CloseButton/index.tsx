import { ReactElement } from 'react';
import { IconThemed } from '../../atoms';

// Icons
import lightIcon from '../../../../assets/icons/close-button-light.svg';
import darkIcon from '../../../../assets/icons/close-button-dark.svg';

interface ICloseButton {
  handleDelete: () => void;
}

export function CloseButton({ handleDelete }: ICloseButton): ReactElement {
  return (
    <button type="submit" onClick={handleDelete}>
      <IconThemed
        altIcon="Close Button"
        lightTheme={lightIcon}
        darkTheme={darkIcon}
      />
    </button>
  );
}
