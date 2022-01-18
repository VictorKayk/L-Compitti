import { useTranslation } from 'react-i18next';
import { IUseLanguage } from '../interfaces/hooks';
import { useConfig } from './useCases';

export function useLanguage(): IUseLanguage {
  const { i18n } = useTranslation();
  const { setConfig } = useConfig();

  async function setLanguage(language: string): Promise<void> {
    await setConfig('geral', { language });
    i18n.changeLanguage(language);
  }

  return { setLanguage };
}
