import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { SearchResultField } from "../components/SearchResultField";
import { SearchResultList } from "../components/SearchResultList";

const SearchFormContainer = styled.div`
  margin: 40px;
`;

const IndexPage = () => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <Layout title="Pokemon Zukan">
      <SearchFormContainer>
        <SearchForm setPokemonName={setPokemonName} />
      </SearchFormContainer>
      <SearchResultField pokemonName={pokemonName} />
      <SearchResultList limit={151} />
    </Layout>
  );
};

export default IndexPage;
