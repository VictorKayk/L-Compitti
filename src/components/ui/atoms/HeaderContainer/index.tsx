import { ReactElement, ReactNode } from 'react';
import { Container } from './style';

interface IHeaderContainer {
  children: ReactNode;
}

export function HeaderContainer({ children }: IHeaderContainer): ReactElement {
  return <Container>{children}</Container>;
}
