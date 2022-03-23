import Link from "next/link";
import Layout from "../components/Layout";
import { SearchList } from "../components/SearchList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Text = styled.div`
  color: ${(props) => (props.color ? props.color : "dark")};
`;

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    {/* <h1>About</h1> */}
    <Container>
      <Text color="red">An illustrated Pokemon guide</Text>
    </Container>
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
