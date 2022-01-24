import { ReactElement } from 'react';
import { INote } from '../../../../interfaces/notepad';
import { TitleAndDate } from '../../molecules';
import { PageTitleAndReturn } from '../../molecules/PageTitleAndReturn';
import {
  Container,
  ItemContainer,
  PageTitleAndReturnContainer,
  TitleAndDateContainer,
  NoteContainer,
} from './style';

interface IListItem {
  title: string;
  goBack: () => void;
  item: INote | null;
}

export function ListItem({ title, goBack, item }: IListItem): ReactElement {
  return (
    <Container>
      <PageTitleAndReturnContainer>
        <PageTitleAndReturn title={title} goBack={goBack} />
      </PageTitleAndReturnContainer>
      <ItemContainer>
        <TitleAndDateContainer className="title">
          <TitleAndDate
            title={item?.name || ''}
            date={item?.notification || null}
          />
        </TitleAndDateContainer>
        <NoteContainer>{item?.note}</NoteContainer>
      </ItemContainer>
    </Container>
  );
}
