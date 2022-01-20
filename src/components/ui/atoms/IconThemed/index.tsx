import { ReactElement } from 'react';
import { useThemes } from '../../../../hooks';
import { Container } from './style';

interface IIConThemed {
  lightTheme: string;
  darkTheme: string;
  altIcon: string;
  clickable?: boolean;
}

export function IconThemed({
  lightTheme,
  darkTheme,
  altIcon,
  clickable = false,
}: IIConThemed): ReactElement {
  const { theme } = useThemes();
  const iconThemed = theme === 'light' ? darkTheme : lightTheme;

  return <Container alt={altIcon} src={iconThemed} clickable={clickable} />;
}
