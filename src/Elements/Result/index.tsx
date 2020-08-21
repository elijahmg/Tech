import React, { FC, useContext } from 'react';
import { TabsContext } from '../../Context/TabsContext';
import FormBuildContainer from '../../components/FormBuilder';

const Result: FC = () => {
  const { fieldsConfig } = useContext(TabsContext);

  return <FormBuildContainer fieldsConfig={fieldsConfig}/>;
};

export default Result;