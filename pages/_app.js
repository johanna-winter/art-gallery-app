import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Link";
import { useState } from "react";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps, data: artPieces }) {
  const [favorites, setFavorites] = useState(artPieces);

  function toggleFavorite(slug) {
    setFavorites(
      favorites.find((artPieces) => artPieces.slug === favorites.slug)
    );
  }

  console.log("App Log: ", artPieces);

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </SWRConfig>
  );
}
