import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation/Navigation";



test("renders all navigation links", () => {
  render(<Navigation />);

  // Prüfe, ob alle Links vorhanden sind
  expect(screen.getByText("Spotlight")).toBeInTheDocument();
  expect(screen.getByText("Gallery")).toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});



/* 
- Wir testen ob die Links verfügbar sind/ ob die verlinkung richtig klappt.
- navigation wird virtuell als DOM aufgebaut.
- Mit render() wird die Komponente als virtuellen DOM dargestellt.
  OHNE render() würden die screen.getBy-Aufrufe fehlschlagen.
- Mit screen.getByText wird nach dem genannten Textknoten gesucht.
- Mit .toBeInTheDocument(), wird bestätigt ob der Test funktioniert hat.
*/