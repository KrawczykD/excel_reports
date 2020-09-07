import styled from 'styled-components';

const Table = styled.table`
    
        display: block;
        height:25vh;
        max-height:25vh;
        overflow: scroll;
        border: 2px solid black;
        position:relative;

        & > caption {
              background-color:#7AB800;
              display:block;
              color:#FFF;
              padding:5px;
              font-size: 30px;
              position:relative;

              & > p {
                display:inline;
              }

              & > button {
                position:absolute;
                top:0;
                right:0;
              }
          }

          & > thead > tr > th {
              padding: 2px;
              border-bottom: 1px solid black;
              position: sticky;
              top:0;
              background-color:white;
            }

            & > tbody >tr > td {
                padding: 2px;
                border-bottom: 1px solid black;
              
              }
      
`

// const Table = styled.table`

// min-width: 100%;
// border: 2px solid black;

// & > tbody {
//   display: block;
//   height:17vh;
//   max-height:17vh;
//   overflow: scroll;
// }

// & > thead {
//   height:2vh;
//   display: table;
//   width: 99%;
//   table-layout: fixed;
// }


// & > tbody > tr {
//   display: table;
//   width: 100%;
//   table-layout: fixed;
// }


// & > caption {
//     background-color:#7AB800;
//     color:#FFF;
//     padding:5px;
//     font-size: 30px;
// }

// & > thead > tr > th {
//   padding: 2px;
//   border-bottom: 1px solid black;
//   width:100%;
// }


// & > tbody >tr > td {
//   padding: 2px;
//   border-bottom: 1px solid black;

// }

// `

export default Table;