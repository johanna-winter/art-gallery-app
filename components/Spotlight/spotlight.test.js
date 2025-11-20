import Spotlight from "./Spotlight";
import { render, screen } from "@testing-library/react";

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

test("renders image, artist and title of a random art piece", async () => {
  render(
    <Spotlight
      artPieces={mockArtPieces}
      favoritesData={[]}
      onToggle={() => {}}
    />
  );

  // Spotlight first returns null → we wait for it first
  const image = await screen.findByRole("img");
  expect(image).toBeInTheDocument();

  // Artist A OR Artist B must appear
  expect(screen.getByText(/Artist A|Artist B/)).toBeInTheDocument();

  // Title 1 OR Title 2 must appear
  expect(screen.getByText(/Test One|Test Two/)).toBeInTheDocument();
});

/* 
  - Der Test testet, ob die gerenderte componente ein Bild, Künstlernamen und Titel anzeigt.
  - Mit render() wird die Spotlight Komponente dargestellt, als seie sie im Browser sichtbar.
  - Props werden übergeben: artPieces={mockArtPieces}, favoritesData={[]}, onToggle={() => {}}.
  - Mit screen.getByRole/Text wird gesucht ob das jeweilige Element was nachstehend in klammern steht,
  auch gefunden wird.
  - Spotlight sucht sich einen Artist random aus, uns ist egal welcher - solange die richtigen Daten angezeigt werden.
  - Wenn Ja, läuft der Test weiter und prüft das selbe mit dem Künstlernamen und Titel.
  - Mit .toBeInTheDocument(), wird bestätigt ob der Test funktioniert hat. Er zeigt also das an, was er gefunden hat.
  */
