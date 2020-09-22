import styled from 'styled-components';

const Buttons = styled.button`
    font-size: 1.2rem;
    background-color: Transparent;
    cursor:pointer;
    padding: .5rem .7rem;
    margin: .2rem;
    border: .1rem solid black;
    border-radius: .2rem;
    width:20rem;
    text-align:left;
    transition:.4s;

    :hover {
        padding-left:1.5rem;
    }
`

export default Buttons;