import gql from "graphql-tag";

export const searchPokemon = gql`
  query searchPokemon($name: String) {
    pokemon(name: $name) {
      number
      name
      image
    }
  }
`;

export const searchPokemons = gql`
  query searchPokemons($first: Int!) {
    pokemons(first: $first) {
      number
      name
      image
    }
  }
`;
