import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Container: FC<Props> = ({ children, id, className }) => {
  const targetClassName = classNames(className, 'max-w-lg', 'rounded', 'overflow-hidden', 'shadow-lg', 'p-6', 'min-size');

  return (
    <div className={targetClassName}>
      {children}
    </div>
  );
};

export default Container;