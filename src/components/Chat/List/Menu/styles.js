import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 2px;

  transition: transform 0.1s ease;
  transform-origin: right top;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }
`;

export const ActionWrapper = styled.ul`
  padding: 10px 0px;
`;

export const Action = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    background: #f5f5f5;
  }

  &:not(:first-child) {
    cursor: not-allowed;
    opacity: 0.3;

    &:hover {
      background: none;
    }
  }
`;
