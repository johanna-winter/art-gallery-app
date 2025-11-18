import { render, screen } from "@testing-library/react";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";


describe("Spotlight Component", () => {
  const mockArtPieces = [
    {
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      imageSource: "/mona.png",
    },
    {
      name: "Starry Night",
      artist: "Vincent van Gogh",
      imageSource: "/starry.png",
    },
  ];

 beforeEach(() => {
    jest.clearAllMocks();
  });




test("zeigt Loading, wenn Daten noch nicht geladen", () => {
    useSWR.mockReturnValue({ data: null, error: null });

    render(<Spotlight />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });




test("zeigt Fehler, wenn API fehlschlägt", () => {
    useSWR.mockReturnValue({ data: null, error: true });

    render(<Spotlight />);

    expect(screen.getByText("Failed to load")).toBeInTheDocument();
  });




test("zeigt ein zufälliges Kunstwerk, wenn Daten verfügbar sind", () => {
    useSWR.mockReturnValue({ data: mockArtPieces, error: null });

    render(<Spotlight />);

    
    // Wir wissen nicht, welches Kunstwerk random ausgewählt wird
    // Prüfen wir, dass Künstlername und Bild vorhanden sind
    const artistElements = mockArtPieces.map(a => a.artist);
    const nameElements = mockArtPieces.map(a => `"${a.name}"`);

    const artistFound = artistElements.some(artist =>
      screen.queryByText(artist)
    );
    const nameFound = nameElements.some(name =>
      screen.queryByText(name)
    );

    expect(artistFound).toBeTruthy();
    expect(nameFound).toBeTruthy();

// Bild prüfen
    const img = screen.getByRole("img");
    expect(mockArtPieces.map(a => a.imageSource)).toContain(img.getAttribute("src"));
  });




test("zeigt Überschrift 'Art Gallery'", () => {
    useSWR.mockReturnValue({ data: mockArtPieces, error: null });

    render(<Spotlight />);
    expect(screen.getByText("Art Gallery")).toBeInTheDocument();
  });
});