import { Currency } from '../../model/types/currency.types';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}
