import contactUserPhoto from "../../../../assets/img/contact-user-photo.png";
import { ReactComponent as CheckIcon } from "../../../../assets/svg/check-icon.svg";

import * as S from "./styles";

const ChatListContacts = () => {
  return (
    <S.Wrapper>
      <S.ContactPhoto>
        <img
          src={contactUserPhoto}
          width="60"
          alt="Foto de perfil do usuário"
        />
      </S.ContactPhoto>

      <S.MessageDataWrapper>
        <S.ContactNameAndTime>
          <span>Maria Fernandes</span>
          <p>06:17</p>
        </S.ContactNameAndTime>
        <S.ContactMessage>
          <CheckIcon />
          <p>Bom dia!! Tudo bem?</p>
        </S.ContactMessage>
      </S.MessageDataWrapper>
    </S.Wrapper>
  );
};

export default ChatListContacts;
