import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";
import FavoriteButton from "@/components/FavoriteButton";


describe("ArtPiecesPreview", () => {
  const mockProps = {
    artist: "Picasso",
    title: "Blue Period",
    image: "/test.jpg",
    slug: "blue-period",
    favorites: [],
    onToggle: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("rendert Titel und Artist", () => {
    render(<ArtPiecesPreview {...mockProps} />);

    expect(screen.getByText("Blue Period")).toBeInTheDocument();
    expect(screen.getByText("Picasso")).toBeInTheDocument();
  });

  test("rendert ein Bild mit korrekten Props", () => {
    render(<ArtPiecesPreview {...mockProps} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/test.jpg");
    expect(img).toHaveAttribute("alt", "Blue Period");
  });

  test("verlinkt korrekt zur Detailseite", () => {
    render(<ArtPiecesPreview {...mockProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/art-pieces/blue-period");
  });

  test("setzt isFavorite korrekt auf false, wenn slug nicht in favorites ist", () => {
    render(<ArtPiecesPreview {...mockProps} />);

    expect(FavoriteButton).toHaveBeenCalledWith(
      expect.objectContaining({
        slug: "blue-period",
        isFavorite: false,
      }),
      {}
    );
  });

  test("setzt isFavorite korrekt auf true, wenn slug in favorites enthalten ist", () => {
    render(
      <ArtPiecesPreview
        {...mockProps}
        favorites={["blue-period"]}
      />
    );

    expect(FavoriteButton).toHaveBeenCalledWith(
      expect.objectContaining({
        slug: "blue-period",
        isFavorite: true,
      }),
      {}
    );
  });

  test("ruft onToggle mit slug auf, wenn der FavoriteButton geklickt wird", () => {
    render(<ArtPiecesPreview {...mockProps} />);

    const button = screen.getByTestId("favorite-button");
    fireEvent.click(button);

    expect(mockProps.onToggle).toHaveBeenCalledWith("blue-period");
  });
});