import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 0 1.8125rem 2.25rem;
`;

export const PageTitleAndReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;

  padding: 1.25rem 1.875rem 0;
`;

export const TitleAndNumberContainer = styled.div`
  h3,
  h4 {
    font-size: 30px;
  }
`;
