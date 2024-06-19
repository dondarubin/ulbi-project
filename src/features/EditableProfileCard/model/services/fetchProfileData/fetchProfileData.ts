import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from '@/app/providers/StoreProvider';
import { IProfile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThinkAPI<string>>(
  'profile/fetchProfileData',
  async (userId, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<IProfile>(`/profile/${userId}`);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error in fetchProfileData (AsyncThunk)');
    }
  },
);
