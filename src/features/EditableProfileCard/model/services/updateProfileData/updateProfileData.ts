import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { getProfileFormData } from 'features/EditableProfileCard/model/selectors/getProfileFormData/getProfileFormData';
import { IProfile } from '../../../../../entities/Profile/model/types/profile.types';

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

export const updateProfileData = createAsyncThunk<IProfile, string, ThinkAPI<string>>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    const {
      dispatch,
      rejectWithValue,
      extra,
      getState,
    } = thunkAPI;

    const profileFormData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<IProfile>(`/profile/${profileId}`, profileFormData);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error in updateProfileData (AsyncThunk)');
    }
  },
);
