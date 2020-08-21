import React, { FC, useState } from 'react';
import Field from '../GenericField';

interface Props {
  className?: string;
  label: string;
}

const NumberField: FC<Props> = ({ className, label }) => {
  const [value, setValue] = useState<number>();

  return <Field label={label} type="number" className={className} value={value} onChange={(e) => setValue(e.target.valueAsNumber)}/>
}

export default NumberField;