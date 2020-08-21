import React, { FC, useState } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  rows?: number;
  cols?: number;
  propValue?: string
}

const TextArea: FC<Props> = ({ className, label, onChange, rows, cols, propValue }) => {
  const [value, setValue] = useState<string>();
  const targetClassNames = classNames('flex', 'items-end', className);

  return (
    <div className={targetClassNames}>
      {label && <label className="mr-3">{label}</label>}
      <textarea className="resize border rounded focus:outline-none focus:shadow-outline"
                rows={rows}
                cols={cols}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (onChange) {
                    onChange(e.target.value);
                  }
                }}
                value={propValue || value}/>
    </div>
  );
}

export default TextArea;