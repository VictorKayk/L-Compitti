import { ReactElement, useCallback } from 'react';
import { PageTitle, Title } from '../../atoms';
import { Select } from '../../atoms/Select';
import { ConfigurationContainer, Container, PageTitleContainer, TitleAndSelectContainer } from './style';

interface IConfig {
  theme: {
    setTheme: (theme: 'light' | 'dark') => Promise<void>;
    label: string;
    options: {
      label: string;
      value: 'light' | 'dark';
    }[];
    default: string;
  };
  language: {
    setLanguage: (language: 'en' | 'pt_BR') => void;
    label: string;
    options: {
      label: string;
      value: 'en' | 'pt_BR';
    }[];
    default: string;
  };
}

export function Config({ theme, language }: IConfig): ReactElement {
  const handleChangeTheme = useCallback(
    (value: string): void => {
      theme.setTheme(value as 'light' | 'dark');
    },
    [theme]
  );

  const handleChangLanguage = useCallback(
    (value: string): void => {
      language.setLanguage(value as 'en' | 'pt_BR');
    },
    [language]
  );

  return (
    <Container>
      <PageTitleContainer>
        <PageTitle title="Configuration" />
      </PageTitleContainer>
      <ConfigurationContainer>
        <TitleAndSelectContainer>
          <Title title={`${theme.label}:`} />
          <Select
            handleChange={handleChangeTheme}
            options={theme.options}
            defaultValue={theme.default}
          />
        </TitleAndSelectContainer>
        <TitleAndSelectContainer>
          <Title title={`${language.label}:`} />
          <Select
            handleChange={handleChangLanguage}
            options={language.options}
            defaultValue={language.default}
          />
        </TitleAndSelectContainer>
      </ConfigurationContainer>
    </Container>
  );
}
