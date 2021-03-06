import { useState } from "react";
import Input from "../Input";
import * as S from "./styles";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSubmitSearch = event => {
    event.preventDefault();
    alert(`Você pesquisou por: ${search}`);
    setSearch("");
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmitSearch}>
        <Input
          type="text"
          onChange={({ target }) => setSearch(target.value)}
          value={search}
          placeholder="Pesquisar ou começar uma nova conversa"
        />
      </form>
    </S.Wrapper>
  );
};

export default SearchBar;
