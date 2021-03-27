import mockOptions from "./mock.json";

import * as S from "./styles";

const ChatListMenu = ({ isMenuOpen }) => {
  return (
    <S.Wrapper className={isMenuOpen ? "active" : ""}>
      <S.ActionWrapper>
        {mockOptions.map(({ id, action }) => (
          <S.Action key={id}>{action}</S.Action>
        ))}
      </S.ActionWrapper>
    </S.Wrapper>
  );
};

export default ChatListMenu;
