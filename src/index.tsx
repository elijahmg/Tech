import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Button from './components/Button';
import Theme from './theme';
import GlobalStyle from './theme/globalStyle';

import './index.scss';

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>
        <Button primary className="mr-3" onClick={() => console.log('hello')}>Hello there</Button>
        <Button secondary onClick={() => console.log('hello')}>Hello there</Button>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
