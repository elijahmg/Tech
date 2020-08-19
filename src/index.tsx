import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import GlobalStyle from './theme/globalStyle';

import Button from './components/Button';
import NumberField from './components/NumberField';
import TextField from './components/TextField';
import TextArea from './components/TextArea';
import RadioButtonGroups from './components/RadioButtonsGroup';
import CheckBox from './components/CheckBox';

import './index.scss';
import DatePicker from '~/components/DateField';

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div>
        <Button primary className="mr-3" onClick={() => console.log('hello')}>Hello there</Button>
        <Button secondary onClick={() => console.log('hello')}>Hello there</Button>
        <NumberField label="Count"/>
        <TextField label="Text"/>
        <TextArea label="Text area"/>
        <RadioButtonGroups
          title="Radio buttons"
          config={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }]}/>
          <CheckBox label="CHeck box"/>
          <DatePicker label="DatePicker"/>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
