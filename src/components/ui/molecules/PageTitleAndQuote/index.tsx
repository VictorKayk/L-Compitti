import { ReactElement } from 'react';

import { PageTitle, Quote } from '../../atoms';
import { Container } from './style';

interface IPageTitleAndQuote {
  title: string;
  quote: string;
  author: string;
}

export function PageTitleAndQuote({
  title,
  quote,
  author,
}: IPageTitleAndQuote): ReactElement {
  return (
    <Container>
      <PageTitle title={title} />
      <Quote quote={quote} author={author} />
    </Container>
  );
}
