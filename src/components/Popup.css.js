import styled from 'styled-components';

export const PopupDiv = styled.div`
    position:absolute;
    top:200px;
    left:${(props)=>props.displayPopup}px;
    opacity: ${(props)=>(props.displayPopupOpacity)};
    width:300px;
    background-color:#28a745;
    border-radius: 50px;

    transition:opacity 1s linear ,left 1s ease-out;

    & > p {
        color: #FFFFFF;
        text-align:center;
    }

    & > ul {
        list-style:none;
        padding: 0px;
    }

    & > ul > li {
        padding: 5px 50px;
        color:#FFFFFF;
    }
`