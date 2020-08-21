import React, { FC } from 'react';
import Layout from '../../components/Layout';
import { TabsProvider } from '../../Context/TabsContext';
import { TAB_CONFIG, TAB_MANUAL, TAB_RESULT } from '../../components/utils/constants';
import Container from '../../components/Container';
import Tabs from '../../components/Tabs';
import Config from '../../Elements/Config';
import Result from '../../Elements/Result';
import Manual from '../../Elements/Manual';

const TabsConfig = [
  { title: 'Config', value: TAB_CONFIG },
  { title: 'Result', value: TAB_RESULT },
  { title: 'Manual', value: TAB_MANUAL },
];

const MainPage: FC = () => {
  return (
    <Layout>
      <TabsProvider initTab={TAB_CONFIG}>
        <Tabs config={TabsConfig}>
          <Container id={TAB_CONFIG}>
            <Config/>
          </Container>
          <Container id={TAB_RESULT}>
            <Result/>
          </Container>
          <Container id={TAB_MANUAL}>
            <Manual/>
          </Container>
        </Tabs>
      </TabsProvider>
    </Layout>
  );
};

export default MainPage;