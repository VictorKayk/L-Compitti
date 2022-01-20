import { ReactElement } from 'react';

interface ISubTitle {
  subtitle: string;
}

export function Subtitle({ subtitle }: ISubTitle): ReactElement {
  return <h4>{subtitle}</h4>;
}
