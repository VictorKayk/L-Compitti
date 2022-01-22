import { ReactElement } from 'react';

import { PageTitle, IconThemed } from '../../atoms';
import { Container, PageTitleContainer } from './style';

// Icons
import lightIcon from '../../../../assets/icons/return-light.svg';
import darkIcon from '../../../../assets/icons/return-dark.svg';

interface IPageTitleAndReturn {
  title: string;
}

export function PageTitleAndReturn({
  title,
}: IPageTitleAndReturn): ReactElement {
  return (
    <Container>
      <PageTitleContainer>
        <PageTitle title={title} />
      </PageTitleContainer>
      <IconThemed
        altIcon="Return icon"
        lightTheme={lightIcon}
        darkTheme={darkIcon}
        clickable
      />
    </Container>
  );
}
