import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage, useThemes } from '../../../hooks';
import { Config as ConfigTemplate } from '../../ui/templates';

export default function Config(): ReactElement {
  const { setTheme, theme } = useThemes();
  const { setLanguage, language } = useLanguage();

  const { t } = useTranslation();

  return (
    <ConfigTemplate
      pageTitle={t('configuration')}
      theme={{
        setTheme,
        label: t('themes'),
        options: [
          { label: t('theme-light-label'), value: t('theme-light') },
          { label: t('theme-dark-label'), value: t('theme-dark') },
        ],
        default: theme,
      }}
      language={{
        setLanguage,
        label: t('languages'),
        options: [
          { label: t('language-english-label'), value: t('language-english') },
          {
            label: t('language-portuguese-label'),
            value: t('language-portuguese'),
          },
        ],
        default: language,
      }}
    />
  );
}
