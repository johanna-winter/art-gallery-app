import { useState } from "react";
import Button from "../Button";

export default function CommentInputForm({ onAddComment }) {
const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    onAddComment({
        id: crypto.randomUUID(),
        text: comment,
        time: new Date().toLocaleDateString([], {hour:"2-digit", minute:"2-digit"}),
        
    });
    setComment("")
    

  }
  function handleChange (event) {
    setComment(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Comment</h2>
      <label htmlFor="comment"></label>
      <input 
      type="text" 
      value={comment}
      placeholder="Add comment here..."
      onChange={handleChange}></input>
      <Button type="submit">Send</Button>
    </form>
  );
}
