export interface IUseLanguage {
  language: 'en' | 'pt_BR';
  getLanguage: () => Promise<void>;
  setLanguage: (language: 'en' | 'pt_BR') => void;
  isLanguageLoaded: boolean;
}
