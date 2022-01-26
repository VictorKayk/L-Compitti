import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    .color {
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & {
    margin-bottom: 0.5rem;
  }
  &:last-child {
    margin-bottom: 0rem;
  }
`;

export const ItemCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8125rem;
`;

export const NoteAndTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.25rem 0.875rem 1.25rem;

  & {
    margin-bottom: 2.5rem;
  }

  background: ${({ theme }) => theme.background.colors.secondary};

  &:hover {
    .color {
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const NoteContainer = styled.div`
  word-break: break-all;
  text-indent: 20px;
  padding: 0 0.9375rem;
`;
