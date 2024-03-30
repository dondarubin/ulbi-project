import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Button.module.scss';
import { ButtonProps, ButtonSize } from './Button.types';

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
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
