import styled from 'styled-components';


const Select = styled.select`
    font-size: 1.2rem;
    border: 1 px solid black;
    border-radius: 2px;
    padding: .45rem .7rem;
    margin: .2rem;
    
    option:selected {
        color:gray;
    }


`

export default Select;
