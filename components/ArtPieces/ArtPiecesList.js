import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview";
import { VertikalerStrich } from "../Comments/CommentsInputStyled";
import {
  PreviewImageContainer,
  PreviewInformationStyled,
  PreviewPageWrapper,
  PreviewPaintingTitle,
  PreviewStyledImage,
} from "../Preview/PreviewStyled";
import Link from "next/link";

// export default function ArtPiecesList({ artPieces, onToggle, favoritesData }) {
//   return (
//     <ul>
//       {artPieces.map((artPiece) => (
//         <PreviewPageWrapper key={artPiece.slug}>
//           <ArtPiecesPreview
//             artist={artPiece.artist}
//             title={artPiece.name}
//             image={artPiece.imageSource}
//             slug={artPiece.slug}
//             onToggle={onToggle}
//             favorites={favoritesData}
//             />
//                 {/* <VertikalerStrich/>
//                   {artPieces.map((artPiece) => (
//                     <PreviewPageWrapper key={artPiece.slug}>
//                       <Link href={`/art-pieces/${artPiece.slug}`}>
//                       <PreviewImageContainer>
//                         <PreviewStyledImage
//                           src={artPiece.imageSource}
//                           alt={artPiece.name}
//                           width={300}
//                           height={300}
//                         ></PreviewStyledImage>
//                         </PreviewImageContainer>
//                       </Link>
//                       <PreviewInformationStyled>
//                        <PreviewPaintingTitle>{artPiece.name}</PreviewPaintingTitle>
//                        <p>by</p>
//                       <p>{artPiece.artist}</p>
//                       </PreviewInformationStyled>
//                       <VertikalerStrich/>
//                     </PreviewPageWrapper>
//                   ))}
//                  */}
//               );
//             }
//           />
//         </PreviewPageWrapper>
//       ))}
//     </ul>
//   );
// }

export default function ArtPiecesList({ artPieces, onToggle, favoritesData }) {
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <PreviewPageWrapper key={artPiece.slug}>
          <ArtPiecesPreview
            artist={artPiece.artist}
            title={artPiece.name}
            image={artPiece.imageSource}
            slug={artPiece.slug}
            onToggle={onToggle}
            favorites={favoritesData}
          />

          {/* 
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
                  />
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
          */}
        </PreviewPageWrapper>
      ))}
    </ul>
  );
}
