import { ReactElement } from 'react';
import { Container } from './style';

interface IListedItem {
  item: string;
}

export function ListedItem({ item }: IListedItem): ReactElement {
  return (
    <Container>
      <p>{item}</p>
    </Container>
  );
}
