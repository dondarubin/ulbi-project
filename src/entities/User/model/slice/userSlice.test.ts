import { DeepPartial } from '@reduxjs/toolkit';
import { userActions, userReducer, UserSchema } from 'entities/User';

describe('userSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<UserSchema> = {};
    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData({ userId: 1, userName: 'mama' }),
    )).toEqual({ authData: { userId: 1, userName: 'mama' } });
  });
});
