import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ebebeb;

  cursor: pointer;
`;

export const ContactPhoto = styled.div`
  padding: 15px;

  img {
    border-radius: 100%;
  }
`;

export const ContactNameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const ContactMessage = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  P {
    font-size: 1.4rem;
  }
`;

export const MessageDataWrapper = styled.div`
  padding-right: 15px;
  width: 100%;
`;
