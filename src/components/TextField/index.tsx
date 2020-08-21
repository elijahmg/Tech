import React, { FC, useState } from 'react';
import styled from "styled-components";
import Field from '../GenericField';

interface Props {
  className?: string;
  label: string;
}

const RawTextField: FC<Props> = ({ className, label }) => {
  const [value, setValue] = useState<string>();

  return <Field label={label}
                value={value} onChange={(e) => setValue(e.target.value)}
                type="text"
                className={className}/>
}

const TextField = styled(RawTextField)`
`;

export default TextField;