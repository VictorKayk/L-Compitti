import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2.5rem;

  border-bottom: 2.5px solid ${({ theme }) => theme.colors.primary};
`;
