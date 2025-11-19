import ArtPiecesList from "@/components/ArtPieces/ArtPiecesList";

export default function ArtPieces({ artPieces, onToggle, favoritesData }) {
  return (
    <>
      <ArtPiecesList
        artPieces={artPieces}
        onToggle={onToggle}
        favoritesData={favoritesData}
      />
    </>
  );
}
