import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { ArticleSortField, GetAllArticleResponse, getArticleDetailsData } from 'entities/Article';
import { SortOrder } from 'shared/constants/sort';

// TODO написать тесы
export const fetchArticleRecommendations = createAsyncThunk<
  GetAllArticleResponse,
  void,
  ThinkAPI<string>>(
    'article/fetchArticleRecommendations',
    async (_, thunkAPI) => {
      const {
        rejectWithValue, extra, getState,
      } = thunkAPI;
      const articleDetailsData = getArticleDetailsData(getState());

      try {
        const response = await extra.api.get<GetAllArticleResponse>('/articles', {
          params: {
            limit: 8,
            page: 1,
            sort: ArticleSortField.CREATED,
            order: SortOrder.DESC,
            search: '',
            type: articleDetailsData?.type[0],
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
