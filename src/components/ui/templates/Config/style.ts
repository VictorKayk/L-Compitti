import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const PageTitleContainer = styled.div`
  padding: 1.25rem 2.375rem 0;
`;

export const ConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  padding: 0 2.5rem;
`;

export const TitleAndSelectContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 2.5rem;

  &:hover {
    h3 {
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
