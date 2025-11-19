import styled from "styled-components";
import Image from "next/image";



export const InfoBox = styled.div`
  text-align: center;
  border:2px solid #b3b3b3ff;
  border-radius:15px;
  font-size:1rem;
  font-style: italic;
  line-height:1rem;
  box-shadow:0 2px 3px rgba(0, 0, 0, 0.49);
`;
export const PreviewPaintingTitle = styled.h2`
font-size:1.25rem;
line-height:1rem;
`;

export const PreviewPageWrapper = styled.li`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  list-style-type:none;
  `;


export const PreviewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const PreviewStyledImage = styled(Image)`
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
 
  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.9);
    transform: translateY(-4px);
  }
`;

export const PreviewInformationStyled = styled.div`
  text-align: center;
  padding:-0.5rem;
  line-height:5px;
  margin-bottom:2rem;
  font-style: italic;
  opacity: 0.6;
   border:2px solid #b3b3b3ff;
  border-radius:15px;
  box-shadow:0 2px 2px rgba(0, 0, 0, 0.2);
  
`;