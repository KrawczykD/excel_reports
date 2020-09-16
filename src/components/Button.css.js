import styled from 'styled-components';

const Buttons = styled.button`
    font-size: 20px;
    background-color: Transparent;
    cursor:pointer;
    padding: 5px 20px;
    margin: 3px;
    border: 1px solid black;
    border-radius: 2px;
    width:300px;
    text-align:left;
    transition:.4s;

    :hover {
        padding-left:30px;
    }
`

export default Buttons;