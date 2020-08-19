import React, { FC } from 'react';
import classNames from 'classnames';

export interface RadioProps {
  className?: string
  label: string;
  value: string | number;
  checked?: boolean;
  onChange: (value: string) => void;
}

const RadioButton: FC<RadioProps> = ({ label, className, value, checked, onChange }) => {
  const targetClassNames = classNames('flex', 'items-center', className);

  return (
    <div className={targetClassNames}>
      <input type="radio"
             onChange={(e) => onChange(e.target.value)}
             value={value}
             checked={checked}
      />
      <span className="ml-3">{label}</span>
    </div>
  );
};

export default RadioButton;