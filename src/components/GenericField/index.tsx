import React, { FC } from 'react';
import classNames from 'classnames';

type Type = 'number' | 'checkbox' | 'date' | 'text';

interface Props {
  className?: string;
  label: string;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: Type;
}

const Field: FC<Props> = ({ className, label, type, value, onChange }) => {
  const targetClassNames = classNames('flex', 'items-center', className);

  return (
    <div className={targetClassNames}>
      <label className="mr-3">{label}</label>
      <input type={type}
             onChange={onChange}
             value={value}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
  );
}

export default Field;