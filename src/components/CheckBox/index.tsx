import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  label: string;
}

const CheckBox: FC<Props> = ({ label, className }) => {
  const targetClassNames = classNames('flex', 'items-center', className);

  return (
    <div className={targetClassNames}>
      <label className="mr-3">{label}</label>
      <input type="checkbox"/>
    </div>
  );
};

export default CheckBox;