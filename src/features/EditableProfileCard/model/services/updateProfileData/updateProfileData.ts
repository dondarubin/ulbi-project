import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { IProfile } from '../../../../../entities/Profile/model/types/profile.types';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { ValidateProfileErrors } from '../../types/editableProflieCard.types';
import { validateProfileData } from '../valideteProfileData/valideteProfileData';

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

export const updateProfileData = createAsyncThunk<IProfile, string, ThinkAPI<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    const {
      dispatch,
      rejectWithValue,
      extra,
      getState,
    } = thunkAPI;

    const profileFormData = getProfileFormData(getState());

    const errors = validateProfileData(profileFormData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<IProfile>(`/profile/${profileId}`, profileFormData);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
