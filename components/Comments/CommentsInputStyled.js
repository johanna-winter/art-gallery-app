import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

export const TitleStyled =styled.h2`
font-size:1rem;
margin-bottom:-1rem;
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 30rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const VertikalerStrich = styled.hr`
  border: none; 
  height:2px;
  background-color: #333; 
  width: 90%; 
  margin: 20px auto; 

`; 