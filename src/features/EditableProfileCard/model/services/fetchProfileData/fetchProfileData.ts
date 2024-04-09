import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile';

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

export const fetchProfileData = createAsyncThunk<IProfile, string, ThinkAPI<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

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
