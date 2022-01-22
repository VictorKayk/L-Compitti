import { ReactElement, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TitleAndNumber } from '..';
import { INotepad } from '../../../../interfaces/notepad';
import { ITodoList } from '../../../../interfaces/todo-list';
import { Items } from '../../atoms/Items';
import { Container, ListContainer } from './style';

interface IList {
  list: ITodoList[] | INotepad[];
}

export function List({ list }: IList): ReactElement {
  return (
    <Container>
      {list.map(({ id, name, items }) => (
        <Fragment key={id}>
          <Link to={id}>
            <ListContainer>
              <div className="title">
                <TitleAndNumber title={name} number={items.length} />
              </div>
              <Items items={items} />
            </ListContainer>
          </Link>
        </Fragment>
      ))}
    </Container>
  );
}
