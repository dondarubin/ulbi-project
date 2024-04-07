import { InputHTMLAttributes } from 'react';

// Исключаем value и onChange из типа InputHTMLAttributes<HTMLInputElement
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number,
  onChange?: (value: string) => void,
  placeholder?: string,
  autofocus?: boolean,
  readonly?: boolean
}
