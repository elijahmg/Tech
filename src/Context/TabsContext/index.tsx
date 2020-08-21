import React, { FC, useState } from 'react';
import { FieldsConfig } from '../../utils/interface';

const TabsContext = React.createContext({
  tabId: '',
  fieldsConfig: {} as FieldsConfig,
  setTab: (tab: string) => {
  },
  setFieldsConfig: (fieldsConfig: FieldsConfig) => {
  },
});

interface TabsContextProps {
  initTab: string;
  children: React.ReactNode;
}

const TabsProvider: FC<TabsContextProps> = ({ initTab, children }) => {
  const [tab, setTab] = useState<string>(initTab);
  const [fieldsConfig, setFieldsConfig] = useState<FieldsConfig>({});

  return (
    <TabsContext.Provider value={{
      tabId: tab,
      setTab: (t) => setTab(t),
      fieldsConfig,
      setFieldsConfig: (fields) => setFieldsConfig(fields)
    }}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsContext, TabsProvider };