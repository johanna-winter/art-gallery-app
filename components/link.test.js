import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";

describe("Navigation Component", () => {
  test("rendert alle Navigationslinks", () => {
    render(<Navigation />);

    // Prüfe, ob beide Links angezeigt werden
    expect(screen.getByText("Galerie")).toBeInTheDocument();
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
  });

  test("überprüft, dass Links die korrekten hrefs haben", () => {
    render(<Navigation />);

    const galerieLink = screen.getByText("Galerie");
    expect(galerieLink).toHaveAttribute("href", "/art-pieces");

    const spotlightLink = screen.getByText("Spotlight");
    expect(spotlightLink).toHaveAttribute("href", "/");
  });

  test("zeigt die korrekte Anzahl an Links", () => {
    render(<Navigation />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });
});
