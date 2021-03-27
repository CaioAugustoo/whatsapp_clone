import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 40rem;
  height: 100%;
  background: black;
  border-right: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 100rem) {
    width: 25rem;
  }
`;

export const Header = styled.header`
  background-color: #ededed;
  width: 100%;
  padding: 10px 15px;
  position: relative;

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
