import { CommentTitleStyled, NoCommentPart, OutputSectionStyled } from "./CommentOutputStyled";
import { VertikalerStrich } from "./CommentsInputStyled";

export default function CommentOutput ({comments}) {
    if (!comments || comments.length === 0) {
    return <NoCommentPart>No Comments yet.</NoCommentPart>;
}

return(
    <>
    <VertikalerStrich></VertikalerStrich>
    <CommentTitleStyled>Comments ({comments.length})</CommentTitleStyled>
    {comments.map((comment) => (
        <OutputSectionStyled key={comment.id}>
            <p>{comment.text}</p>
            <p>{comment.time}</p>
        </OutputSectionStyled>
    ))}
    </>
)}