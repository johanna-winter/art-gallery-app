import { render, screen } from "@testing-library/react";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";

test("renders title, artist and image", () => {
  render(
    <ArtPiecesPreview
      artist="Claude Monet"
      title="Water Lilies"
      image="/water.jpg"
    />
  );

  // Title
  expect(screen.getByText("Water Lilies")).toBeInTheDocument();

  // Artist
  expect(screen.getByText("Claude Monet")).toBeInTheDocument();

  // Image
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Water Lilies");
});

/* 
  - Der Test testet, ob Bild, Künstlernamen und Titel richtig dargestellt werden.
  - Mit render() wird die Komponente als virtuellen DOM dargestellt.
  OHNE render() würden die screen.getBy-Aufrufe fehlschlagen.
  - Props werden übergeben.
  - Mit screen.getByText wird nach dem genannten Textknoten gesucht.
  - Mit .toBeInTheDocument(), wird bestätigt ob der Test funktioniert hat. 
  Er zeigt also das an, was er gefunden hat, und der Test hat funktioniert.
  */
