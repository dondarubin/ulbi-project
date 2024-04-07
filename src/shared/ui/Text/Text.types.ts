export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign
}
