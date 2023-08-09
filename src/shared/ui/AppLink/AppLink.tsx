import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primaryInverted',
  SECONDARY = 'secondary',
  SECONDARY_INVERTED = 'secondaryInverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
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
};
