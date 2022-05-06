import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 0.75rem;
  }
  
  body {
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
