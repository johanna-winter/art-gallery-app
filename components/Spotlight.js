import Image from "next/image";
import useSWR from "swr";

export default function Spotlight() {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  console.log("Art Pieces Log: ", artPieces);

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return <div>Loading...</div>;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomArtPiece = getRandomElement(artPieces);
  console.log(randomArtPiece);
  return (
    <>
      <h1>Art Gallery</h1>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        width={400}
        height={500}
        priority={true}
      ></Image>
      <h3>{randomArtPiece.artist}</h3>
      <p>
        <i>&quot;{randomArtPiece.name}&quot;</i>
      </p>
    </>
  );
}
