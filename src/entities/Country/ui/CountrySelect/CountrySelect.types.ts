import { Country } from '../../model/types/country.types';

export interface CountrySelectProps {
  className?: string;
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}
