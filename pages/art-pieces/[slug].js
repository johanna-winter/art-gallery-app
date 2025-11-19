import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import FavoriteButton from "@/components/FavoriteButton";
import CommentInputForm from "@/components/Comments/CommentsInput";
import CommentOutput from "@/components/Comments/CommentsOutput";
import ColorPalette from "@/components/ColorPalette";
import useLocalStorageState from "use-local-storage-state";

export default function ArtPieceDetail({ onToggle, favoritesData }) {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  const handleAddComment = (newComment) => {
    console.log("Received Comment ID:", newComment.id);
    setComments([...comments, newComment]);
  };

  if (!router.isReady) {
    return null;
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!artPieces) return <div>No data available</div>;

  const ArtPiece = artPieces.find((ArtPiece) => ArtPiece.slug === slug);

  if (!ArtPiece) {
    return <div>Art piece not found</div>;
  }

  const isFavorite = favoritesData.includes(ArtPiece.slug);

  const { name, imageSource, artist, year, genre, colors } = ArtPiece;

  return (
    <>
      <Link href="/art-pieces">
        <button>Back</button>
      </Link>
      <div>
        <Image
          src={imageSource}
          alt={`Painted by ${artist}`}
          width={300}
          height={300}
        />
        <FavoriteButton
          slug={slug}
          onToggle={() => onToggle(slug)}
          isFavorite={isFavorite}
        />
      </div>
      <div>
        <ColorPalette colors={colors} />
        <h2>{name}</h2>
        <br></br>
        <p>{artist}</p>
      </div>
      <div>
        {year}, {genre}
      </div>
      <div>
        {year}, {genre}
      </div>
      <br></br>
      <section>
        <CommentOutput comments={comments}></CommentOutput>
      </section>
      <CommentInputForm onAddComment={handleAddComment}></CommentInputForm>
    </>
  );
}
