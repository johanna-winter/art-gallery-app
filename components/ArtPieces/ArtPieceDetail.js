import { useRouter } from "next/router";
import Link from "next/link";

import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import CommentInputForm from "@/components/Comments/CommentsInput";
import CommentOutput from "@/components/Comments/CommentsOutput";
import ColorPalette from "@/components/ColorPalette/ColorPalette";
import {
  InfoBox,

  PageWrapper,
  StyledImage,
  ImageContainer,
  InformationStyled,
  PaintingTitle,
  DetailContainerFavoriteButtonStyled,
} from "@/components/ArtPieces/Layout/Layout.Styled";
import { BackButton } from "@/components/Button/StyledButtons";
import { VertikalerStrich } from "@/components/Comments/CommentsInputStyled";
import useLocalStorageState from "use-local-storage-state";

export default function ArtPieceDetail({ onToggle, favoritesData, artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  // const {
  //   data: artPieces,
  //   error,
  //   isLoading,
  // } = useSWR("https://example-apis.vercel.app/api/art");

  const handleAddComment = (newComment) => {
    console.log("Received Comment ID:", newComment.id);
    setComments([...comments, newComment]);
  };

  if (!router.isReady) {
    return null;
  }

  // if (error) return <div>Failed to load</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (!artPieces) return <div>No data available</div>;

  const ArtPiece = artPieces.find((ArtPiece) => ArtPiece.slug === slug);

  if (!ArtPiece) {
    return <div>Art piece not found</div>;
  }

  const isFavorite = favoritesData.includes(ArtPiece.slug);

  const { name, imageSource, artist, year, genre, colors } = ArtPiece;

  
  const filteredComments = comments.filter(comment => comment.slug === slug);

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
          <DetailContainerFavoriteButtonStyled>
            <FavoriteButton
          slug={slug}
          onToggle={() => onToggle(slug)}
          isFavorite={isFavorite}
        />
          </DetailContainerFavoriteButtonStyled>
        </ImageContainer>
        <ColorPalette colors={colors} />
        <InfoBox>
          <PaintingTitle>{name}</PaintingTitle>
          <p>by</p>
          <p>{artist}</p>
        </InfoBox>
        <InformationStyled>
          <div>
            {year}, {genre}
          </div>
        </InformationStyled>
        <VertikalerStrich />
        <section>
          <CommentOutput comments={filteredComments}></CommentOutput>
        </section>
        <CommentInputForm onAddComment={handleAddComment} slug={slug}></CommentInputForm>
      </PageWrapper>
      <br />
    </>
  );
}
