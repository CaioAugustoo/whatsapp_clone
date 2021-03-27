import { useState, useEffect, useRef, useContext } from "react";
import { MenuProfileContext } from "../../../../contexts/MenuProfileContext";

import ChatMenu from "../Menu";

import userIcon from "../../../../assets/img/user-icon.png";
import { ReactComponent as StatusIcon } from "../../../../assets/svg/status-icon.svg";
import { ReactComponent as ChatIcon } from "../../../../assets/svg/chat-icon.svg";
import { ReactComponent as MenuIcon } from "../../../../assets/svg/menu-icon.svg";

import * as S from "./styles";

const ChatListHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openMenu } = useContext(MenuProfileContext);
  const menuRef = useRef(null);

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target))
      setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.UserImage onClick={openMenu}>
            <img src={userIcon} width="35" alt="Foto de perfil do usuário" />
          </S.UserImage>
          <S.Actions ref={menuRef}>
            <StatusIcon role="img" aria-label="Ícone de abrir status" />
            <ChatIcon role="img" aria-label="Ícone de iniciar nova conversa" />
            <MenuIcon
              role="img"
              aria-label="Ícone de expandir menu"
              onClick={() => setIsMenuOpen(true)}
            />
          </S.Actions>
        </S.Header>
      </S.Wrapper>
      <ChatMenu isMenuOpen={isMenuOpen} />
    </>
  );
};

export default ChatListHeader;
