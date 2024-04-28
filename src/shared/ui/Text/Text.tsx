import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';
import {
  TextAlign, TextProps, TextSize, TextTheme,
} from './Text.types';

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: size,
  };

  return (
    <div
      className={classNames(
        styles.TextWrapper,
        mods,
        [className],
      )}
    >
      {title && <p className={styles.TextWrapper_title}>{title}</p>}
      {text && <p className={styles.TextWrapper_text}>{text}</p>}
    </div>
  );
});
