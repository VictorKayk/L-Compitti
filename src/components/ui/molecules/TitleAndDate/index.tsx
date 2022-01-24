import { ReactElement } from 'react';
import { Subtitle, Title } from '../../atoms';
import { Container } from './style';

interface ITitleAndDate {
  title: string;
  date: Date | null;
}

export function TitleAndDate({ title, date }: ITitleAndDate): ReactElement {
  return (
    <Container>
      <Title title={title} />
      <Subtitle subtitle={date ? `${date}` : ''} />
    </Container>
  );
}
