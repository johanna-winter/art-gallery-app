import Image from "next/image";
import Link from "next/link";
import { PreviewImageContainer, PreviewInformationStyled, PreviewStyledImage } from "../Preview/PreviewStyled";
import { VertikalerStrich } from "../Comments/CommentsInputStyled";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
      <PreviewImageContainer>
        <FavoriteButton
        slug={slug}
        onToggle={() => onToggle(slug)}
        isFavorite={isFavorite}/>
        <Link href={`/art-pieces/${slug}`}>
        <PreviewStyledImage 
        src={image} 
        alt={title} 
        width={300} 
        height={300} ></PreviewStyledImage>
      </Link>
       </PreviewImageContainer>
      <PreviewInformationStyled>
      <h4>{title}</h4>
      <p>{artist}</p>
      </PreviewInformationStyled>
      
          <VertikalerStrich/>
    </>
  );
}
