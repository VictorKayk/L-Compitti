import { ReactElement } from 'react';
import { TitleAndNumber } from '..';
import { ListedItem } from '../../atoms';
import { Container } from './style';

interface IListedItemContainer {
  title: string;
  number: number;
  item: string;
}

export function ListedItemContainer({
  title,
  number,
  item,
}: IListedItemContainer): ReactElement {
  return (
    <Container>
      <TitleAndNumber title={title} number={number} />
      <ListedItem item={item} />
    </Container>
  );
}
