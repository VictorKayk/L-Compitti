import { ReactElement } from 'react';
import { ITodoList } from '../../../../interfaces/todo-list';
import { INotepad } from '../../../../interfaces/notepad';
import { Items } from '../../atoms/Items';
import { TitleAndNumber } from '../../molecules';
import { PageTitleAndReturn } from '../../molecules/PageTitleAndReturn';
import {
  Container,
  ItemContainer,
  PageTitleAndReturnContainer,
  TitleAndNumberContainer,
} from './style';
import { DetectClickOutside } from '../../atoms';
import { HelpIcon } from '../../molecules/HelpIcon';

interface IListItems {
  title: string;
  goBack: () => void;
  item: ITodoList | INotepad | null;
  handleChangeItems?: (id: string) => Promise<void>;
  handleDeleteItems?: (id: string) => Promise<void>;
  helpActions: {
    name: string;
    handleClick: () => void;
  }[];
}

export function ListItems({
  title,
  goBack,
  item,
  handleChangeItems,
  handleDeleteItems,
  helpActions,
}: IListItems): ReactElement {
  return (
    <Container>
      <PageTitleAndReturnContainer>
        <PageTitleAndReturn title={title} goBack={goBack} />
      </PageTitleAndReturnContainer>
      <ItemContainer>
        <TitleAndNumberContainer className="title">
          <TitleAndNumber
            title={item?.name || ''}
            number={item?.items?.length || 0}
          />
        </TitleAndNumberContainer>
        <Items
          items={item?.items || []}
          handleChangeItems={handleChangeItems}
          handleDeleteItems={handleDeleteItems}
          deleteButton
          noteList
        />
      </ItemContainer>
      <DetectClickOutside>
        <HelpIcon actions={helpActions} />
      </DetectClickOutside>
    </Container>
  );
}
