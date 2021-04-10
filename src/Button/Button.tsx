import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

function Button({ label }: ButtonProps) {
  return <button className="jarp-btn">{label}</button>;
}

export default Button;
