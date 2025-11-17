import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPiece({ fetcher }) {
  const { data: artPieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log("Art Pieces Log: ", artPieces);

  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);

  //   const currentArtPiece = artPieces.find((artpiece) => artpiece.slug === artPieces.slug);

  return (
    <ul>
      <li>Art piece</li>
    </ul>
  );
}
