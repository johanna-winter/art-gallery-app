/* import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetail from "@/components/ArtPieceDetail";
import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";


describe("ArtPieceDetail Component", () => {
  const mockArtPieces = [
    {
      slug: "mona-lisa",
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
      genre: "Renaissance",
      imageSource: "/mona.png",
      colors: ["red", "blue"],
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });



test("zeigt Loading, wenn Daten noch geladen werden", () => {
    useRouter.mockReturnValue({ query: { slug: "mona-lisa" }, isReady: true });
    useSWR.mockReturnValue({ data: null, error: null, isLoading: true });

    render(<ArtPieceDetail />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });




test("zeigt Fehler, wenn API fehlschlägt", () => {
    useRouter.mockReturnValue({ query: { slug: "mona-lisa" }, isReady: true });
    useSWR.mockReturnValue({ data: null, error: true });

    render(<ArtPieceDetail />);
    expect(screen.getByText("Failed to load")).toBeInTheDocument();
  });




test("zeigt Hinweis, wenn ArtPiece nicht gefunden wird", () => {
    useRouter.mockReturnValue({ query: { slug: "unknown" }, isReady: true });
    useSWR.mockReturnValue({ data: mockArtPieces, error: null, isLoading: false });

    render(<ArtPieceDetail />);
    expect(screen.getByText("Art piece not found")).toBeInTheDocument();
  });




test("zeigt ArtPiece Details korrekt an", () => {
    useRouter.mockReturnValue({ query: { slug: "mona-lisa" }, isReady: true });
    useSWR.mockReturnValue({ data: mockArtPieces, error: null, isLoading: false });

    render(<ArtPieceDetail />);

    expect(screen.getByText("Mona Lisa")).toBeInTheDocument();
    expect(screen.getByText("Leonardo da Vinci")).toBeInTheDocument();
    expect(screen.getByText("1503, Renaissance")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/mona.png");
    expect(img).toHaveAttribute("alt", "Painted by Leonardo da Vinci");

    // ColorPalette wird gerendert
    expect(screen.getByTestId("color-palette")).toHaveTextContent("red,blue");
  });




test("kommentare werden korrekt hinzugefügt", () => {
    useRouter.mockReturnValue({ query: { slug: "mona-lisa" }, isReady: true });
    useSWR.mockReturnValue({ data: mockArtPieces, error: null, isLoading: false });

    render(<ArtPieceDetail />);

    const addCommentButton = screen.getByText("Add Comment");
    fireEvent.click(addCommentButton);

    expect(screen.getByTestId("comment-output")).toHaveTextContent("Test Comment");
  });





test("zeigt Back Button", () => {
    useRouter.mockReturnValue({ query: { slug: "mona-lisa" }, isReady: true });
    useSWR.mockReturnValue({ data: mockArtPieces, error: null, isLoading: false });

    render(<ArtPieceDetail />);
    const backButton = screen.getByText("Back");
    expect(backButton).toBeInTheDocument();
    expect(backButton.tagName).toBe("BUTTON");
  });
}); */