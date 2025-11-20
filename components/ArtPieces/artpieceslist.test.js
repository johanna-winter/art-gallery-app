import { render, screen } from "@testing-library/react";
import ArtPiecesList from "@/components/ArtPieces/ArtPiecesList";

const mockArtPieces = [
  {
    artist: "Artist A",
    name: "Test One",
    imageSource: "/mock1.jpg",
    slug: "test-1",
  },
  {
    artist: "Artist B",
    name: "Test Two",
    imageSource: "/mock2.jpg",
    slug: "test-2",
  },
];

test("renders a list of ArtPiecesPreview components", () => {
  render(
    <ArtPiecesList
      artPieces={mockArtPieces}
      onToggle={() => {}}
      favoritesData={[]}
    />
  );

  // Prüfe, ob die ul vorhanden ist
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  // Prüfe, ob alle li gerendert wurden
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(mockArtPieces.length);

  // Prüfe artist names
  expect(screen.getByText("Artist A")).toBeInTheDocument();
  expect(screen.getByText("Artist B")).toBeInTheDocument();

  // Prüfe artwork titles
  expect(screen.getByText("Test One")).toBeInTheDocument();
  expect(screen.getByText("Test Two")).toBeInTheDocument();

  // Prüfe images - 1 Image pro Art Piece + 1 FavoriteButton pro Art Piece = 4 insgesamt
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(2); // Nur 2 Images, da nur 2 Art Pieces

  // Prüfe ob Links vorhanden sind
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(2); // Ein Link pro Art Piece
});
/* 
- Der Test testet, ob ArtPiecesList die Liste korrekt rendert.
- Mit render() wird die Komponente als virtuellen DOM dargestellt.
  OHNE render() würden die screen.getBy-Aufrufe fehlschlagen.
  - Prop wird übergeben.
  - Mit screen.getByRole wird nach nach einem Element mit der genannten Rolle gesucht.
  - Mit .toBeInTheDocument(), wird bestätigt ob der Test funktioniert hat. 
  Er zeigt also das an, was er gefunden hat, und der Test hat funktioniert.
  
  
  Test Nr.2
  - testet, ob für jedes ArtPiece ein ListItem gerendert wird.
  Test Nr.3
  - testet, ob die richtigen Artist Names aus den Mockdaten gerendert werden.
  Test Nr. 4
  - testet, ob die richtigen Artwork Titles aus den Mockdaten gerendert werden.
  Test Nr. 5
  - testet, ob die richtige Anzahl an Images aus den Mockdaten gerendert wird.
  */
