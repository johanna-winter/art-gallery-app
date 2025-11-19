import Image from "next/image";
import Link from "next/link";
import { ContainerFavoriteButtonStyled, PreviewImageContainer, PreviewInformationStyled, PreviewPageWrapper, PreviewStyledImage } from "../Preview/PreviewStyled";
import { VertikalerStrich } from "../Comments/CommentsInputStyled";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { FavoriteButtonContainer } from "../FavoriteButton/FavoriteButtonStyled";

export default function ArtPiecesPreview({
  artist,
  title,
  image,
  slug,
  favorites = [],
  onToggle,
}) {
  const isFavorite = favorites.includes(slug);

  return (
    <>
      <PreviewPageWrapper>
       <PreviewImageContainer>
        <Link href={`/art-pieces/${slug}`}>
        <PreviewStyledImage 
        src={image} 
        alt={title} 
        width={300} 
        height={300} ></PreviewStyledImage>
      </Link>
      <ContainerFavoriteButtonStyled>
      <FavoriteButton
        slug={slug}
        onToggle={() => onToggle(slug)}
        isFavorite={isFavorite}/>
        </ContainerFavoriteButtonStyled> 
        </PreviewImageContainer>
       </PreviewPageWrapper>
      <PreviewInformationStyled>
      <h4>{title}</h4>
      <p>{artist}</p>
      </PreviewInformationStyled>
      
          <VertikalerStrich/>
    </>
  );
}
