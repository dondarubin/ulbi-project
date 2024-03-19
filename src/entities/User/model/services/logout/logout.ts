import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

interface LogoutProps {
  deletedRefreshToken: string
}

export const logout = createAsyncThunk<LogoutProps, void, { rejectValue: string }>(
  'user/logout',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.post<LogoutProps>('http://localhost:5000/api/logout', {}, { withCredentials: true });

      console.log(response.data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error in logout (AsyncThunk');
    }
  },
);
