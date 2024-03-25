import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { logout } from './logout';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('logout.test', () => {
  test('success logout', async () => {
    // Полные данные, которые должен вернуть сервер
    const serverResponse = {
      deletedRefreshToken: 'fgdsgrsijfdnijfnegisgnfod',
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));

    const testThunk = new TestAsyncThunk(logout);
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раза:
    // при самом вызове dispatch(logout),
    // при успешном выполнении и возвращении response.data(fulfilled)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  test('error logout', async () => {
    // Полные данные, которые должен вернуть сервер
    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const testThunk = new TestAsyncThunk(logout);
    const result = await testThunk.callThunk();

    // Вызывается ли dispatch 2 раз:
    // при самом вызове dispatch(loginByUsername),
    // при ошибке и возвращении thunkAPI.rejectWithValue (rejected)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toBe('error in logout (AsyncThunk)');
  });
});
