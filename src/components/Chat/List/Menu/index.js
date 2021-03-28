import { useContext } from "react";
import { MenuProfileContext } from "../../../../contexts/MenuProfileContext";

import mockOptions from "./mock.json";

import * as S from "./styles";

const ChatListMenu = ({ isMenuOpen }) => {
  const { openMenu } = useContext(MenuProfileContext);

  return (
    <S.Wrapper className={isMenuOpen ? "active" : ""}>
      <S.ActionWrapper>
        {mockOptions.map(({ id, action }) => (
          <S.Action key={id} onClick={openMenu}>
            {action}
          </S.Action>
        ))}
      </S.ActionWrapper>
    </S.Wrapper>
  );
};

export default ChatListMenu;
