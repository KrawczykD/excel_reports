import styled from 'styled-components';


export const Div = styled.div`
    position:absolute;
    bottom:0;;
    left:-650px;
    // height:450px;
    width:600px;
    border: 1px solid white;
    // border-radius: 10px;
    background: #7AB800;
    opacity:0.5;
    transition: 0.5s;

    :hover{
        left:-50px;
        opacity:1;
    }

    & > button{
        margin: 0 auto;
        // background:white;
        border:none;
    }


    & > * {
        display:block;
        margin: 30px auto;
        background:white;
        border:none;
    }

    ::after {
        content:"SAP";
        display: block;
        height:40px;
        width:640px;
        line-height: 40px;
        padding-right:10px;
        background:#7AB800;
        // background:white;
        text-align:right;
        line-heigh:20px;
        border-radius:20px;
        opacity:1;
    }

`

export const Info = styled.p`

    padding: 20px;
    font-size 20px;
    background:#7AB800;
    color:white;



`