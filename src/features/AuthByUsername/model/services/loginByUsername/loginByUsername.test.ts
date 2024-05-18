import { userActions, UserRoles } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  // // Мок
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // // Выполняется перед каждым тестом
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  //
  // test('success login', async () => {
  //   // Полные данные, которые должен вернуть сервер
  //   consts serverResponse = {
  //     // UserDto, который должен вернуть сервер
  //     user: {
  //       userId: 1,
  //       userName: 'mama',
  //     },
  //     accessToken: 'fgdhnksjmdskgnjlzds',
  //     accessTokenExpiration: 1800000,
  //   };
  //
  //   mockedAxios.post.mockReturnValue(Promise.resolve({
  //     data: serverResponse,
  //   }));
  //
  //   // loginByUsername возвращает action, который принимает dispatch, getState и extra
  //   consts action = loginByUsername({ username: 'mama', password: '123' });
  //   consts result = await action(dispatch, getState, undefined);
  //
  //   // Вызвался ли userAction с правильными данными
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(serverResponse.user));
  //
  //   // Вызывается ли dispatch 3 раза:
  //   // при самом вызове dispatch(loginByUsername),
  //   // при изменении состояния setAuthData,
  //   // при успешном выполнении и возвращении response.data(fulfilled)
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //
  //   // Вызвался ли метод пост
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //
  //   // Вернулись ли правильные данные
  //   expect(result.payload).toEqual(serverResponse);
  // });
  //
  // test('error login', async () => {
  //   // Полные данные, которые должен вернуть сервер
  //   mockedAxios.post.mockReturnValue(Promise.resolve({
  //     status: 403,
  //   }));
  //
  //   // loginByUsername возвращает action, который принимает dispatch, getState и extra
  //   consts action = loginByUsername({ username: 'mama', password: '123' });
  //   consts result = await action(dispatch, getState, undefined);
  //
  //   // Вызывается ли dispatch 2 раза:
  //   // при самом вызове dispatch(loginByUsername),
  //   // при ошибке и возвращении thunkAPI.rejectWithValue (rejected)
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //
  //   // Вызвался ли метод пост
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //
  //   expect(result.payload).toBe('error in loginByUsername (AsyncThunk)');
  // });

  test('success login', async () => {
    // Полные данные, которые должен вернуть сервер
    const serverResponse = {
      // UserDto, который должен вернуть сервер
      user: {
        userId: 1,
        userName: 'mama228',
        roles: [UserRoles.USER],
      },
      accessToken: 'fgdhnksjmdskgnjlzds',
      accessTokenExpiration: 1800000,
    };

    const testThunk = new TestAsyncThunk(loginByUsername);
    testThunk.api.post.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));
    const result = await testThunk.callThunk({ username: 'mama228', password: '12345' });

    // Вызвался ли userAction с правильными данными
    expect(testThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(serverResponse.user));

    // Вызывается ли dispatch 3 раза:
    // при самом вызове dispatch(loginByUsername),
    // при изменении состояния setAuthData,
    // при успешном выполнении и возвращении response.data(fulfilled)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(3);

    // Вызвался ли метод пост
    expect(testThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  test('error login', async () => {
    const testThunk = new TestAsyncThunk(loginByUsername);
    // Полные данные, которые должен вернуть сервер
    testThunk.api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await testThunk.callThunk({ username: 'mama228', password: '12345' });

    // Вызывается ли dispatch 2 раза:
    // при самом вызове dispatch(loginByUsername),
    // при ошибке и возвращении thunkAPI.rejectWithValue (rejected)
    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);

    // Вызвался ли метод пост
    expect(testThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toStrictEqual(['server error in loginByUsername (AsyncThunk)']);
  });
});
