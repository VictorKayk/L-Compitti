import styled from 'styled-components';

export const Container = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.pageTitle};
  text-align: center;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
