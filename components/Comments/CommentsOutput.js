
export default function CommentOutput ({comments}) {
    if (!comments || comments.length === 0) {
    return <p>No Comments yet.</p>;
}

return(
    <>
    <h2>Comments ({comments.length})</h2>
    {comments.map((comment) => (
        <div key={comment.id}>
            <p>{comment.time}</p>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
)}