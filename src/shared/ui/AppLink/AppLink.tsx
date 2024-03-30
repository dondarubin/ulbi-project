import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { AppLinkProps, AppLinkTheme } from 'shared/ui/AppLink/AppLink.types';
import styles from './AppLink.module.scss';

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(
        styles.AppLink,
        {},
        [className, styles[theme]],
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
