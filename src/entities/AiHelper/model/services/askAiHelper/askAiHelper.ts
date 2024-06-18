import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { ValidateQuestionErrors } from '../../consts/consts';
import { getAiHelperQuestionText } from '../../selectors/AskAiHelperFormSelectors';
import { AiResponse } from '../../types/AskAiHelperForm.types';

export const askAiHelper = createAsyncThunk<AiResponse, void, ThinkAPI<ValidateQuestionErrors>>(
  '/askAiHelper',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const questionText = getAiHelperQuestionText(getState());
    const userData = getUserAuthData(getState());

    if (!questionText || !userData) {
      return rejectWithValue(ValidateQuestionErrors.NO_DATA);
    }

    try {
      const response = await extra.api.post<AiResponse>('/askGpt', {
        user_id: userData.userId,
        prompt: questionText,
      });

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
