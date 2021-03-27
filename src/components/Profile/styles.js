import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 48rem;
  background: #ededed;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  transition: all 0.1s ease;

  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 12.3rem) {
    width: 25rem;
  }
`;

export const Header = styled.header`
  background: #00bfa5;
  height: 13rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 30px 0px 20px 0px;

  @media (max-width: 12.3rem) {
    width: 25rem;
  }
`;

export const Back = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 80px;
    cursor: pointer;
  }

  h3 {
    color: #ffffff;
    font-size: 1.9rem;
    font-weight: 500;
  }
`;

export const UserImage = styled.div`
  padding: 30px;

  img {
    border-radius: 100%;
    margin: 0 auto;
  }
`;

export const UserData = styled.div`
  background: #fff;
  padding: 20px 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: #009688;
  }

  p {
    font-size: 1.7rem;
    margin: 15px 0px 5px 0;
    color: #4a4a4a;
  }
`;
