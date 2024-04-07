import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';
import { TextAlign, TextProps, TextTheme } from './Text.types';

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={classNames(
        styles.TextWrapper,
        {},
        [className, styles[theme], styles[align]],
      )}
    >
      {title && <p className={styles.TextWrapper_title}>{title}</p>}
      {text && <p className={styles.TextWrapper_text}>{text}</p>}
    </div>
  );
});
