import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IUseLanguage } from '../interfaces/hooks';
import { useConfig } from './useCases';

export function useLanguage(): IUseLanguage {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'pt_BR'>('en');
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  const { i18n } = useTranslation();
  const { setConfig, getConfig } = useConfig();

  async function getLanguage(): Promise<void> {
    setIsLanguageLoaded(false);
    const geral = (await getConfig('geral')) as { language: 'en' | 'pt_BR' };

    const language = geral ? geral.language : 'en';
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    setIsLanguageLoaded(true);
  }

  async function setLanguage(language: string): Promise<void> {
    await setConfig('geral', { language });
    i18n.changeLanguage(language);
  }

  return {
    language: currentLanguage,
    setLanguage,
    getLanguage,
    isLanguageLoaded,
  };
}
