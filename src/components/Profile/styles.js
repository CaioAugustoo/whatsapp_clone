import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 40.3rem;
  background: #ededed;

  position: absolute;
  top: 0;
  z-index: 1;

  transition: all 0.1s ease;

  @media (max-width: 1200px) {
    width: 34.6rem;
  }
`;

export const Header = styled.header`
  background: #00bfa5;
  height: 13rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 30px 0px 20px 0px;
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
