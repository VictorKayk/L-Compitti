import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.875rem;

  border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};
`;
