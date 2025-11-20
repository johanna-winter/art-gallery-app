import ArtPieceDetail from "@/components/ArtPieces/ArtPieceDetail";

export default function ArtPieceDetailPage({onToggle, favoritesData, artPieces}){
  return ( 
    <ArtPieceDetail 
    onToggle={onToggle}
    favoritesData={favoritesData}
    artPieces={artPieces}>
</ArtPieceDetail>
  )
}