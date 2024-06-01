import { ValidateRegisterErrors } from '../../consts/consts';

export function validateRegisterData(username: string, password: string, replyPassword: string) {
  if (!username || !password || !replyPassword) {
    return [ValidateRegisterErrors.NO_DATA];
  }

  const errors: ValidateRegisterErrors[] = [];

  if ((username.length < 3) || (username.length > 50)) {
    errors.push(ValidateRegisterErrors.USERNAME_LENGTH);
  }

  if (!/^[A-Za-z0-9]+$/.test(username)) {
    errors.push(ValidateRegisterErrors.USERNAME_MASK);
  }

  if (password.length < 5 || password.length > 20) {
    errors.push(ValidateRegisterErrors.PASSWORD_LENGTH);
  }

  if (!/^[A-Za-z0-9 .!&]+$/.test(password)) {
    errors.push(ValidateRegisterErrors.PASSWORD_MASK);
  }

  if (replyPassword !== password) {
    errors.push(ValidateRegisterErrors.PASSWORD_MATCHES);
  }

  return errors;
}
