import { ReactElement } from 'react';
import { Container } from './style';
import { MenuIcon, Logo } from '..';

export function Header(): ReactElement {
  return (
    <Container>
      <Logo />
      <MenuIcon />
    </Container>
  );
}
