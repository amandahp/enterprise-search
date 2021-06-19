import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      position: relative;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      overflow: none; 
    };
  `}

`

export default GlobalStyle
