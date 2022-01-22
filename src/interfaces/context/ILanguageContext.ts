export interface ILanguageContext {
  language: 'en' | 'pt_BR';
  setLanguage: (language: string) => Promise<void>;
  getLanguage: () => Promise<void>;
  isLanguageLoaded: boolean;
}
