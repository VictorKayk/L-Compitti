import { createGlobalStyle } from 'styled-components';

// Fonts
import fungisRegularOtf from '../assets/fonts/FUNGIS/fonts/OpenType-PS/FUNGIS-Regular.otf';
import fungisRegularTtf from '../assets/fonts/FUNGIS/fonts/OpenType-TT/FUNGIS-Regular.ttf';

import fungisBoldOtf from '../assets/fonts/FUNGIS/fonts/OpenType-PS/FUNGIS-Bold.otf';
import fungisBoldTtf from '../assets/fonts/FUNGIS/fonts/OpenType-TT/FUNGIS-Bold.ttf';

import fungisHeavyOtf from '../assets/fonts/FUNGIS/fonts/OpenType-PS/FUNGIS-Heavy.otf';
import fungisHeavyTtf from '../assets/fonts/FUNGIS/fonts/OpenType-TT/FUNGIS-Heavy.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'fungis';
    src: local('fungis'), local('fungis'), url(${fungisRegularOtf}) format('opentype'), url(${fungisRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'fungisBold';
    src: local('fungisBold'), local('fungisBold'), url(${fungisBoldOtf}) format('opentype'), url(${fungisBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'fungisHeavy';
    src: local('fungisHeavy'), local('fungisHeavy'), url(${fungisHeavyOtf}) format('opentype'), url(${fungisHeavyTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 375px;
    height: 600px;
    background: ${({ theme }) => theme.background.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  body, input, textarea, select, button {
    font: ${({ theme }) => theme.fonts.weight.primary} ${({ theme }) =>
  theme.fonts.sizes.primary} ${({ theme }) => theme.fonts.family.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font: ${({ theme }) => theme.fonts.weight.title} ${({ theme }) =>
  theme.fonts.sizes.title} ${({ theme }) => theme.fonts.family.title};
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
