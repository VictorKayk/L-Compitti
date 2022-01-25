import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;

  min-width: 150px;
  background: ${({ theme }) => theme.colors.secondary};

  border-radius: 2px;

  padding: 0.3rem 0;
`;

export const ButtonMenuContainer = styled.li`
  list-style: none;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.background.colors.primary};
  }
  &:hover {
    span {
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      background-clip: text;
    }
  }
`;

export const ButtonMenu = styled.button`
  color: ${({ theme }) => theme.background.colors.primary};

  padding: 0.75rem;
  text-align: start;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
`;
