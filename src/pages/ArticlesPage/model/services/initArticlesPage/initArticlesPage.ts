import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { getArticlesPageMounted, getArticlesPagePage } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThinkAPI<string>>(
    'article/initArticlesPage',
    async (_, thunkAPI) => {
      const {
        getState, dispatch,
      } = thunkAPI;

      const page = getArticlesPagePage(getState());
      const mounted = getArticlesPageMounted(getState());

      if (!mounted) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
          page,
        }));
      }
    },
  );
