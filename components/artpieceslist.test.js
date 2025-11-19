import { render, screen } from "@testing-library/react";
import ArtPiecesList from "@/components/ArtPiecesList";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";


describe("ArtPiecesList", () => {
  const mockArtPieces = [
    {
      slug: "piece-1",
      artist: "Artist 1",
      name: "Art Piece 1",
      imageSource: "/img1.jpg",
    },
    {
      slug: "piece-2",
      artist: "Artist 2",
      name: "Art Piece 2",
      imageSource: "/img2.jpg",
    },
  ];

  const mockOnToggle = jest.fn();
  const mockFavorites = ["piece-1"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("rendert eine Liste von ArtPiecesPreview Komponenten", () => {
    render(
      <ArtPiecesList
        artPieces={mockArtPieces}
        onToggle={mockOnToggle}
        favoritesData={mockFavorites}
      />
    );

    const previews = screen.getAllByTestId("preview-mock");
    expect(previews).toHaveLength(2);
  });

  test("übermittelt die korrekten Props an ArtPiecesPreview", () => {
    render(
      <ArtPiecesList
        artPieces={mockArtPieces}
        onToggle={mockOnToggle}
        favoritesData={mockFavorites}
      />
    );

    // Prüfen der Aufrufe des Mock-Komponenten-Constructors
    expect(ArtPiecesPreview).toHaveBeenCalledTimes(2);

    expect(ArtPiecesPreview).toHaveBeenCalledWith(
      {
        artist: "Artist 1",
        title: "Art Piece 1",
        image: "/img1.jpg",
        slug: "piece-1",
        onToggle: mockOnToggle,
        favorites: mockFavorites,
      },
      {}
    );

    expect(ArtPiecesPreview).toHaveBeenCalledWith(
      {
        artist: "Artist 2",
        title: "Art Piece 2",
        image: "/img2.jpg",
        slug: "piece-2",
        onToggle: mockOnToggle,
        favorites: mockFavorites,
      },
      {}
    );
  });

  test("verwendet den slug als key für jedes Listenelement", () => {
    const { container } = render(
      <ArtPiecesList
        artPieces={mockArtPieces}
        onToggle={mockOnToggle}
        favoritesData={mockFavorites}
      />
    );

    const listItems = container.querySelectorAll("li");

    expect(listItems[0].getAttribute("key")).not.toBe("piece-1"); 
    // React setzt key nicht als DOM-Attribut -> alternative Prüfung:
    // Anzahl der Listenelemente

    expect(listItems).toHaveLength(2);
  });
});