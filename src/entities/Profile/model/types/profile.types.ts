import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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
