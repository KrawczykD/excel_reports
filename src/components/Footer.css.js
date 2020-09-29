import styled from "styled-components";

const Footerfooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.main.color};
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  pading: 0;
  overflow: hidden;
  & > p {
    display: block;
    width: 90%;
    text-align: right;
    margin: 0;
    pading: 0;
    font-size: 1rem;
    color: #ffffff;
  }
`;

export default Footerfooter;
