import { UserRoles } from '../consts/consts';
import { UserSchema } from '../types/UserSchema.types';
import { userActions, userReducer } from './userSlice';

describe('userSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<UserSchema> = {};
    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData({ userId: 1, userName: 'mama', roles: [UserRoles.USER] }),
    )).toEqual({ authData: { userId: 1, userName: 'mama', roles: [UserRoles.USER] } });
  });
});
