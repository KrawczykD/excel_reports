import styled from "styled-components";

const ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 42px;
  overflow: hidden;
  transition: all 2s 0.5s;
  list-style: none;
  margin: 0;

  position: absolute;
  bottom: 20px;
  left: 0px;

  & > li {
    background-color: white;
  }

  &:hover {
    max-height: 1000px;
    background-color: #7ab800;
    transition: all 2s 0.5s;
  }

  @media (max-width: 768px) {
    max-height: 25px;
  }
`;

export default ul;
