export interface SelectOptions {
  value: string
  content: string
}

export interface SelectProps {
  className?: string;
  label?: string
  options?: SelectOptions[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}
