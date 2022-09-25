import classnames from 'classnames';
import * as React from 'react';
import styles from './typography.css';

interface HeaderProps {
  bold?: boolean;
  children?: React.ReactNode;
}

export namespace Header {
  export function ExtraLarge({ bold, children }: HeaderProps) {
    return (
      <h1 className={classnames(styles.textHeader, { [styles.bold]: bold })}>
        {children}
      </h1>
    );
  }

  export function Large({ bold, children }: HeaderProps) {
    return (
      <h2 className={classnames(styles.textHeader, { [styles.bold]: bold })}>
        {children}
      </h2>
    );
  }

  export function Medium({ bold, children }: HeaderProps) {
    return (
      <h3 className={classnames(styles.textHeader, { [styles.bold]: bold })}>
        {children}
      </h3>
    );
  }

  export function Small({ bold, children }: HeaderProps) {
    return (
      <h4 className={classnames(styles.textHeader, { [styles.bold]: bold })}>
        {children}
      </h4>
    );
  }

  export function ExtraSmall({ bold, children }: HeaderProps) {
    return (
      <h5 className={classnames(styles.textHeader, { [styles.bold]: bold })}>
        {children}
      </h5>
    );
  }
}

interface ParagraphProps {
  children?: React.ReactNode;
}

export namespace Paragraph {
  export function Medium({ children }: ParagraphProps) {
    return <p className={styles.textMedium}>{children}</p>;
  }
}
