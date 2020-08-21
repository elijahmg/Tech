import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import GlobalStyle from './theme/globalStyle';

import MainPage from './Pages/App';
import './index.scss';

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <MainPage/>
    </ThemeProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
