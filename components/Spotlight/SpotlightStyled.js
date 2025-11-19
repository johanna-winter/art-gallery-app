import styled from "styled-components";
import Image from "next/image";


export const SpotlightHeader = styled.div`
display:flex;
justify-content: center;
font-size:2rem;
 font-family: italic;
`;

export const SpotlightHeaderTitle = styled.h1``;

export const SpotlightPageWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom:5rem;
`;

export const SpotlightStyledImage = styled(Image)`
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
 
  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.9);
    transform: translateY(-4px);
  }
`;

export const SpotlightImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SpotlightInformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto 2rem auto;
  font-style: italic;
  opacity: 0.6;
  max-width: 55rem;
  border: 2px solid #b3b3b3ff;
  border-radius: 15px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;
export const SpotlightFavoriteButtonStyled = styled.div`
  position:relative;
  top: 5px;
  left: -50px;
`;

export const SpotlightInfoBox = styled.div`
  text-align: center;
  border:2px solid #b3b3b3ff;
  border-radius:15px;
  font-size:1rem;
  font-style: italic;
  line-height:1rem;
  box-shadow:0 2px 3px rgba(0, 0, 0, 0.49);
`;
export const SpotlightPaintingTitle = styled.h2`
font-size:1.25rem;
line-height:1rem;
`;