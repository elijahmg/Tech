import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import GlobalStyle from './theme/globalStyle';

import Container from './components/Container';

import './index.scss';
import Tabs from './components/Tabs';
import Config from './Config';
import { TabsProvider } from '~/Context/TabsContext';
import { TAB_CONFIG, TAB_RESULT } from '~/components/utils/constants';

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div className="min-h-screen flex justify-center items-center">
        <TabsProvider initTab={TAB_CONFIG}>
          <Tabs config={[{ title: 'Config', value: 'config' }, { title: 'Result', value: 'result' }]}>
            <Container id={TAB_CONFIG}>
              <Config/>
            </Container>
            <Container id={TAB_RESULT}>
              Result
            </Container>
          </Tabs>
        </TabsProvider>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
