import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemons } from "../../src/graphql/queries";
import styled from "styled-components";

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 0.25vw calc((30 / 1280) * 100vw) 0.25vw;
`;

const Card = styled.li`
  list-style: none;
  margin: 0.25vw;
`;

const CardFigure = styled.figure`
  border: solid 1px #e3e3e3;
  width: 11.5vw;
  height: 11.5vw;
  flex: 0 0 auto;
  margin: 0;
  padding: 10px;
`;

const CardImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

type PropType = {
  limit: number;
};

const SearchResultList = ({ limit }: PropType) => {
  const { loading, error, data } = useQuery<Query>(searchPokemons, {
    variables: { first: limit },
  });

  if (!limit) return <></>;
  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  if (!data || !data?.pokemons?.length) return <>No Data.</>;

  const pokemonList = data?.pokemons?.map((pokemon, index) => {
    return (
      <Card key={index}>
        <Link href={`/detail/${pokemon?.name}`}>
          <a>
            <CardFigure>
              {pokemon?.image ? (
                <CardImg src={pokemon?.image} alt={pokemon?.name ?? ""} />
              ) : (
                <div>no image.</div>
              )}
            </CardFigure>
          </a>
        </Link>
        <p>{pokemon?.name}</p>
      </Card>
    );
  });

  return <Cards>{pokemonList}</Cards>;
};
export { SearchResultList };
