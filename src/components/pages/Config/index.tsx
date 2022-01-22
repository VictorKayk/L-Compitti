import { ReactElement } from 'react';
import { useLanguage, useThemes } from '../../../hooks';
import { Config as ConfigTemplate } from '../../ui/templates';

export default function Config(): ReactElement {
  const { setTheme, theme } = useThemes();
  const { setLanguage, language } = useLanguage();

  return (
    <ConfigTemplate
      theme={{
        setTheme,
        label: 'Themes',
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
        ],
        default: theme,
      }}
      language={{
        setLanguage,
        label: 'Languages',
        options: [
          { label: 'English', value: 'en' },
          { label: 'Português', value: 'pt_BR' },
        ],
        default: language,
      }}
    />
  );
}
