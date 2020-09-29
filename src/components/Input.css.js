import styled from "styled-components";

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  border: 1px solid black;
  display: inline;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  margin: 0.2rem;
  border-radius: 2px;
  background: ${(props) => props.color};

  :hover {
    color: gray;
  }
`;

export const DateInput = styled.input`
  font-size: 1.2rem;
  border: 1px solid black;
  padding: 0.5rem 0.7rem;
  margin: 0.2rem;
  border-radius: 2px;
`;
