export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme,
}
