import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primaryInverted',
  SECONDARY = 'secondary',
  SECONDARY_INVERTED = 'secondaryInverted',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
