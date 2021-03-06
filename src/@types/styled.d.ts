import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      colors: {
        primary: string;
        secondary: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      gradient: {
        primary: string;
        secondary: string;
      };
    };
    fonts: {
      family: {
        primary: string;
        primaryBold: string;
        primaryHeavy: string;
        title: string;
        logo: string;
      };
      weight: {
        primary: number;
        title: number;
      };
      sizes: {
        primary: string;
        title: string;
        logo: string;
        pageTitle: string;
      };
      style: {
        logo: string;
      };
    };
  }
}
