import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemon } from "../../src/graphql/queries";

type PropType = {
  pokemonName: string;
};

const SearchResultField = ({ pokemonName }: PropType) => {
  const { loading, error, data } = useQuery<Query>(searchPokemon, {
    variables: { name: pokemonName },
  });

  if (!pokemonName) return <></>;
  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  if (!data || !data?.pokemon) return <>No Data.</>;

  const {
    number,
    name,
    attacks,
    classification,
    evolutionRequirements,
    evolutions,
    fleeRate,
    height,
    image,
    maxCP,
    maxHP,
    resistant,
    types,
    weaknesses,
    weight,
  } = data.pokemon;

  return (
    <dl>
      <dt>No:</dt>
      <dd>{number}</dd>
      <dt>Name:</dt>
      <dd>{name}</dd>
      {image ? <img src={image} alt={name ?? ""} /> : <div>no image.</div>}
      <dt>Types:</dt>
      <dd>{types}</dd>
      <dt>Max HP:</dt>
      <dd>{maxHP}</dd>
      <dt>Max CP:</dt>
      <dd>{maxCP}</dd>
      <dt>
        Weight:
        <dd>
          <dt>Minimum:</dt>
          <dd>{weight?.minimum}</dd>
          <dt>Maximum:</dt>
          <dd>{weight?.maximum}</dd>
        </dd>
      </dt>
      <dt>
        Height:
        <dd>
          <dt>Minimum:</dt>
          <dd>{height?.minimum}</dd>
          <dt>Maximum:</dt>
          <dd>{height?.maximum}</dd>
        </dd>
      </dt>
    </dl>
  );
};
export { SearchResultField };
