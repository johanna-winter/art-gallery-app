import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";

export default function FavoritesList({ onToggle, artPieces, favoritesData }) {
  const favoriteArtPiecesList = artPieces.filter((artpiece) =>
    favoritesData.includes(artpiece.slug)
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
                image={artpiece.imageSource}
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
