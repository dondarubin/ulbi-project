import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { RefreshResponseType } from './checkAuthData.types';

export const checkAuthData = createAsyncThunk<RefreshResponseType, void, ThinkAPI<string>>(
  'user/checkAuthData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      // Тут нужен дефольный инстанс axios (без интерцепторов)
      const response = await axios.get<RefreshResponseType>(`${__API__}/refresh`, { withCredentials: true });

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      // TODO Подумать, хранить токен в localstorage или в памяти фронта
      localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);

      return response.data;
    } catch (e) {
      return rejectWithValue('error in checkAuthData (AsyncThunk)');
    }
  },
);
