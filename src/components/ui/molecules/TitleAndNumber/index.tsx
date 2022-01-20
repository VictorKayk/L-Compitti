import { ReactElement } from 'react';
import { Subtitle, Title } from '../../atoms';
import { Container } from './style';

interface ITitleAndNumber {
  title: string;
  number: number;
}

export function TitleAndNumber({
  title,
  number,
}: ITitleAndNumber): ReactElement {
  return (
    <Container>
      <Title title={title} />
      <Subtitle subtitle={`${number}`} />
    </Container>
  );
}
