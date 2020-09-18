import styled from 'styled-components';

export const Input = styled.input`
    display:none;
`

export const Label = styled.label`
    font-size: 20px;
    border: 1px solid black;
    display: inline;
    cursor:pointer;
    padding: 5px 10px;
    margin: 3px;
    border-radius: 2px;
    background: ${props=> props.color};

    :hover {
        color:gray;
    }
`

export const DateInput = styled.input`
    font-size: 20px;
    border: 1px solid black;
    padding: 3px 10px;
    margin: 3px;
    border-radius: 2px;
`