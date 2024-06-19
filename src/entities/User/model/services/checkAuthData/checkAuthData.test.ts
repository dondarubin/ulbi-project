import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { checkAuthData } from './checkAuthData';

describe('checkAuthData.test', () => {
  test('success check tokens', async () => {
    // Полные данные, которые должен вернуть сервер
    const serverResponse = {
      // UserDto, который должен вернуть сервер
      user: {
        userId: 1,
        userName: 'mama',
      },
      accessToken: 'fgdhnksjmdskgnjlzds',
      accessTokenExpiration: 1800000,
    };

    const testThunk = new TestAsyncThunk(checkAuthData);
    testThunk.api.get.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раза:
    // при самом вызове dispatch(checkAuthData),
    // при успешном выполнении и возвращении response.data(fulfilled)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(testThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  test('error check tokens', async () => {
    const testThunk = new TestAsyncThunk(checkAuthData);
    // Полные данные, которые должен вернуть сервер
    testThunk.api.get.mockReturnValue(Promise.resolve({
      status: 401,
    }));
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раз:
    // при самом вызове dispatch(checkAuthData),
    // при ошибке и возвращении thunkAPI.rejectWithValue (rejected)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(testThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toBe('error in checkAuthData (AsyncThunk)');
  });
});
