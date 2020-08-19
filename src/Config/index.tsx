import React, { FC, useContext, useState } from 'react';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { TabsContext } from '~/Context/TabsContext';
import { TAB_RESULT } from '~/components/utils/constants';

const Config: FC = () => {
  const [jsonText, setJsonText] = useState<string>();
  const { setTab } = useContext(TabsContext);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <TextArea onChange={setJsonText} className="mb-3" cols={200} rows={20}/>
      <div className="flex justify-end">
        <Button
          primary
          onClick={() => setTab(TAB_RESULT)}
        >Apply</Button>
      </div>
    </div>
  );
}

export default Config;