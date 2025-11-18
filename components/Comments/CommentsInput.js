import { useState } from "react";

export default function CommentInputForm({ onAddComment }) {
function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddComment(data);
    event.target.reset();
}

return(
    <form onSubmit={handleSubmit}>
        <h2>New Comment</h2>
<label htmlFor="comment"></label>
<input type="text" ></input>
    </form>
)

}