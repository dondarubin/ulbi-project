import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('should return authData value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          userId: 1,
          userName: 'mama',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ userId: 1, userName: 'mama' });
  });
});
