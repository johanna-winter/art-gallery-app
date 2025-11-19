import styled from "styled-components";



export const FavoriteButtonStyled = styled.button`
  position: absolute;
  z-index: 10;
  padding: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: red;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity:0.7;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const ContainerFavoriteButtonStyled = styled.div`
  
  top: px;
  left: px;
`;
