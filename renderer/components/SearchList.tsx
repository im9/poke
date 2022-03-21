import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemons } from "../../src/graphql/queries";

type PropType = {
  limit: number;
};

const SearchList = ({ limit }) => {
  const { loading, error, data } = useQuery<Query>(searchPokemons, {
    variables: { first: limit },
  });

  if (!limit) return <></>;
  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  if (!data || !data?.pokemons?.length) return <>No Data.</>;

  const pokemonList = data?.pokemons?.map((pokemon) => {
    return (
      <div>
        <div>No: {pokemon?.number}</div>
        <div>Name: {pokemon?.name}</div>
        {pokemon?.image ? (
          <img src={pokemon?.image} alt={pokemon?.name ?? ""} />
        ) : (
          <div>no image.</div>
        )}
      </div>
    );
  });

  return <>{pokemonList}</>;
};
export { SearchList };
