import classnames from 'classnames';
import * as React from 'react';
import styles from './radio.css';

export interface RadioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'danger' | 'primary';
}

export function RadioButton({
  className,
  children,
  disabled,
  variant,
  ...buttonProps
}: RadioButtonProps) {
  return (
    <button
      {...buttonProps}
      className={classnames(className, styles.radioButton, {
        [styles.primary]: variant === 'primary' && !disabled,
        [styles.danger]: variant === 'danger' && !disabled,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
