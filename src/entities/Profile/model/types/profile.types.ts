import { Country, Currency } from 'shared/constants/common';

export interface IProfile {
  firstname: string,
  lastname: string,
  age: number,
  currency: Currency,
  country: Country,
  city: string,
  username: string,
  avatar: string,
}

export interface ProfileSchema {
  profile?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
}