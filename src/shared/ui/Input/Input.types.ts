import { InputHTMLAttributes } from 'react';

// Исключаем value и onChange из типа InputHTMLAttributes<HTMLInputElement
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string,
  onChange?: (value: string) => void,
  placeholder?: string,
  autofocus?: boolean,
}
