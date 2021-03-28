import mockMessages from "./mock.json";

import * as S from "./styles";

const ChatFullContent = () => {
  return (
    <S.Wrapper>
      <S.Warn>Este é uma cópia do WhatsApp. As mensagens não são reais.</S.Warn>
      <S.ChatDate>Hoje</S.ChatDate>
      {mockMessages.map(({ id, message, time }) => (
        <S.Message key={id}>
          <p>{message}</p>
          <span>{time}</span>
        </S.Message>
      ))}
    </S.Wrapper>
  );
};

export default ChatFullContent;
