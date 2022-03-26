import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { SearchResultField } from "../../components/SearchResultField";

const Detail = ({ errors }: any) => {
  const router = useRouter();
  const name: any = router?.query?.name || "";

  if (!name || errors) {
    return (
      <Layout title={`Error | Pokemon Zukan`}>
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${name ? name : "Detail"} | Pokemon Zukan`}>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <SearchResultField pokemonName={name} />
    </Layout>
  );
};

export default Detail;
