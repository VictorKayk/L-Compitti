import { ReactElement } from 'react';
import { BsQuestionCircleFill, BsQuestionCircle } from 'react-icons/bs';
import { IconThemedComponent } from '../../atoms';
import {
  Button,
  ButtonMenuContainer,
  ButtonMenu,
  Container,
  MenuContainer,
} from './style';

interface IHelpIcon {
  isOpen?: boolean;
  toggle?: () => void;
  actions: {
    name: string;
    handleClick: () => void;
  }[];
}

export function HelpIcon({ isOpen, toggle, actions }: IHelpIcon): ReactElement {
  return (
    <Container>
      {isOpen && (
        <MenuContainer>
          {actions.map(({ name, handleClick }) => (
            <ButtonMenuContainer key={name}>
              <ButtonMenu onClick={handleClick}>
                <span>{name}</span>
              </ButtonMenu>
            </ButtonMenuContainer>
          ))}
        </MenuContainer>
      )}
      <Button onClick={toggle}>
        <IconThemedComponent
          darkTheme={BsQuestionCircleFill}
          lightTheme={BsQuestionCircle}
          clickable
        />
      </Button>
    </Container>
  );
}
