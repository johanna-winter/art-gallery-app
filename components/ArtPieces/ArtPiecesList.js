import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";
import {
  PreviewContainerUL,
  PreviewImageContainer,
  PreviewInformationStyled,
  PreviewPageWrapper,
  PreviewPaintingTitle,
  PreviewStyledImage,
} from "./Layout/PreviewStyled";
import Link from "next/link";

export default function ArtPiecesList({ artPieces, onToggle, favoritesData }) {
  return (
    <PreviewContainerUL>
      {artPieces.map((artPiece) => (
        <ArtPiecesPreview
          key={artPiece.slug}
          artist={artPiece.artist}
          title={artPiece.name}
          image={artPiece.imageSource}
          slug={artPiece.slug}
          onToggle={onToggle}
          favorites={favoritesData}
        />
      ))}
    </PreviewContainerUL>
  );
}
