export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

export interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}
