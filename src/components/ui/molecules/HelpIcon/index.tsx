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
}

export function HelpIcon({ isOpen, toggle }: IHelpIcon): ReactElement {
  return (
    <Container>
      {isOpen && (
        <MenuContainer>
          <ButtonMenuContainer>
            <ButtonMenu>
              <span>Teste</span>
            </ButtonMenu>
          </ButtonMenuContainer>
          <ButtonMenuContainer>
            <ButtonMenu>
              <span>Teste</span>
            </ButtonMenu>
          </ButtonMenuContainer>
          <ButtonMenuContainer>
            <ButtonMenu>
              <span>Teste</span>
            </ButtonMenu>
          </ButtonMenuContainer>
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
