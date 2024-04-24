import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { LoginByUsernameProps, LoginResponseType } from './loginByUsername.types';
import { ValidateLoginErrors } from '../../types/loginSchema';
import { validateLoginData } from '../validateLoginData/validateLoginData';

export const loginByUsername = createAsyncThunk<LoginResponseType, LoginByUsernameProps, ThinkAPI<ValidateLoginErrors[]>>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    const errors = validateLoginData(username, password);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.post<LoginResponseType>('/login', {
        username, password,
      });

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);
      dispatch(userActions.setAuthData(response.data.user));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateLoginErrors.SERVER_ERROR]);
    }
  },
);
