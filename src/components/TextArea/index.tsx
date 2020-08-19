import React, { FC, useState } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  label: string;
}

const TextArea: FC<Props> = ({ className, label }) => {
  const [value, setValue] = useState<string>();
  const targetClassNames = classNames('flex', 'items-end', className);

  return (
    <div className={targetClassNames}>
      <label className="mr-3">{label}</label>
      <textarea className="resize border rounded focus:outline-none focus:shadow-outline"
                onChange={(e) => setValue(e.target.value)}
                value={value}/>
    </div>
  );
}

export default TextArea;