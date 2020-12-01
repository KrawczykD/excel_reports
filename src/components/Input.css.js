import styled from "styled-components";

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.2rem;
  background-color: Transparent;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  margin: 0.2rem;

  border-radius: 0.2rem;
  width: ${(props) => props.theme.main.buttonWidth}px;
  text-align: left;
  transition: 0.4s;

  border: 0.1rem solid black;

  :hover {
    color: gray;
  }
`;
