import { useContext } from 'react';
import { languageContext } from '../context/language';
import { IUseLanguage } from '../interfaces/hooks';

export function useLanguage(): IUseLanguage {
  const { language, setLanguage, getLanguage, isLanguageLoaded } =
    useContext(languageContext);

  return {
    language,
    setLanguage,
    getLanguage,
    isLanguageLoaded,
  };
}
