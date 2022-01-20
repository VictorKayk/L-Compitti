import { ReactElement } from 'react';
import { Container } from './style';

interface IQuote {
  quote: string;
  author: string;
}

export function Quote({ quote, author }: IQuote): ReactElement {
  return (
    <Container>
      <blockquote>&quot;{quote}&quot;</blockquote>
      <figcaption>
        - <cite>{author}</cite>
      </figcaption>
    </Container>
  );
}
