import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThinkAPI } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/constants/sort';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageMounted } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThinkAPI<string>>(
    'article/initArticlesPage',
    async (searchParams, thunkAPI) => {
      const {
        getState, dispatch,
      } = thunkAPI;
      const mounted = getArticlesPageMounted(getState());

      if (!mounted) {
        searchParams.forEach((value, key) => {
          switch (key) {
          case 'order':
            dispatch(articlesPageActions.setOrder(value as SortOrder));
            break;
          case 'sort':
            dispatch(articlesPageActions.setSort(value as ArticleSortField));
            break;
          case 'search':
            dispatch(articlesPageActions.setSearch(value));
            break;
          case 'type':
            dispatch(articlesPageActions.setType(value as ArticleType));
            break;
          default:
            break;
          }
        });

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
      }
    },
  );
