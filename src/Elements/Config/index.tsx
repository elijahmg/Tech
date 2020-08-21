import React, { FC, useContext, useEffect, useState } from 'react';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { TabsContext } from '../../Context/TabsContext';
import { TAB_RESULT } from '../../utils/constants';
import { validateJson } from '../../utils/jsonValidation';
import removeLineEndings from '../../utils/helpers';
import { hintJsonString } from '../../utils/hintString';
import { FieldsConfig } from '../../utils/interface';

const Config: FC = () => {
  const { setTab, setFieldsConfig, fieldsConfig } = useContext(TabsContext);
  const [jsonText, setJsonText] = useState<string>('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (Object.keys(fieldsConfig).length) {
      setJsonText(JSON.stringify(fieldsConfig, null, 2));
    }
  }, []);

  const onApplyHandler = () => {
    try {
      validateJson(removeLineEndings(jsonText));
      setFieldsConfig(JSON.parse(removeLineEndings(jsonText)));
      setTab(TAB_RESULT);
    } catch (e) {
      setError(e.message);
    }
  };

  const onHintHandler = () => {
    setJsonText(JSON.stringify(hintJsonString, null, 2));
    setFieldsConfig(hintJsonString as FieldsConfig);
    setError('');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="h-12 flex flex-wrap">
        {error && <span className="text-red-600">{error}</span>}
      </div>
      <TextArea
        onChange={setJsonText}
        className="mb-3"
        cols={200}
        rows={20}
        propValue={jsonText}
      />
      <div className="flex justify-end">
        <Button
          className="mr-3"
          secondary
          onClick={onHintHandler}
        >Give me a hint</Button>
        <Button
          primary
          onClick={onApplyHandler}
        >Apply</Button>
      </div>
    </div>
  );
};

export default Config;