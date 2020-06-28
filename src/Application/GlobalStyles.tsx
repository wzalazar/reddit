import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;  
  }

  h1 { font-size:27px; }
  h2 { font-size:24px; }
  h3 { font-size:21px; } 
  h4 { font-size:18px; }
  h5 { font-size:16px; }
  h6 { font-size:14px; }
  p { font-size: 12px; }

  h1, h2, h3, h4, h6, p, a {
    color: #1c1c1c;
    border: none;
    text-decoration: none;
  }
`
