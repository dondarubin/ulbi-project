import { ValidateLoginErrors } from '../consts/consts';

export interface LoginSchemaTypes {
  username: string,
  password: string,
  isLoading: boolean,
  validateErrors?: ValidateLoginErrors[],
}
