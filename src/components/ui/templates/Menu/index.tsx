import { ReactElement } from 'react';
import { PageTitle } from '../../atoms';
import { TitleLink } from '../../molecules';
import { Container, PageTitleContainer, LinkContainer } from './style';

interface IMenu {
  title: string;
  todo: {
    title: string;
    linkTo: string;
  };
  note: {
    title: string;
    linkTo: string;
  };
  pomodoro: {
    title: string;
    linkTo: string;
  };
  config: {
    title: string;
    linkTo: string;
  };
}

export function Menu({
  title,
  todo,
  note,
  pomodoro,
  config,
}: IMenu): ReactElement {
  return (
    <Container>
      <PageTitleContainer>
        <PageTitle title={title} />
      </PageTitleContainer>
      <LinkContainer>
        <TitleLink title={todo.title} link={todo.linkTo} />
        <TitleLink title={note.title} link={note.linkTo} />
        {/* <TitleLink title={pomodoro.title} link={pomodoro.linkTo} /> */}
        <TitleLink title={config.title} link={config.linkTo} />
      </LinkContainer>
    </Container>
  );
}
