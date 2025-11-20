import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";
import { VertikalerStrich } from "../Comments/CommentsInputStyled";
import {
  PreviewContainerUL,
  PreviewImageContainer,
  PreviewInformationStyled,
  PreviewPageWrapper,
  PreviewPaintingTitle,
  PreviewStyledImage,
} from "../Preview/PreviewStyled";
import Link from "next/link";


export default function ArtPiecesList({ artPieces, onToggle, favoritesData }) {
  return (
    <PreviewContainerUL>
      {artPieces.map((artPiece) => (
        <PreviewPageWrapper key={artPiece.slug}>
          <ArtPiecesPreview
            artist={artPiece.artist}
            title={artPiece.name}
            image={artPiece.imageSource}
            slug={artPiece.slug}
            onToggle={onToggle}
            favorites={favoritesData}
          />
        </PreviewPageWrapper>
      ))}
    </PreviewContainerUL>
  );
}
