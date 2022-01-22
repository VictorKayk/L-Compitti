import { ReactElement } from 'react';
import { INotepad } from '../../../../interfaces/notepad';
import { ITodoList } from '../../../../interfaces/todo-list';
import { List } from '../../molecules/List';
import { PageTitleAndReturn } from '../../molecules/PageTitleAndReturn';
import { Container, PageTitleAndReturnContainer } from './style';

interface IListPage {
  title: string;
  goBack: () => void;
  list: ITodoList[] | INotepad[];
}

export function ListPage({ title, goBack, list }: IListPage): ReactElement {
  return (
    <Container>
      <PageTitleAndReturnContainer>
        <PageTitleAndReturn title={title} goBack={goBack} />
      </PageTitleAndReturnContainer>
      <List list={list} />
    </Container>
  );
}
