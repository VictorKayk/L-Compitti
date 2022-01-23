import { ReactElement } from 'react';
import { ITodoList } from '../../../../interfaces/todo-list';
import { Container } from './style';

interface IItem {
  item: ITodoList | null;
}

export function Item({ item }: IItem): ReactElement {
  return <Container>oi</Container>;
}
