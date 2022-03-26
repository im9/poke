import React, { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  padding: 0 25px;
  height: calc((80 / 1280) * 100vw);
  max-height: 80px;
`;

const Container = styled.div`
  margin: 0;
`;

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Pokemon Zukan" }: Props) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <h1>Pokemon Zukan</h1>
    </Header>
    {children}
    <footer>
      <hr />
      <span>Pokemon Zukan</span>
    </footer>
  </Container>
);

export default Layout;
