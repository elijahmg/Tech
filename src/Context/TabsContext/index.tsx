import React, { FC, useState } from 'react';

const TabsContext = React.createContext({
  tabId: '',
  setTab: (tab: string) => {},
});

interface TabsContextProps {
  initTab: string;
  children: React.ReactNode;
}

const TabsProvider: FC<TabsContextProps> = ({ initTab, children }) => {
  const [tab, setTab] = useState<string>(initTab);

  return (
    <TabsContext.Provider value={{ tabId: tab, setTab: (t) => setTab(t) }}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsContext, TabsProvider }