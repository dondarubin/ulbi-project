import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {};
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('mama'),
    )).toEqual({ username: 'mama' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {};
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });
});
