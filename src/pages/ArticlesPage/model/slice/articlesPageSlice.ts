import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView, IArticleWithUserData } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ArticlesPageSchema } from '../types/articlesPage.types';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<IArticleWithUserData>({
  selectId: (article) => article.article_id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPages || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.TILE,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticleWithUserData[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
