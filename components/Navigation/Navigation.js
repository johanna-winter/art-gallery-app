import { Nav, NavLink, NavList, NavListItem } from "./Navigation.styled";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink href="/" $highlighted={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            href="/art-pieces"
            $highlighted={router.pathname === "/art-pieces"}
          >
            Gallery
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            href="/favorites"
            $highlighted={router.pathname === "/favorites"}
          >
            Favorites
          </NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}
