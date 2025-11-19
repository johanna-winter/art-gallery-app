import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";
import { PreviewPageWrapper } from "@/components/Preview/PreviewStyled";

export default function FavoritesList({ onToggle, artPieces, favoritesData }) {
  const favoriteArtPiecesList = artPieces.filter((artpiece) =>
    favoritesData.includes(artpiece.slug)
  );

  return (
    <>
      <ul>
        {favoriteArtPiecesList.map((artpiece) => {
          return (
            <PreviewPageWrapper key={artpiece.slug}>
              <ArtPiecesPreview
                artist={artpiece.artist}
                title={artpiece.name}
                image={artpiece.imageSource}
                slug={artpiece.slug}
                onToggle={onToggle}
                favorites={favoritesData}
              />
            </PreviewPageWrapper>
          );
        })}
      </ul>
    </>
  );
}
