import styled from "styled-components";

export const PopupDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-height: 42px;
  overflow: hidden;
  transition: all 2s 0.5s;
  background-color: white;

  position: absolute;
  bottom: 20px;
  left: ${(props) => props.theme.main.buttonWidth * 2 + 12}px;

  &:hover {
    max-height: 1000px;
    background-color: #7ab800;
    transition: all 2s 0.5s;
  }
  & > button {
    //   margin: 0 auto;
    background-color: ${(props) => `#${props.color}`};
    //   border: none;
      padding-left: ${(props) => `${props.shake}rem`};
      
  }

  & > ul {
    list-style: none;
    // padding: 0;
    text-aligne: center;
  }

  & > ul > li {
    padding: .1rem;
  font-size 1.5rem;
  color:white;
  }

  @media (max-width: 768px) {
    max-height: 25px;
  }
`;
