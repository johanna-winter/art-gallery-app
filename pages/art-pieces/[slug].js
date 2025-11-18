import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

import ColorPalette from "@/components/FarbPalette";

import CommentInputForm from "@/components/Comments/CommentsInput";
import CommentOutput from "@/components/Comments/CommentsOutput";
import { useState } from "react";




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

  const { name, imageSource, artist, year, genre, colors } = ArtPiece;    //hier wird destructert




  const { name, imageSource, artist, year, genre } = ArtPiece;

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
      </div>
      <div>
        <ColorPalette colors={colors}   //komponente wird an colors übergeben(von ArtPiece),  über Props Attribut colors={colors}
        />    
        <h2>{name}</h2>
       <br></br>
       <p>{artist}</p>
      </div>
      <div>{year}, {genre}</div>
      <br>
      </br>
      <section>
        <CommentOutput comments={comments}></CommentOutput>
      </section>
      <CommentInputForm onAddComment={handleAddComment}></CommentInputForm>
    </>
  );
}