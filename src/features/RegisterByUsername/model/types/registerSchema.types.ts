import { ValidateRegisterErrors } from '../consts/consts';

export interface RegisterSchema {
  isLoading: boolean,
  username: string,
  password: string,
  replyPassword: string,
  validateErrors?: ValidateRegisterErrors[],
}
