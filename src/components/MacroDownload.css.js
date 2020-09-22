import styled from 'styled-components';


export const Div = styled.div`
    position:absolute;
    bottom:1.2rem;
    left:${(props)=> props.left}px;
    // height:600px;
    width:600px;
    border: .1rem solid white;
    // border-radius: 1rem;
    background: #7AB800;
    transition: .5s;


    & > button{
        margin: 0 auto;
        // background:white;
        border:none;
        cursor:pointer;
    }


    & > * {
        display:block;
        margin: 3rem auto;
        background:white;
        border:none;
    }

    & > input {
        cursor:pointer;
    }

`

export const Info = styled.p`

    padding: 1.5rem;
    font-size 1.5rem;
    background:#7AB800;
    color:white;
`

export const Img = styled.img`
    margin:0;
    width:60px;
    height:40px;
    position:absolute;
    left:0px;
    bottom:0px;
    cursor:pointer;
    // border-top-right-radius: 5rem;
    // border-bottom-right-radius: 5rem;
    border-radius: 5rem;
    // transform:rotate(90deg);
    background-color: #7AB800;
    z-index:999;
`