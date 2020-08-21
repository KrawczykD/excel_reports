import styled from 'styled-components';

const Table = styled.table`

width: 100%;
border: 2px solid black;

& > caption {
    background-color:#7AB800;
    color:#FFF;
    padding:5px;
    font-size: 30px;
}

& > tr > td {
  text-align: left;
  padding: 2px;
  vertical-align: top;
  border-top: 0;
  border: 1px solid black;
}

    `

export default Table