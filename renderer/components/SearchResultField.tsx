import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemon } from "../../src/graphql/queries";

type PropType = {
  pokemonName: string;
};

const SearchResultField = ({ pokemonName }) => {
  const { loading, error, data } = useQuery<Query>(searchPokemon, {
    variables: { name: pokemonName },
  }); // 変更

  if (!pokemonName) return <></>; // 追加
  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  if (!data || !data.pokemon) return <>No Data.</>; // 追加

  return (
    <div>
      <div>No: {data?.pokemon?.number}</div>
      <div>Name: {data?.pokemon?.name}</div>
      {data?.pokemon?.image ? (
        <img src={data?.pokemon?.image} alt={data?.pokemon?.name ?? ""} />
      ) : (
        <div>no image.</div>
      )}
    </div>
  );
};
export { SearchResultField };
