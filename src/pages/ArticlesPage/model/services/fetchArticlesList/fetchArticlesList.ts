import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { IArticleWithUserData } from 'entities/Article';

// TODO написать тесы
export const fetchArticlesList = createAsyncThunk<IArticleWithUserData[], void, ThinkAPI<string>>(
  'article/fetchArticlesList',
  async (_, thunkAPI) => {
    const {
      rejectWithValue, extra,
    } = thunkAPI;

    try {
      const response = await extra.api.get<IArticleWithUserData[]>('/articles');

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error in fetchArticlesList (AsyncThunk)');
    }
  },
);
