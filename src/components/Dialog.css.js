import styled from 'styled-components';

export const Background = styled.div`

    font-family:lato;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    z-index:0;
    opacity:0.4;
    background-color:#000000;

`
export const Paragraph = styled.p`

    font-size:30px;
    padding:20px;
    font-family:lato;
    letter-spacing:1px;


`
export const Close = styled.p`
    display:inline-block;
    font-family:lato;
    opacity:1;
    font-size:40px;
    position:relative; 
    top:0; 
    right:-90%; 
    cursor:pointer;
    transition: 0.5s;

    :hover{
        opacity:0.5;
        transform:rotate(180deg)
`

export const Warning = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width:30%;
    height:40%;
    background-color:white;
    border-radius:10px;
`