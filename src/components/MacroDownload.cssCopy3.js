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
  left: 350px;

  &:hover {
    max-height: 1000px;
    background-color: #7ab800;
    transition: all 2s 0.5s;
  }
  & > button {
    //   margin: 0 auto;
    background-color: white;
    //   border: none;
    //   cursor: pointer;
  }

  & > input {
    cursor: pointer;
    // background-color: transparent;
  }
`;

export const Info = styled.p`
  padding: 1.5rem;
  font-size 1.5rem;
  color:white;
  width: 18rem;
`;
