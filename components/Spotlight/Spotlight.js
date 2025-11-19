import Image from "next/image";
import useSWR from "swr";
import {
  SpotlightFavoriteButtonStyled,
  SpotlightHeader,
  SpotlightImageContainer,
  SpotlightInfoBox,
  SpotlightInformationStyled,
  SpotlightPageWrapper,
  SpotlightStyledImage,
} from "./SpotlightStyled";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useEffect, useState } from "react";
import { ContainerFavoriteButtonStyled, FavoriteButtonStyled } from "../FavoriteButton/FavoriteButtonStyled";

export default function Spotlight({ artPieces, favoritesData, onToggle }) {
  //local state for randomArtPiece to not re-render everytime we use the favorites toggle
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  useEffect(() => {
    if (artPieces?.length > 0) {
      setRandomArtPiece(
        artPieces[Math.floor(Math.random() * artPieces.length)]
      );
    }
  }, [artPieces]);

  if (!randomArtPiece || artPieces.length === 0) return null;

  // const randomArtPiece = getRandomElement(artPieces);
  // function getRandomElement(array) {
  //   return array[Math.floor(Math.random() * array.length)];
  // }

  const slug = randomArtPiece.slug;
  const isFavorite = favoritesData.includes(slug);

  return (
    <>
      <SpotlightHeader>
        <h1>Art Gallery</h1>
      </SpotlightHeader>
      <SpotlightPageWrapper>
        <SpotlightImageContainer>
          <SpotlightStyledImage
            src={randomArtPiece.imageSource}
            alt={randomArtPiece.name}
            width={400}
            height={500}
            priority={true}
          ></SpotlightStyledImage>
       
       <SpotlightFavoriteButtonStyled>
          <FavoriteButton
            slug={slug}
            onToggle={() => onToggle(slug)}
            isFavorite={isFavorite}
          />
           </SpotlightFavoriteButtonStyled>
          </SpotlightImageContainer>
           <SpotlightInfoBox>
          <h3>{randomArtPiece.artist}</h3>
          <p>
            <i>&quot;{randomArtPiece.name}&quot;</i>
          </p>
        </SpotlightInfoBox>
      </SpotlightPageWrapper>
    </>
  );
}
