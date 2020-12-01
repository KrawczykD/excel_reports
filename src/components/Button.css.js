import styled from "styled-components";

const Buttons = styled.button`
  font-size: 1.2rem;
  background-color: Transparent;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  margin: 0.2rem;
  border: 0.1rem solid black;
  // border-radius: 0.2rem;
  width: ${(props) => props.theme.main.buttonWidth}px;
  text-align: left;
  transition: 0.4s;

  :hover {
    padding-left: 1.5rem;
  }
`;

export default Buttons;
