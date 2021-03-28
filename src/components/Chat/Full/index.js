import ChatFullContent from "./Content";
import ChatFullHeader from "./Header";

import * as S from "./styles";

const ChatFull = () => {
  return (
    <S.Wrapper>
      <ChatFullHeader />
      <ChatFullContent />
    </S.Wrapper>
  );
};

export default ChatFull;
