import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import CommentInputForm from "@/components/Comments/CommentsInput";
import CommentOutput from "@/components/Comments/CommentsOutput";
import { useState } from "react";
import ColorPalette from "@/components/ColorPalette/ColorPalette";
import { InfoBox, StyledPainting, PageWrapper, StyledImage, ImageContainer, InformationStyled, PaintingTitle } from "@/components/Layout/Layout.Styled";
import { BackButton } from "@/components/Button/StyledButtons";
import { VertikalerStrich } from "@/components/Comments/CommentsInputStyled";



export default function ArtPieceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [comments, setComments] = useState([]);

  const { data: artPieces, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

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


  const { name, imageSource, artist, year, genre, colors } = ArtPiece;

  return (
    <>
    <PageWrapper>
    <Link href="/art-pieces">
      <BackButton>Back</BackButton>
    </Link>
    <ImageContainer>
        <StyledImage
          src={imageSource}
          alt={`Painted by ${artist}`} 
          width={300}
          height={300}
        ></StyledImage>
        </ImageContainer>
        
        <ColorPalette colors={colors} />
         <InfoBox>
        <PaintingTitle>{name}</PaintingTitle>
       <p>by</p>
       <p>{artist}</p>
      </InfoBox>
        <InformationStyled>
      <div>{year}, {genre}</div>
      </InformationStyled>
      <VertikalerStrich/>
      <section>
        <CommentOutput comments={comments}></CommentOutput>
      </section>
      <CommentInputForm onAddComment={handleAddComment}></CommentInputForm>
      </PageWrapper>
      <br/>
    </>
  );
}