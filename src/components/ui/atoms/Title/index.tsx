import { ReactElement } from 'react';

interface ITitle {
  title: string;
}

export function Title({ title }: ITitle): ReactElement {
  return <h3>{title}</h3>;
}
