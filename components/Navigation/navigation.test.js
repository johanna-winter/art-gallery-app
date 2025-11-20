import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/", // returning the "current" page
    };
  },
}));

test("renders all navigation links", () => {
  render(<Navigation />);

  // Prüfe, ob alle Links vorhanden sind
  expect(screen.getByText("Spotlight")).toHaveAttribute("href", "/");
  expect(screen.getByText("Gallery")).toHaveAttribute("href", "/art-pieces");
  expect(screen.getByText("Favorites")).toHaveAttribute("href", "/favorites");
});

// Prüfe, die korrekte Anzahl der Links
test("shows the correct number of navigation links", () => {
  render(<Navigation />);

  const links = screen.getAllByRole("link");

  expect(links.length).toBe(3);
});

/* 
- In diesem Test überprüfen wir, ob die Navigationslinks korrekt gerendert werden 
  und ob sie die richtigen href-Attribute besitzen.
- Da die Navigation useRouter() von Next.js verwendet, müssen wir den Router im Test mocken.
  Ohne diesen Mock würde die Komponente im Testumfeld nicht funktionieren.
- Mit render() wird die Navigation als virtueller DOM aufgebaut.
  OHNE render() würden die screen.getBy-Aufrufe fehlschlagen.
- Mit screen.getByText wird nach dem genannten Textknoten gesucht.
- Mit toHaveAttribute ("href", "...") prüfen wir, ob die Links tatsächlich auf die richtigen Seiten verweisen.
- Zusätzlich testen wir, ob genau drei Links vorhanden sind, indem wir screen.getAllByRole("link") verwenden
  und die Anzahl vergleichen.
*/
