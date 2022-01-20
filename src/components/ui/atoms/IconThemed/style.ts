import styled from 'styled-components';

interface IContainer {
  readonly clickable: boolean;
}

export const Container = styled.img<IContainer>`
  transition: all 0.2s;
  &:hover {
    transform: ${({ clickable }) => clickable && 'scale(1.05, 1.05)'};
  }
`;
