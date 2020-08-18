import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import './index.scss';
import Button from './components/Button';
import JsonParserTheme from './theme/mainTheme';

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

const App: FC = () => {
  return (
    <ThemeProvider theme={JsonParserTheme}>
      <GlobalStyle />
      <div>
        <Button primary>Hello from</Button>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
