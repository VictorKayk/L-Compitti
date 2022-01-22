import { ReactElement } from 'react';
import { INote } from '../../../../interfaces/notepad';
import { ITodo } from '../../../../interfaces/todo-list';
import { Container, ItemContainer } from './style';

interface IItem extends ITodo, INote {}

interface IItems {
  items: IItem[];
}

export function Items({ items }: IItems): ReactElement {
  return (
    <Container>
      {items.map(({ id, name, isFinished }) => (
        <ItemContainer key={id}>
          <input
            type="checkbox"
            name={name}
            id={name}
            defaultChecked={isFinished}
          />
          <p>{name}</p>
        </ItemContainer>
      ))}
    </Container>
  );
}
