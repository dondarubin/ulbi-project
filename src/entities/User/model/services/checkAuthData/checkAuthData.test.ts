import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { checkAuthData } from './checkAuthData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

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

    mockedAxios.get.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));

    const testThunk = new TestAsyncThunk(checkAuthData);
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раза:
    // при самом вызове dispatch(checkAuthData),
    // при успешном выполнении и возвращении response.data(fulfilled)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  test('error check tokens', async () => {
    // Полные данные, которые должен вернуть сервер
    mockedAxios.get.mockReturnValue(Promise.resolve({
      status: 401,
    }));

    const testThunk = new TestAsyncThunk(checkAuthData);
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раз:
    // при самом вызове dispatch(checkAuthData),
    // при ошибке и возвращении thunkAPI.rejectWithValue (rejected)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toBe('error in checkAuthData (AsyncThunk)');
  });
});
