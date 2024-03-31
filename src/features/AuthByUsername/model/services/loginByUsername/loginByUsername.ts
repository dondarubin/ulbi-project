import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { LoginByUsernameProps, LoginResponseType } from './loginByUsername.types';

// TODO Прописать обработку ошибок при неудачном запросе
// rejectValue: {
//   'message': string,
//     'errors': [
//     {
//       'type': string,
//       'msg': string,
//       'path': string,
//       'location': string
//     }
//   ]
// }
//
// enum LoginErrors {
//   INCORRECT_DATA="400...",
//   SERVER_ERROR="400...",
//   ...
// }

export const loginByUsername = createAsyncThunk<LoginResponseType, LoginByUsernameProps, ThinkAPI<string>>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<LoginResponseType>('/login', {
        username, password,
      });

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      // TODO Подумать, хранить токен в localstorage или в памяти фронта
      localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);
      dispatch(userActions.setAuthData(response.data.user));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error in loginByUsername (AsyncThunk)');
    }
  },
);
