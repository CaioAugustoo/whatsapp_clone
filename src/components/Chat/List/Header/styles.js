import styled from "styled-components";

export const Wrapper = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  background-color: #ededed;
  width: 100%;
  padding: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImage = styled.div`
  margin-right: auto;
  cursor: pointer;

  img {
    border-radius: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 50px;
    cursor: pointer;

    &:not(:last-child) {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;
