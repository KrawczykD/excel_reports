import styled from "styled-components";

export const PopupDiv = styled.div`
  position: absolute;
  top: 200px;
  left: ${(props) => props.displayPopup}px;
  opacity: ${(props) => props.displayPopupOpacity};
  width: 350px;
  background-color: #28a745;
  border-radius: 10rem;
  z-index: 9999;

  transition: opacity 1s linear, left 1s ease-out;

  & > p {
    color: #ffffff;
    text-align: center;
  }

  & > ul {
    list-style: none;
    padding: 0;
  }

  & > ul > li {
    padding: 0.5rem 5rem;
    color: #ffffff;
  }
`;
