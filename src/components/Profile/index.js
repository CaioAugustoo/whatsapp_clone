import { useContext } from "react";
import { MenuProfileContext } from "../../contexts/MenuProfileContext";

import { ReactComponent as BackIcon } from "../../assets/svg/arrow-back-icon.svg";
import userIcon from "../../assets/img/user-icon.png";

import * as S from "./styles";

const Profile = () => {
  const { isOpen, closeMenu } = useContext(MenuProfileContext);

  return (
    <S.Wrapper className={isOpen ? "active" : ""}>
      <S.Header>
        <S.Back>
          <BackIcon onClick={closeMenu} />
          <h3>Perfil</h3>
        </S.Back>
      </S.Header>

      <S.UserImage>
        <img src={userIcon} width="200" alt="Foto de perfil do usuário" />
      </S.UserImage>

      <S.UserData>
        <span>Nome</span>
        <p>John Doe</p>
      </S.UserData>

      <S.UserData>
        <span>Recado</span>
        <p>Olá! Eu estou usando o WhatsApp.</p>
      </S.UserData>
    </S.Wrapper>
  );
};

export default Profile;
