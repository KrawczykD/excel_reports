import styled from 'styled-components';

const Table = styled.table`
    
        display: block;
        height:70vh;
        // max-height:25vh;
        overflow: scroll;
        border: .2rem solid black;
        position:relative;
        left:${(props)=>props.left}px;

        transition: left 1s ease-out;

        & > caption {
              background-color:${props=> props.theme.main.color};
              display:block;
              color:#FFF;
              padding:.5rem;
              font-size: 1.7rem;
              position:relative;

              & > p {
                display:inline;
                letter-spacing:.1rem;
              }

              & > button {
                position:absolute;
                top:0;
                right:0;
                letter-spacing:.1rem;
              }
          }

          & > thead > tr > th {
              padding: .2rem;
              border-bottom: .1rem solid black;
              position: sticky;
              top:0;
              background-color:white;
            }

            & > tbody >tr > td {
                padding: .1rem;
                border-bottom: .1rem solid black;
              
              }
      
`


export default Table;