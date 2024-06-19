import {
  DetailedHTMLProps, HTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
};

// TODO вернуть наследование
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps{
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  component?: keyof HTMLElementTagNameMap;
}

export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    max,
    component = 'div',
  } = props;

  const ComponentWrapper = component;

  const mods: Mods = {
    [styles.max]: max,
  };

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <ComponentWrapper className={classNames(styles.Flex, mods, classes)}>
      {children}
    </ComponentWrapper>
  );
});
