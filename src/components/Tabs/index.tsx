import React, { FC, useContext, useState } from 'react';
import Tab from '../Tab';
import { TabsContext } from '~/Context/TabsContext';

type TabsConfig = {
  value: string;
  title: string;
}

interface Props {
  config: TabsConfig[];
  children: React.ReactElement[];
}

const Tabs: FC<Props> = ({
                           config,
                           children,

                         }) => {
  const { tabId, setTab } = useContext(TabsContext);

  return (
    <div>
      <ul className="flex border-b">
        {config.map((c) => <Tab key={c.title} title={c.title} active={tabId === c.value}
                                onChange={() => setTab(c.value)}/>)}
      </ul>
      {React.Children.map(children, (child) => {
        if (child.props.id === tabId) return child;
      })}
    </div>
  );
};

export default Tabs;