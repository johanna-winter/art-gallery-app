import styled from "styled-components";

export const FormStyled =styled.form`
text-align:center;
gap: 1rem;
`;

export const CommentTitleStyled =styled.h2`
font-size:1rem;

`;

export const OutputSectionStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
 max-width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;

  p {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  p:first-child {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p:last-child {
    font-size: 0.875rem;
    color: #666;
    text-align: right;
  }
`;

export const NoCommentPart =styled.p`
display:flex;
text-align:center;
justify-content:center;
gap: 1rem;
border: 1px solid #c1c1c1ff;
border-radius:10px;
padding:1rem;
gap:2rem;
`;