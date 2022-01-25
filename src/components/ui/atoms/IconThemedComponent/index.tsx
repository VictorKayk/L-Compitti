import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { useThemes } from '../../../../hooks';
import { Container } from './style';

interface IIConThemedComponent {
  lightTheme: IconType;
  darkTheme: IconType;
  clickable?: boolean;
}

export function IconThemedComponent({
  lightTheme,
  darkTheme,
  clickable = false,
}: IIConThemedComponent): ReactElement {
  const { theme } = useThemes();
  const IconThemed = theme === 'light' ? darkTheme : lightTheme;

  return (
    <Container clickable={clickable}>
      <IconThemed />
    </Container>
  );
}
