import Link from "next/link";
import { Nav, NavLink, NavList, NavListItem } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink href="/">Spotlight</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/art-pieces">Galerie</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/favorites">Favorites</NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}
