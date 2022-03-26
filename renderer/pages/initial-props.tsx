import Link from "next/link";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/client";
import { Query } from "../../src/@types/types";
import { searchPokemons } from "../../src/graphql/queries";

const WithInitialProps = () => {
  return (
    <Layout title="Poke">
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = useQuery<Query>(searchPokemons, {
    variables: { first: 200 },
  });

  return { props: { items: data } };
}

export default WithInitialProps;
