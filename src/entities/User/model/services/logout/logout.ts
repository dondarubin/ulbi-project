import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ThinkAPI } from 'app/providers/StoreProvider';

interface LogoutProps {
  deletedRefreshToken: string
}

export const logout = createAsyncThunk<LogoutProps, void, ThinkAPI<string>>(
  'user/logout',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<LogoutProps>('/logout', {});

      console.log(response.data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);

      return response.data;
    } catch (e) {
      return rejectWithValue('error in logout (AsyncThunk)');
    }
  },
);
