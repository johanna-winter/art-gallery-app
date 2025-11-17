import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";


export default function ArtPieceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: artPieces, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (!router.isReady) {
    return null;
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!artPieces) return <div>No data available</div>;

  const ArtPiece = artPieces.find((piece) => piece.slug === slug);
 
  if (!ArtPiece) {
    return <div>Art piece not found</div>;
  }
  const { name, imageSource, artist, year, genre } = ArtPiece;


  return (
    <>
    <Link href="/art-pieces">
      <button>Zurück</button>
    </Link>
      <div>
        <Image
          src={imageSource}
          alt={`Painted by ${artist}`} 
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2>{name}</h2>
       <br></br>
       <p>{artist}</p>
      </div>
      <div>{year}, {genre}</div>
    </>
  );
}