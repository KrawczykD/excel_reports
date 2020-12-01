import styled from "styled-components";

const Select = styled.select`
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0.5rem 0.7rem;
  margin: 0.2rem;
  // width: ${(props) => props.theme.main.buttonWidth}px;

  option:selected {
    color: gray;
  }

  & > option {
  }
`;

export default Select;
