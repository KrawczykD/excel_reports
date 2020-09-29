import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left}px;
  // height:600px;
  width: 600px;
  border: 0.1rem solid white;
  // border-radius: 1rem;
  background-color: ${(props) => props.theme.main.color};
  transition: 0.5s;

  & > button {
    margin: 0 auto;
    // background:white;
    border: none;
    cursor: pointer;
  }

  & > * {
    display: block;
    margin: 3rem auto;
    background: white;
    border: none;
  }

  & > input {
    cursor: pointer;
  }
`;

export const Info = styled.p`

    padding: 1.5rem;
    font-size 1.5rem;
    background-color:${(props) => props.theme.main.color};
    color:white;
`;

export const Img = styled.img`
  margin: 0;
  width: 60px;
  height: 35px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  cursor: pointer;
  // border-top-right-radius: 5rem;
  // border-bottom-right-radius: 5rem;
  border-radius: 5rem;
  // transform:rotate(90deg);
  background-color: ${(props) => props.theme.main.color};
  z-index: 999;
`;
