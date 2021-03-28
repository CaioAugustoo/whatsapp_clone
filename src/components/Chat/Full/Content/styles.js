import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 8rem;
`;

export const Warn = styled.div`
  background: #fdf4c4;
  width: fit-content;
  margin: 30px auto;
  padding: 5px 10px;
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const Message = styled.div`
  background: #dcf8c6;
  padding: 10px;
  border-radius: 7.5px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  font-size: 1.42rem;
  margin: 1px 0px 1px auto;
  width: fit-content;

  span {
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.45);
    display: block;
    text-align: right;
  }
`;

export const ChatDate = styled.time`
  display: block;
  background: #e1f3fb;
  padding: 10px;
  border-radius: 7.5px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  font-size: 1.42rem;
  margin: 1px auto;
  width: fit-content;
  text-transform: uppercase;
`;
