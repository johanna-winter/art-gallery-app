import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

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
      <h4>{title}</h4>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={300} height={300}></Image>
      </Link>
      <FavoriteButton
        slug={slug}
        onToggle={() => onToggle(slug)}
        isFavorite={isFavorite}
      />
    </>
  );
}
