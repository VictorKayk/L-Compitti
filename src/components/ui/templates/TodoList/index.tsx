import { ReactElement } from 'react';
import { PageTitleAndReturn } from '../../molecules/PageTitleAndReturn';
import { Container, PageTitleAndReturnContainer } from './style';

interface ITodoList {
  title: string;
}

export function TodoList({ title }: ITodoList): ReactElement {
  return (
    <Container>
      <PageTitleAndReturnContainer>
        <PageTitleAndReturn title={title} />
      </PageTitleAndReturnContainer>
    </Container>
  );
}
