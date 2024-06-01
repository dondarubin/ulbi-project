import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { userActions } from 'entities/User';
import { ValidateRegisterErrors } from '../../consts/consts';
import { RegisterByUsernameProps, RegisterResponseType } from './registerByUsername.types';
import { validateRegisterData } from '../validateRegisterData/validateRegisterData';

export const registerByUsername = createAsyncThunk<RegisterResponseType, RegisterByUsernameProps, ThinkAPI<ValidateRegisterErrors[]>>(
  'register/registerByUsername',
  async ({ username, password, replyPassword }, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI;

    const errors = validateRegisterData(username, password, replyPassword);
    console.log(errors);
    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.post<RegisterResponseType>('/register', {
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
      return rejectWithValue([ValidateRegisterErrors.SERVER_ERROR]);
    }
  },
);
