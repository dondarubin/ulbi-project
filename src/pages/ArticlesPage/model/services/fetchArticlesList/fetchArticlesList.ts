import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { GetAllArticleResponse } from 'entities/Article/model/types/article.types';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page?: number;
}

// TODO написать тесы
export const fetchArticlesList = createAsyncThunk<
  GetAllArticleResponse,
  FetchArticlesListProps,
  ThinkAPI<string>>(
    'article/fetchArticlesList',
    async (props, thunkAPI) => {
      const {
        rejectWithValue, extra, getState,
      } = thunkAPI;
      const { page = 1 } = props;
      const limit = getArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<GetAllArticleResponse>('/articles', {
          params: {
            limit,
            page,
          },
        });

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
