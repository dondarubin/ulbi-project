import { ValidateLoginErrors } from '../consts/consts';

export interface LoginSchema {
  username: string,
  password: string,
  isLoading: boolean,
  validateErrors?: ValidateLoginErrors[],
}
