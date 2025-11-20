import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";
import { PreviewPageWrapper } from "@/components/ArtPieces/Layout/PreviewStyled";
import { SpotlightHeader } from "@/components/Spotlight/SpotlightStyled";

export default function FavoritesList({ onToggle, artPieces, favoritesData }) {
  const favoriteArtPiecesList = artPieces.filter((artpiece) =>
    favoritesData.includes(artpiece.slug)
  );

  if (favoriteArtPiecesList.length === 0) {
    return (
      <SpotlightHeader>
        <strong>Please add some favorite art from the gallery.</strong>
      </SpotlightHeader>
    );
  }

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
