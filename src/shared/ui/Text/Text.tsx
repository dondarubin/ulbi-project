import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';
import { TextProps, TextTheme } from './Text.types';

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
  };

  return (
    <div
      className={classNames(
        styles.Text,
        mods,
        [className],
      )}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
