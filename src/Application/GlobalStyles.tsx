import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  h1, h2, h3, p, span {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`
