import styled from 'styled-components';

export const PopupDiv = styled.div`
    position:absolute;
    top:200px;
    left:${(props)=>props.displayPopup}px;
    opacity: ${(props)=>(props.displayPopupOpacity)};
    width:350px;
    background-color:#28a745;
    border-radius: 10rem;

    transition:opacity 1s linear ,left 1s ease-out;

    & > p {
        color: #FFFFFF;
        text-align:center;
    }

    & > ul {
        list-style:none;
        padding: 0;
    }

    & > ul > li {
        padding: .5rem 5rem;
        color:#FFFFFF;
    }
`