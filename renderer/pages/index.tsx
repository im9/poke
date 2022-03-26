import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { SearchResultField } from "../components/SearchResultField";
import { SearchList } from "../components/SearchList";

const SearchFormContainer = styled.div`
  margin: 40px;
`;

const IndexPage = () => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <Layout title="Pokemon Zukan">
      <h1>Pokemon Zukan</h1>
      <SearchFormContainer>
        <SearchForm setPokemonName={setPokemonName} />
      </SearchFormContainer>
      <SearchResultField pokemonName={pokemonName} />
      <SearchList limit={200} />
    </Layout>
  );
};

export default IndexPage;
