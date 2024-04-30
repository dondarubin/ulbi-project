import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

// TODO написать тесы
export const fetchArticleCommentsById = createAsyncThunk<IComment[], string, ThinkAPI<string>>(
  'article/fetchArticleCommentsById',
  async (articleId, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<IComment[]>(`/comments/${articleId}`);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error in fetchArticleCommentsById (AsyncThunk)');
    }
  },
);
