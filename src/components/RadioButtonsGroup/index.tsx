import React, { FC, useState } from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import { IRadioButton } from '~/utils/interface';

interface Props {
  className?: string;
  config: IRadioButton[];
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