import React, { FC, useState } from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';

type Config = {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  config: Config[];
  title: string;
}

const RadioButtonGroups: FC<Props> = ({ className, config, title }) => {
  const [value, setValue] = useState<string>();

  const targetClassName = classNames('flex', 'flex-col', className);

  return (
    <div className={targetClassName}>
      <span>{title}</span>
      {config.map((v) => <RadioButton key={v.value} label={v.label} value={v.value} checked={value === v.value}
                                      onChange={setValue}/>)}
    </div>
  );
};

export default RadioButtonGroups;