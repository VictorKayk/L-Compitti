import { ReactElement } from 'react';
import { Container } from './style';

interface IPageTitle {
  title: string;
}

export function PageTitle({ title }: IPageTitle): ReactElement {
  return <Container>{title}</Container>;
}
