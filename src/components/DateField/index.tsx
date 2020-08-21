import React, { FC, useState } from 'react';
import Field from '../GenericField';

interface Props {
  className?: string;
  label: string;
}

const DatePicker: FC<Props> = ({ className, label }) => {
  const [value, setValue] = useState<string>();

  return <Field className={className} label={label} value={value} onChange={(e) => setValue(e.target.value)} type="date"/>;
};

export default DatePicker;