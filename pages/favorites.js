import FavoriteButton from "@/components/FavoriteButton";
import Preview from "@/components/Preview";
import Image from "next/image";
import ArtPieces from "./art-pieces";

export default function FavoritesList({ onToggle, artPieces, favoritesData }) {
  const onlyFavoriteArtPieces = favoritesData.filter(
    (favorite) => favorite.isFavorite === true
  );
  const favoriteSlugs = onlyFavoriteArtPieces.map((fav) => fav.slug);

  const favoriteArtPiecesList = artPieces.filter((artpiece) =>
    favoriteSlugs.includes(artpiece.slug)
  );
  return (
    <>
      <FavoriteButton />
      <ArtPieces onToggle={onToggle} favorites={favoriteArtPiecesList} />
      {/* {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <h4>{artPiece.name}</h4>
          <p>{artPiece.artist}</p>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={300}
          ></Image>
        </li>
      ))} */}
    </>
  );
  // <FavoriteButton onToggle={onToggle} />;
}
