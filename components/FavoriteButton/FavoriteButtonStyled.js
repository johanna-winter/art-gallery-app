import styled from "styled-components";

export const FavoriteButtonStyled = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background: white;
  color: black;
  opacity:0.6;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position:absolute;
  top:5px;
  right:220px;
  z-index:10;

  &:hover {
    opacity: 0.7;
  }
`;