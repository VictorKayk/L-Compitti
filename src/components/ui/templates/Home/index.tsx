import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PageTitleAndQuote } from '../../molecules';
import { ListedItemContainer } from '../../molecules/ListedItemContainer';
import { Container, ItensContainer, PageTitleContainer } from './style';

interface IHome {
  title: string;
  quote: {
    text: string;
    author: string;
  };
  todo: {
    title: string;
    number: number;
    item: string;
    linkTo: string;
  };
  note: {
    title: string;
    number: number;
    item: string;
    linkTo: string;
  };
  pomodoro: {
    title: string;
    number: number;
    item: string;
    linkTo: string;
  };
}

export function Home({
  title,
  quote: { text, author },
  todo,
  note,
  pomodoro,
}: IHome): ReactElement {
  return (
    <Container>
      <PageTitleContainer>
        <PageTitleAndQuote title={title} author={author} quote={text} />
      </PageTitleContainer>

      <ItensContainer>
        <Link to={todo.linkTo}>
          <ListedItemContainer
            title={todo.title}
            number={todo.number}
            item={todo.item}
          />
        </Link>
        <Link to={note.linkTo}>
          <ListedItemContainer
            title={note.title}
            number={note.number}
            item={note.item}
          />
        </Link>
        <Link to={pomodoro.linkTo}>
          <ListedItemContainer
            title={pomodoro.title}
            number={pomodoro.number}
            item={pomodoro.item}
          />
        </Link>
      </ItensContainer>
    </Container>
  );
}
