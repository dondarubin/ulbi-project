import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from '@/app/providers/StoreProvider';
import { GetAllArticleResponse } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/addQueryParams/addQueryParams';
import {
  articleRecommendationsActions,
  articleRecommendationsReducer,
} from '@/features/ArticleRecommendationsList/model/slice/articleRecommendationsSlice';
import {
  getArticlesPageLimit,
  getArticlesPageOrder, getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  replaceData?: boolean
}

// TODO написать тесы
export const fetchArticlesList = createAsyncThunk<
  GetAllArticleResponse,
  FetchArticlesListProps,
  ThinkAPI<string>>(
    'article/fetchArticlesList',
    async (_, thunkAPI) => {
      const {
        rejectWithValue, extra, getState, dispatch,
      } = thunkAPI;
      const sort = getArticlesPageSort(getState());
      const order = getArticlesPageOrder(getState());
      const search = getArticlesPageSearch(getState());
      const limit = getArticlesPageLimit(getState());
      const page = getArticlesPagePage(getState());
      const type = getArticlesPageType(getState());

      try {
        addQueryParams({
          sort, order, search, type,
        });
        const response = await extra.api.get<GetAllArticleResponse>('/articles', {
          params: {
            limit,
            page,
            sort,
            order,
            search,
            type,
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
