import ChatFullHeader from "./Header";
import ChatFullContent from "./Content";
import ChatFullMessageField from "./MessageField";

import * as S from "./styles";

const ChatFull = () => {
  return (
    <S.Wrapper>
      <ChatFullHeader />
      <ChatFullContent />
      <ChatFullMessageField />
    </S.Wrapper>
  );
};

export default ChatFull;
