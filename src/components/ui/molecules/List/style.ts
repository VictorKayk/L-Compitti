import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  padding: 0 1.8125rem 2.25rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.25rem 0.875rem 1.25rem;

  background: ${({ theme }) => theme.background.colors.secondary};
  &:hover {
    div.title {
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
