import Image from "next/image";
import useSWR from "swr";

export default function ArtPieces() {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  console.log("Art Pieces Log: ", artPieces);

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <ul>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <h4>{artPiece.name}</h4>
          <p>{artPiece.artist}</p>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={300}
          ></Image>
        </li>
      ))}
      {/* <li>Art piece</li> */}
    </ul>
  );
}
