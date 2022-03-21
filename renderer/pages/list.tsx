import Link from "next/link";
import Layout from "../components/Layout";
import { SearchList } from "../components/SearchList";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <SearchList limit={100} />
  </Layout>
);

export default AboutPage;
