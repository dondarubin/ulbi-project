import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article.types';

// TODO написать тесы
export const fetchArticleById = createAsyncThunk<IArticle, string, ThinkAPI<string>>(
  'article/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error in fetchArticleById (AsyncThunk)');
    }
  },
);
