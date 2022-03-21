import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { SearchResultField } from "../components/SearchResultField";

const IndexPage = () => {
  const [pokemonName, setpokemonName] = useState("");

  useEffect(() => {
    // add a listener to 'message' channel
    global.ipcRenderer.addListener("message", (_event, args) => {
      alert(args);
    });
  }, []);

  const onSayHiClick = () => {
    global.ipcRenderer.send("message", "hi from next");
  };

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/list">
          <a>List</a>
        </Link>
        <SearchForm setpokemonName={setpokemonName}></SearchForm>
        <SearchResultField pokemonName={pokemonName} />
      </p>
    </Layout>
  );
};

export default IndexPage;
