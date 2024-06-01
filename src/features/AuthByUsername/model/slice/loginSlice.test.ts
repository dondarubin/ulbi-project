import { LoginSchemaTypes } from '../types/loginSchema.types.';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchemaTypes> = {};
    expect(loginReducer(
      state as LoginSchemaTypes,
      loginActions.setUsername('mama'),
    )).toEqual({ username: 'mama' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchemaTypes> = {};
    expect(loginReducer(
      state as LoginSchemaTypes,
      loginActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });
});
