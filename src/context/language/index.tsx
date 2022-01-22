import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../../hooks/useCases';
import { ILanguageContext } from '../../interfaces/context';

export const languageContext = createContext({} as ILanguageContext);

interface ILanguageContextProvider {
  children: ReactNode;
}

export function LanguageContext({
  children,
}: ILanguageContextProvider): ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'pt_BR'>('en');
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  const { i18n } = useTranslation();
  const { setConfig, getConfig } = useConfig();

  const getLanguage = useCallback(async (): Promise<void> => {
    setIsLanguageLoaded(false);
    const geral = (await getConfig('geral')) as { language: 'en' | 'pt_BR' };

    const language = geral ? geral.language : 'en';
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    setIsLanguageLoaded(true);
  }, []);

  const setLanguage = useCallback(async (language: string): Promise<void> => {
    await setConfig('geral', { language });
    i18n.changeLanguage(language);
  }, []);

  const languageValue = useMemo(
    () => ({
      language: currentLanguage,
      setLanguage,
      getLanguage,
      isLanguageLoaded,
    }),
    [currentLanguage, setLanguage, getLanguage, isLanguageLoaded]
  );

  return (
    <languageContext.Provider value={languageValue}>
      {children}
    </languageContext.Provider>
  );
}
