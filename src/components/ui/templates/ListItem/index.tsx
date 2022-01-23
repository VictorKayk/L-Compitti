import { ReactElement } from 'react';
import { ITodoList } from '../../../../interfaces/todo-list';
import { Items } from '../../atoms/Items';
import { TitleAndNumber } from '../../molecules';
import { PageTitleAndReturn } from '../../molecules/PageTitleAndReturn';
import { Container, PageTitleAndReturnContainer } from './style';

interface IListItem {
  title: string;
  goBack: () => void;
  item: ITodoList | null;
}

export function ListItem({ title, goBack, item }: IListItem): ReactElement {
  console.log(item);
  return (
    <Container>
      <PageTitleAndReturnContainer>
        <PageTitleAndReturn title={title} goBack={goBack} />
      </PageTitleAndReturnContainer>
      <div>
        <div className="title">
          <TitleAndNumber
            title={item?.name || ''}
            number={item?.items.length || 0}
          />
        </div>
        <Items items={item?.items || []} />
      </div>
    </Container>
  );
}
