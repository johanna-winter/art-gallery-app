import ArtPiecesPreview from "@/components/ArtPiecesPreview";

export default function ArtPiecesList({ artPieces, onToggle, favoritesData }) {
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecesPreview
            artist={artPiece.artist}
            title={artPiece.name}
            image={artPiece.imageSource}
            slug={artPiece.slug}
            onToggle={onToggle}
            favorites={favoritesData}
          />
        </li>
      ))}
    </ul>
  );
}
