import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Button.module.scss';
import { ButtonProps, ButtonSize, ButtonTheme } from './Button.types';

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(
        styles.Button,
        mods,
        [className],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
