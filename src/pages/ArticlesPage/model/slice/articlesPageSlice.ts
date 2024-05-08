import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  ArticleSortField, ArticleTypes, ArticleView, IArticleWithUserData,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { SortOrder } from 'shared/constants/sort';
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
    page: 1,
    hasMore: true,
    limit: 12,
    _mounted: false,
    search: '',
    order: SortOrder.ASC,
    sort: ArticleSortField.CREATED,
    type: ArticleTypes.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.TILE ? 12 : 4;
      state._mounted = true;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replaceData) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.replaceData) {
          articlesAdapter.setAll(state, action.payload.searchingArticles);
        } else {
          articlesAdapter.addMany(state, action.payload.searchingArticles);
        }
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
