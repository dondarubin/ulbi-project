import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps, ButtonSize } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(
        styles.Button,
        mods,
        [className, styles[theme]],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
