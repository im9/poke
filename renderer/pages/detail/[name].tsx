import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { User } from "../../interfaces";
import { SearchResultField } from "../../components/SearchResultField";

type Params = {
  name?: string;
};

type Props = {
  item?: User;
  errors?: string;
};

const Detail = ({ item, errors }: any) => {
  const router = useRouter();
  const name: any = router?.query?.name || "";

  if (!name || errors) {
    return (
      <Layout title={`Error | Poke`}>
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.name : "Detail"} | Poke`}>
      <Link href="/">
        <a>Go home</a>
      </Link>
      {item}
      <SearchResultField pokemonName={name} />
    </Layout>
  );
};

export default Detail;
