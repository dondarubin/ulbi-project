import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePage,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThinkAPI<string>>(
    'article/fetchNextArticlePage',
    async (_, thunkAPI) => {
      const {
        getState, dispatch,
      } = thunkAPI;
      const hasMore = getArticlesPageHasMore(getState());
      const page = getArticlesPagePage(getState());
      const isLoading = getArticlesPageIsLoading(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({
          page: page + 1,
        }));
      }
    },
  );
