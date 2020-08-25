import styled from 'styled-components';

const Table = styled.table`

min-width: 1;
border: 2px solid black;

& > tbody {
  display: block;
  max-height: 20vh;
  overflow-y: scroll;
}

& > thead {
  display: table;
  width: 99%;
  table-layout: fixed;
}


& > tbody > tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}


& > caption {
    background-color:#7AB800;
    color:#FFF;
    padding:5px;
    font-size: 30px;
}

& > thead > tr > th {
  padding: 2px;
  border-bottom: 1px solid black;
  width:100%;
}


& > tbody >tr > td {
  padding: 2px;
  border-bottom: 1px solid black;
}

`

export default Table;