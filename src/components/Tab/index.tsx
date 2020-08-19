import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  title: string;
  active: boolean;
  onChange: () => void;
}

const Tab: FC<Props> = ({ title, active, onChange }) => {
  const className = classNames(
    'bg-white',
    'inline-block',
    'py-2',
    'px-4',
    'text-blue-700',
    'font-semibold',
    'cursor-pointer',
    { 'border-l border-t border-r rounded-t -mb-px ': active });

  return (
    <li className="mr-1">
      <a className={className}
         onClick={() => onChange()}
         >{title}</a>
    </li>
  );
};

export default Tab;