import { ReactElement } from 'react';

import { PageTitle, IconThemed } from '../../atoms';
import { Container, PageTitleContainer } from './style';

// Icons
import lightIcon from '../../../../assets/icons/return-light.svg';
import darkIcon from '../../../../assets/icons/return-dark.svg';

interface IPageTitleAndReturn {
  title: string;
  goBack: () => void;
}

export function PageTitleAndReturn({
  title,
  goBack,
}: IPageTitleAndReturn): ReactElement {
  return (
    <Container>
      <PageTitleContainer>
        <PageTitle title={title} />
      </PageTitleContainer>
      <button type="button" onClick={goBack}>
        <IconThemed
          altIcon="Return icon"
          lightTheme={lightIcon}
          darkTheme={darkIcon}
          clickable
        />
      </button>
    </Container>
  );
}
