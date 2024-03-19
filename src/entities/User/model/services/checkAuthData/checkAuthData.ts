import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { RefreshResponseType } from './checkAuthData.types';

export const checkAuthData = createAsyncThunk<RefreshResponseType, void, {
  rejectValue: string
}>(
  'user/checkAuthData',
  async (arg, thunkAPI) => {
    try {
      // Тут нужен дефольный инстанс axios (без интерцепторов)
      const response = await axios.get<RefreshResponseType>('http://localhost:5000/api/refresh', { withCredentials: true });

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      // TODO Подумать, хранить токен в localstorage или в памяти фронта
      localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error in checkAuthData (AsyncThunk)');
    }
  },
);
