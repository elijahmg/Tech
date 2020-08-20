import React, {FC} from 'react';
import Layout from '~/components/Layout';
import { TabsProvider } from '~/Context/TabsContext';
import { TAB_CONFIG, TAB_RESULT } from '~/components/utils/constants';
import Tabs from '~/components/Tabs';
import Container from '~/components/Container';
import Config from '~/Elements/Config';

const MainPage: FC = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default MainPage;