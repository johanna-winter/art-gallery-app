import FavoriteButton from "@/components/FavoriteButton";
import ArtPieces from "./art-pieces";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";

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
      <ul>
        {favoriteArtPiecesList.map((artpiece) => {
          return (
            <li key={artpiece.slug}>
              <ArtPiecesPreview
                artist={artpiece.artist}
                title={artpiece.name}
                image={artpiece.image}
                slug={artpiece.slug}
                onToggle={onToggle}
                favorites={favoritesData}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
