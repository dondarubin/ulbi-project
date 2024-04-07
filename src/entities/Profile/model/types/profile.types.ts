import { Currency } from 'entities/Currency/model/types/currency.types';
import { Country } from 'entities/Country/model/types/country.types';

export interface IProfile {
  firstname?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string,
}

export interface ProfileSchema {
  profileData?: IProfile,
  profileFormData?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
}
