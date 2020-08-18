import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.a<Props>`
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : ''};
  width: 120px;
  height: 40px;
  letter-spacing: 2px !important;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  color: white;
`;

export default Button;
