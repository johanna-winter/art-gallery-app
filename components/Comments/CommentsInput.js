import { useState } from "react";
import Button from "../Button/Button";
import { FormStyled, InputStyled, TitleStyled, VertikalerStrich } from "./CommentsInputStyled";
import { SendButton } from "../Button/StyledButtons";

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
    <FormStyled>
        <VertikalerStrich/>
      <TitleStyled>New Comment</TitleStyled>
      <label htmlFor="comment"></label>
      <InputStyled 
      type="text" 
      value={comment}
      placeholder="Add comment here..."
      onChange={handleChange}></InputStyled>
      <SendButton onClick={handleSubmit} type="submit">Send</SendButton>
      <VertikalerStrich/>
    </FormStyled>
  );
}
