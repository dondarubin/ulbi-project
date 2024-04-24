import { ValidateLoginErrors } from '../../types/loginSchema';

export function validateLoginData(username: string, password: string) {
  if (!username || !password) {
    return [ValidateLoginErrors.NO_DATA];
  }

  const errors: ValidateLoginErrors[] = [];

  if ((username.length < 3) || (username.length > 50)) {
    errors.push(ValidateLoginErrors.USERNAME_LENGTH);
  }

  if (!/^[A-Za-z0-9]+$/.test(username)) {
    errors.push(ValidateLoginErrors.USERNAME_MASK);
  }

  if (password.length < 5 || password.length > 20) {
    errors.push(ValidateLoginErrors.PASSWORD_LENGTH);
  }

  if (!/^[A-Za-z0-9 .!&]+$/.test(password)) {
    errors.push(ValidateLoginErrors.PASSWORD_MASK);
  }

  return errors;
}
