import {
  HTMLAttributes, memo, ReactNode, useCallback,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
  DEFAULT = 'default',
  OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.DEFAULT,
    fullWidth = false,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, { [styles.fullWidth]: fullWidth }, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
