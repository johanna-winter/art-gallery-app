import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #d3d3d3;
  color: #333;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  height: 60px;
  @media (min-width: 768px) {
    height: 80px;
  }
  border-top: solid 1px #333;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #333;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #0d0d0d;
  font-weight: bold;
  padding: 12px 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.$highlighted ? "#a9a9a9" : "#d3d3d3")};
  &:hover {
    background-color: #a9a9a9;
  }
`;
