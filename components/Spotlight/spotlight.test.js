import Spotlight from "./Spotlight";
import { render, screen } from "@testing-library/react";

test("renders image, artist and title of a random art piece", () => {
  render(<Spotlight artPieces={mockArtPieces} />);

  // Image
  expect(screen.getByRole("img")).toBeInTheDocument();

  // Artist
  expect(screen.getByText("Vincent van Gogh")).toBeInTheDocument();

  // Title
  expect(screen.getByText(/Starry Night/i)).toBeInTheDocument();
});

/* 
  - Der Test testet, ob die gerenderte componente ein Bild, Künstlernamen und Titel anzeigt.
  - Mit render() wird die Spotlight Komponente dargestellt, als seie sie im Browser sichtbar.
  - Prop wird übergeben: artPieces={mockArtPieces}.
  - Mit screen.getByRole/Text wird gesucht ob das jeweilige Element was nachstehend in klammern steht,
  auch gefunden wird.
  - Wenn Ja, läuft der Test weiter und prüft das selbe mit dem Künstlernamen und Titel.
  - Mit .toBeInTheDocument(), wird bestätigt ob der Test funktioniert hat. Er zeigt also das an, was er gefunden hat.
  */
