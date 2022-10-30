import * as React from 'react';

export interface TagsProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: string;
}

export function Tags({ children }: TagsProps) {
  return <span>{children}</span>;
}
