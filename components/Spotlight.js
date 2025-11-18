import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ artPieces, favoritesData, onToggle }) {
  if (!artPieces || artPieces.length === 0) return null;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomArtPiece = getRandomElement(artPieces);

  const slug = randomArtPiece.slug;
  const isFavorite = favoritesData.includes(slug);

  return (
    <>
      <h1>Art Gallery</h1>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        width={400}
        height={500}
        priority={true}
      ></Image>
      <FavoriteButton
        slug={slug}
        onToggle={() => onToggle(slug)}
        isFavorite={isFavorite}
      />
      <h3>{randomArtPiece.artist}</h3>
      <p>
        <i>&quot;{randomArtPiece.name}&quot;</i>
      </p>
    </>
  );
}
