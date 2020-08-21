import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const RawButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <a className={className} onClick={onClick}>{children}</a>
  );
}

const Button = styled(RawButton)`
  background-color: ${(props) =>
  props.primary
    ? props.theme.colors.primary
    : props.secondary
    ? props.theme.colors.secondary
    : ''};
  letter-spacing: 2px;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  color: white;
  cursor: pointer;
`

export default Button;