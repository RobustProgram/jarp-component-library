import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';

import './Button.scss';

function Button({ primary, error, label }: ButtonProps) {
  const className = classNames({
    'jarp-btn': true,
    primary,
    error,
  });
  return <button className={className}>{label}</button>;
}

export default Button;
