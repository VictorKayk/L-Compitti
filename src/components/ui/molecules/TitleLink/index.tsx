import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../atoms';
import { Container } from './style';

interface ITitleLink {
  link: string;
  title: string;
}

export function TitleLink({ link, title }: ITitleLink): ReactElement {
  return (
    <Container>
      <Link to={link}>
        <Title title={title} />
      </Link>
    </Container>
  );
}
