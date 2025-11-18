import ArtPiecesList from "@/components/ArtPiecesList";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";

export default function ArtPieces({ artPieces }) {
  return (
    <>
      <ArtPiecesList artPieces={artPieces} />
    </>
  );
}
