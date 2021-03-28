import ChatFull from "./Full";
import ChatList from "./List";

import * as S from "./styles";

const Chat = () => {
  return (
    <S.Wrapper>
      <ChatList />
      <ChatFull />
    </S.Wrapper>
  );
};

export default Chat;
