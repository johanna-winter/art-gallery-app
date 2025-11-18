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
    // Check if this art piece already exist in favorites data
    const favorite = favoritesData.find((fav) => fav.slug === slug);
    // If it already exists, update isFavorite status by toggling
    if (favorite) {
      setFavoritesData(
        favoritesData.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      // If it doesn't exist yet, add new entry with slug and isFavorite: true
      setFavoritesData([...favoritesData, { slug, isFavorite: true }]);
    }
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
