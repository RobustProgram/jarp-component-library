import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

function Button({ children }: ButtonProps) {
  return <button className="jarp-btn">{children}</button>;
}

export default Button;
