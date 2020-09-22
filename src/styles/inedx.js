import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
    html{
      font-size:15px;
      font-family:lato;
    }

    @media (min-resolution:125dpi) {
      html {
        font-size:10px;
      }
    }
    
`