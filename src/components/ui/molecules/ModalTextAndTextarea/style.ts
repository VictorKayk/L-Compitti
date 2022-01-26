import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0 0.875rem;

  border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};

  h3 {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    p {
      color: red;
      font-size: 12px;
    }

    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 25px;
      max-height: 180px;
      height: 115px;
    }
  }

  button {
    font-size: 15px;
    color: ${({ theme }) => theme.background.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    &:hover {
      span {
        background: ${({ theme }) =>
          `linear-gradient(to right, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary})`};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;
