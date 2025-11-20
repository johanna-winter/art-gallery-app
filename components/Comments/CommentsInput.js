import { useState } from "react";
import Button from "../Button/Button";
import { FormStyled, InputStyled, TitleStyled, VertikalerStrich } from "./CommentsInputStyled";
import { SendButton } from "../Button/StyledButtons";

export default function CommentInputForm({ onAddComment, slug }) {
const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    

    //funktion um Kommentar hinzuzufügen
    onAddComment({
        id: `${slug}-${crypto.randomUUID()}`, //Es wird ein String erstellt aus slug und randomUUID der eine einzigartige ID wiedergibt
        slug: slug,  //ArtPiece slug für Filterung
        text: comment, // Der eingegebene Text
        time: new Date().toLocaleDateString([], {hour:"2-digit", minute:"2-digit"}),
        
    });
    setComment("")    //Input-Feld leeren nach Submit
    

  }
  function handleChange (event) {
    setComment(event.target.value)    // Aktualisiert State bei jeder Eingabe
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
