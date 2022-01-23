import { ReactElement } from 'react';
import { INote } from '../../../../interfaces/notepad';
import { ITodo } from '../../../../interfaces/todo-list';
import { Container, ItemCheckboxContainer } from './style';

interface IItem extends ITodo, INote {}

interface IItems {
  items: IItem[];
}

export function Items({ items }: IItems): ReactElement {
  return (
    <Container>
      {items.map(({ id, name, isFinished, note }) =>
        isFinished !== undefined ? (
          <ItemCheckboxContainer key={id}>
            <input
              type="checkbox"
              name={name}
              id={name}
              defaultChecked={isFinished}
            />
            <p>{name}</p>
          </ItemCheckboxContainer>
        ) : (
          note && <p>{name}</p>
        )
      )}
    </Container>
  );
}
