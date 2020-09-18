import styled from 'styled-components';

const Table = styled.table`
    
        display: block;
        height:70vh;
        // max-height:25vh;
        overflow: scroll;
        border: 2px solid black;
        position:relative;
  
        transition:left 1s linear;

        & > caption {
              background-color:#7AB800;
              display:block;
              color:#FFF;
              padding:5px;
              font-size: 30px;
              position:relative;

              & > p {
                display:inline;
                letter-spacing:1px;
              }

              & > button {
                position:absolute;
                top:0;
                right:0;
                letter-spacing:1px;
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


export default Table;