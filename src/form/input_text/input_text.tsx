import classnames from 'classnames';
import * as React from 'react';
import styles from './input_text.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ className, ...inputTextProps }: InputTextProps) {
  return (
    <input
      {...inputTextProps}
      className={classnames(styles.inputText, className)}
    />
  );
}
