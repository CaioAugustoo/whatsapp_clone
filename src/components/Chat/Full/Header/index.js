import contactUserPhoto from "../../../../assets/img/contact-user-photo.png";

import * as S from "./styles";

const ChatFullHeader = () => {
  return (
    <S.Header>
      <S.ContactPhoto>
        <img
          src={contactUserPhoto}
          width="40"
          alt="Foto de perfil do usuário"
        />
      </S.ContactPhoto>
      <S.ContactName>Maria Fernandes</S.ContactName>
    </S.Header>
  );
};

export default ChatFullHeader;
