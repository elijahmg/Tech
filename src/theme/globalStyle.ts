import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    font-family: Alata, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;  
  }
  html {
    min-height: 100vh;
    width: 100%;
  }
  
  div#root {
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyle;