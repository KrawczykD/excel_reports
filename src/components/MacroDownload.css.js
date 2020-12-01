import styled from "styled-components";

export const Div = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-height: 42px;
  overflow: hidden;
  transition: all 2s 0.5s;
  background-color: white;

  position: absolute;
  bottom: 20px;
  left: ${(props) => props.theme.main.buttonWidth * 1 + 6}px;

  &:hover {
    max-height: 1000px;
    background-color: #7ab800;
    transition: all 2s 0.5s;
  }
  & > button {
    background-color: white;
  }

  & > input {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-height: 25px;
  }
`;

export const Info = styled.p`
  padding: 1.5rem;
  font-size 1.5rem;
  color:white;
  width: 14rem;
`;

export const DateInput = styled.input`
  font-size: 1.2rem;
  border: 1px solid black;
  padding: 0.35rem 0.7rem;
  margin: 0.2rem;
  border-radius: 3px;
`;
