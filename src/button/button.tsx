import classnames from 'classnames';
import * as React from 'react';
import styles from './button.css';

export enum ButtonType {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}

export function Button({
  className,
  children,
  disabled,
  variant,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      className={classnames(styles.button, className, {
        [styles.primary]: variant === ButtonType.PRIMARY && !disabled,
        [styles.error]: variant === ButtonType.ERROR && !disabled,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
