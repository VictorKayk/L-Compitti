import { ReactElement } from 'react';
import { INote } from '../../../../interfaces/notepad';
import { ITodo } from '../../../../interfaces/todo-list';
import { CloseButton } from '../../molecules';
import { Container, ItemContainer, ItemCheckboxContainer } from './style';

interface IItem extends ITodo, INote {}

interface IItems {
  items: IItem[];
  deleteButton?: boolean;
  handleChangeItems?: (id: string) => Promise<void>;
  handleDeleteItems?: (id: string) => Promise<void>;
}

export function Items({
  items,
  handleChangeItems,
  handleDeleteItems,
  deleteButton = false,
}: IItems): ReactElement {
  return (
    <Container>
      {items.map(({ id, name, isFinished, note }) =>
        isFinished !== undefined ? (
          <ItemContainer>
            <ItemCheckboxContainer key={id}>
              <input
                type="checkbox"
                name={id}
                id={id}
                checked={isFinished || false}
                onChange={() => handleChangeItems && handleChangeItems(id)}
              />
              <label htmlFor={id}>{name}</label>
            </ItemCheckboxContainer>
            {deleteButton && (
              <CloseButton
                handleDelete={() => handleDeleteItems && handleDeleteItems(id)}
              />
            )}
          </ItemContainer>
        ) : (
          note && <p>{name}</p>
        )
      )}
    </Container>
  );
}
