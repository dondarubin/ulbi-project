import { classNames } from 'shared/lib/classNames/classNames';
import {
  HTMLAttributes, memo, ReactNode, useCallback,
} from 'react';
import styles from './Card.module.scss';

export enum CardTheme {
  DEFAULT = 'default',
  OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.DEFAULT,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
