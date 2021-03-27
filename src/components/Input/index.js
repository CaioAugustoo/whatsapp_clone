import * as S from "./styles";

const Input = ({ type, placeholder, ...rest }) => {
  return <S.Input type={type} placeholder={placeholder} {...rest}></S.Input>;
};

export default Input;
