import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { ValidateQuestionErrors } from '../../consts/consts';
import { AiResponse } from '../../types/AskAiHelperForm.types';

export const getAiHistory = createAsyncThunk<AiResponse[], void, ThinkAPI<ValidateQuestionErrors>>(
  '/getAiHistory',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const userData = getUserAuthData(getState());

    if (!userData) {
      return rejectWithValue(ValidateQuestionErrors.NO_DATA);
    }

    try {
      const response = await extra.api.get<AiResponse[]>(`/getGptHistory/${userData.userId}`);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(ValidateQuestionErrors.SERVER_ERROR);
    }
  },
);
