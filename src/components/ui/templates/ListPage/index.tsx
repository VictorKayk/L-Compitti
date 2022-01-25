import { ReactElement } from 'react';
import { INotepad } from '../../../../interfaces/notepad';
import { ITodoList } from '../../../../interfaces/todo-list';
import { DetectClickOutside } from '../../atoms';
import { List } from '../../molecules';
import { HelpIcon } from '../../molecules/HelpIcon';
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
      <DetectClickOutside>
        <HelpIcon />
      </DetectClickOutside>
      <List list={list} />
    </Container>
  );
}
