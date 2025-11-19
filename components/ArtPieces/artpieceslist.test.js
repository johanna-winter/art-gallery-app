import { render, screen } from "@testing-library/react";
import ArtPiecesList from "@/components/ArtPieces/ArtPiecesList";

test("renders a list of ArtPiecesPreview components", () => {
  render(<ArtPiecesList artPieces={mockArtPieces} />);

  // Prüfe, ob die ul vorhanden ist
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  // Prüfe, ob alle li gerendert wurden
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(mockArtPieces.length);
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
  - testet, ob für jedes ArtPiece ein ListItem gerendert wird.*/
