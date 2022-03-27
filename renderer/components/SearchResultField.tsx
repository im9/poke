import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemon } from "../../src/graphql/queries";
import styled from "styled-components";

const PokemonImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonImgCaption = styled.dl`
  border: solid 1px #e3e3e3;
  flex: 0 0 auto;
  margin: 0 120px;
  padding: 40px 60px;
  min-width: 280px;
`;

const PokemonImg = styled.img`
  width: auto;
  height: calc((340 / 1280) * 100vw);
  max-height: 340px;
`;

const PokemonInfoFrameWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PokemonInfoFrame = styled.dl`
  border: solid 1px #e3e3e3;
  border-radius: 8px;
  border-width: 4px;
  margin-top: 0;
  padding: calc((40 / 1280) * 100vw) calc((60 / 1280) * 100vw);
  width: calc((490 / 1280) * 100vw);
  max-width: 490px;
  min-height: 280px;
  order: 1;
  margin: 1rem;
`;

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
    <>
      <PokemonImgWrapper>
        {image ? (
          <PokemonImg src={image} alt={name ?? ""} />
        ) : (
          <div>no image.</div>
        )}
        <PokemonImgCaption>
          <dt>No:</dt>
          <dd>{number}</dd>
          <dt>Name:</dt>
          <dd>{name}</dd>
        </PokemonImgCaption>
      </PokemonImgWrapper>
      <PokemonInfoFrameWrapper>
        <PokemonInfoFrame>
          <dt>Types:</dt>
          <dd>{types}</dd>
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
        </PokemonInfoFrame>
        <PokemonInfoFrame>
          <dt>Max HP:</dt>
          <dd>{maxHP}</dd>
          <dt>Max CP:</dt>
          <dd>{maxCP}</dd>
        </PokemonInfoFrame>
      </PokemonInfoFrameWrapper>
    </>
  );
};
export { SearchResultField };
