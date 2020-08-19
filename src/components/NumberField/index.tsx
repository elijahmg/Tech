import React, { FC, useState } from 'react';
import styled from "styled-components";
import Field from "~/components/GenericField";

interface Props {
  className?: string;
  label: string;
}

const RawNumberField: FC<Props> = ({ className, label }) => {
  const [value, setValue] = useState<number>();

  return <Field label={label} type="number" className={className} value={value} onChange={(e) => setValue(e.target.valueAsNumber)}/>
}

const NumberField = styled(RawNumberField)`
`;

export default NumberField;