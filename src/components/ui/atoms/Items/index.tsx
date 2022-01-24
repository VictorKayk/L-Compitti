import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../../interfaces/notepad';
import { ITodo } from '../../../../interfaces/todo-list';
import { CloseButton, TitleAndDate } from '../../molecules';
import {
  Container,
  ItemContainer,
  ItemCheckboxContainer,
  NoteAndTitleContainer,
  NoteContainer,
} from './style';

interface IItem extends ITodo, INote {}

interface IItems {
  items: IItem[];
  deleteButton?: boolean;
  noteList?: boolean;
  handleChangeItems?: (id: string) => Promise<void>;
  handleDeleteItems?: (id: string) => Promise<void>;
}

export function Items({
  items,
  handleChangeItems,
  handleDeleteItems,
  deleteButton = false,
  noteList = false,
}: IItems): ReactElement {
  const Content = items.map(({ id, name, isFinished, note, notification }) => {
    if (isFinished !== undefined)
      return (
        <ItemContainer key={id}>
          <ItemCheckboxContainer>
            <input
              type="checkbox"
              name={id}
              id={id}
              checked={isFinished || false}
              onChange={() => handleChangeItems && handleChangeItems(id)}
            />
            <label htmlFor={id} className="color">
              {name}
            </label>
          </ItemCheckboxContainer>
          {deleteButton && (
            <CloseButton
              handleDelete={() => handleDeleteItems && handleDeleteItems(id)}
            />
          )}
        </ItemContainer>
      );
    if (noteList && note) {
      const newNote = note.slice(0, 125);
      return (
        <Link to={id} key={id}>
          <NoteAndTitleContainer>
            <div className="color">
              <TitleAndDate title={name} date={notification} />
            </div>
            <NoteContainer>
              <p>{newNote}...</p>
            </NoteContainer>
          </NoteAndTitleContainer>
        </Link>
      );
    }
    return note && <p key={id}>{name}</p>;
  });
  return <Container>{Content}</Container>;
}
