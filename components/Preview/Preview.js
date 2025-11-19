import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import { PreviewImageContainer, PreviewInformationStyled, PreviewPageWrapper, PreviewPaintingTitle, PreviewStyledImage } from "./PreviewStyled";
import { VertikalerStrich } from "../Comments/CommentsInputStyled";

export default function Preview() {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  console.log("Art Pieces Log: ", artPieces);

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <>
    <VertikalerStrich/>
      {artPieces.map((artPiece) => (
        <PreviewPageWrapper key={artPiece.slug}>
          <Link href={`/art-pieces/${artPiece.slug}`}>
          <PreviewImageContainer>
            <PreviewStyledImage
              src={artPiece.imageSource}
              alt={artPiece.name}
              width={300}
              height={300}
            ></PreviewStyledImage>
            </PreviewImageContainer>
          </Link>
          <PreviewInformationStyled>
           <PreviewPaintingTitle>{artPiece.name}</PreviewPaintingTitle>
           <p>by</p>
          <p>{artPiece.artist}</p>
          </PreviewInformationStyled>
          <VertikalerStrich/>
        </PreviewPageWrapper>
      ))}
    </>
  );
}
