import styled from "styled-components";

export const PaletteWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border:2px solid #cfc8c8ff;
  border-radius:15px;

`;

export const ColorDot = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: ${({ color }) => color};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;