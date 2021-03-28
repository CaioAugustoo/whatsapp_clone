import ChatListHeader from "./Header";
import ChatListMenu from "./Menu";
import SearchBar from "../../SearchBar";
import ChatListContacts from "./Contacts";

import * as S from "./styles";

const ChatList = () => {
  return (
    <S.Wrapper>
      <ChatListHeader />
      <ChatListMenu />
      <SearchBar />
      <ChatListContacts />
    </S.Wrapper>
  );
};

export default ChatList;
