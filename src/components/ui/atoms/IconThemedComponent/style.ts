import styled from 'styled-components';

interface IContainer {
  readonly clickable: boolean;
}

export const Container = styled.div<IContainer>`
  transition: all 0.2s ease-out;
  z-index: 6;

  &:hover {
    transform: ${({ clickable }) => clickable && 'scale(1.15, 1.15)'};
  }

  font-size: 36px;
  width: 36px;
  height: 36px;
`;
