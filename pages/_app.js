import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navigation from "@/components/Link";
import { useState } from "react";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [favoritesData, setFavoritesData] = useState([]);

  function handleFavoriteToggle(slug) {
    setFavoritesData((prev) =>
      prev.includes(slug) ? prev.filter((fav) => fav !== slug) : [...prev, slug]
    );
  }

  console.log("App Log: ", artPieces);

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return null;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favoritesData={favoritesData}
        onToggle={handleFavoriteToggle}
      />
      <Navigation />
    </SWRConfig>
  );
}
