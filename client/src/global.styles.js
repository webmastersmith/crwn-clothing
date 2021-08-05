import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: #000000;
  }
`

export default GlobalStyle
