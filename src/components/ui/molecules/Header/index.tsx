import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../atoms';
import { MenuIcon, Logo } from '..';

interface IHeader {
  logoLink: string;
  menuLink: string;
}

export function Header({ logoLink, menuLink }: IHeader): ReactElement {
  return (
    <HeaderContainer>
      <Link to={logoLink}>
        <Logo />
      </Link>
      <Link to={menuLink}>
        <MenuIcon />
      </Link>
    </HeaderContainer>
  );
}
